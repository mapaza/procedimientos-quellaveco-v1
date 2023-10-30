/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef, useCallback, createRef } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaCheckCircle } from 'react-icons/fa';

import { Container, Item, Menu, Content, Title, Li, ToggleIcon } from './styles';


function VergeLi({ number, text, type, activeMenu, step, menu, onNext, imagenes = null, nextStep = false }) {
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState(0);
  /* useEffect(() => {
    setClicked(false);
  }, [activeMenu]) */


  /* useEffect(() => {
    if (menu === activeMenu) {
      if (number <= step) {
        setClicked(true);
      }
    }
  }, [step]) */

  const handleClick = value => () => {
    setActive(value);
    if(number === active){
      setClicked(true);
    }
  }

  const canHover = () => {

    /* if (!nextStep) return step + 1 >= number;

    return step + 1 >= number && step + 1 === nextStep; */

    return true;
  }


  return (
    <Li id={`${type}-paso${number}`} canHover={canHover()} className={`${type === "section" && "section"}`} onClick={(handleClick(number))}>
      {type !== "section" && <FaCheckCircle style={{ flexShrink: 0 }} />}
      <a id={`${type}-paso${number}`}>{text}</a>
    </Li>

  )
}

function VergeLeftMenu2({
  onChangeMenu,
  step,
  onNext,
  activeMenu,
  nextStep,
  openFirstMenu = false,
  buttons }) {
  const [open, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState();
  const menusRef = useRef(buttons.map(() => createRef()));
  const toggleContent = () => {
    setIsOpen(!open);
  }
  const handleChangeMenu = (id) => () => {
    if (id !== activeMenu) onChangeMenu(id);

    if (activeMenu === -1) {
      setIsOpen(true);
    }
    if (id === activeMenu) {
      setIsOpen(!open);
    } else {
      setIsOpen(true);
    }
  }


  useEffect(() => {
    if (openFirstMenu) {
      setIsOpen(true);
    }
  }, [])

  useEffect(() => {
    buttons.forEach((button, index) => {
      if (activeMenu === button.menu) {
        if (menusRef.current[index].current) {
          menusRef.current[index].current.scrollTo(0, 0);
        }
      }
    })
    onChangeMenu(activeMenu);
  }, [activeMenu, onChangeMenu])

  // useEffect(() => {
  //   if (buttons.length) {
  //     onChangeMenu(buttons[0].menu);
  //   }
  // }, [])

  const renderView = useCallback((button) => {
    if (button.steps) {

      const toggleActive= (e, index) => {
        setActiveId(index);
      };

      function toggleActiveStyles(index, type){
        if (type === "section") {
          return "header";
        } else if(activeId === index){
          return "section active";
        } else if (activeId !== index) {
          return "section inactive";
        }  
      }

      return (
        <ul>
          {button.steps.map((i) => (
              <Li id={`${i.type}-paso${i.step}-li`} key={i.step} className={`${toggleActiveStyles(i.step, i.type)}`} onClick={e => toggleActive(e, i.step)}>
                {i.type !== "section" && <FaCheckCircle style={{ flexShrink: 0 }} />}
                <a id={`${i.type}-paso${i.step}`}>{i.nombre}</a>
              </Li>
          ))}
        </ul>
      )
    } else if (button.text) {
      return <p>{button.text}</p>
    }

    return null;
  }, [activeMenu, step, onNext, activeId])


  return (
    <Container>
      <ToggleIcon onClick={toggleContent}>
        {open ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </ToggleIcon>
      <Menu>
        {buttons.map((button) => (
          <Item id={`${button.id}-button`} key={button.menu} className={activeMenu === button.menu && "active"} onClick={handleChangeMenu(button.menu)}>
            <a id={button.id}>{button.icon}</a>
          </Item>
        ))}
      </Menu>
      {buttons.map((button, index) => (
        <Content numberButtons={buttons.length} ref={menusRef.current[index]} key={button.menu} open={open && activeMenu === button.menu}  >
          <Title>{button.title}</Title>
          {renderView(button)}
        </Content>
      ))}
    </Container>
  );
}

export default VergeLeftMenu2;