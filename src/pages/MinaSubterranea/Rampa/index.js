/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useCallback, useEffect } from "react";

import { Container, /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../../components/VergeViewer";
import {AiTwotoneSetting} from "react-icons/ai";

const opciones_menu = [
  {
    id: 1,
    nombre: "Inicio",
    type: "pro1",
    step: 1,
  },
  {
    id: 2,
    nombre: "Explosion",
    type: "1",
    step: 2,
  },
  {
    id: 3,
    nombre: "Animación",
    type: "pro1",
    step: 3,
  }
];

const buttons = [
  {
    menu: 1,
    id: "pro1",
    icon: <AiTwotoneSetting />,
    title: "Menú Principal",
    steps: opciones_menu
  },

]

function Rampa() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [images, setImages] = useState(null);
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);
  const handleChangeMenu = useCallback((id) => {
    // if (canChangeMenu(id)) {
    if (id === 2) {
      setStep(0);
    }
    setActiveMenu(id);
    // }
  }, [activeMenu, step])


  useEffect(() => {
    setImages(null);
  }, [activeMenu]);

  const handleChangeState = useCallback((e) => {
    setNextStep(parseInt(e.target.value) + 1);
  }, []);

  //console.log("nextStep", nextStep);

  useEffect(() => {
    const input = document.querySelector("#estado_animacion");
    input.addEventListener("input", handleChangeState);
    return () => input.removeEventListener("input", handleChangeState);
  }, []);

  const handleNext = (imagenes = null) => {
    if (!imagenes) {
      let paso;

      buttons.forEach((button) => {
        if (!button.steps) return;
        if (activeMenu === button.menu) {
          paso = button.steps.find((x) => parseInt(x.step) === step + 1);
        }
      });

      if (paso) {
        setImages(paso.imagenes || null);
      } else {
        setImages(null);
      }
    } else {
      setImages(imagenes);
    }
    const buttonsTmp = buttons.filter((w) => w.menu <= activeMenu);
    const lengths = buttonsTmp.map((x) => x.steps.length);
    const suma = lengths.reduce((acc, element) => acc + element, 0);
    if (step + 1 <= suma && step + 1 === nextStep) setStep(step + 1);
  };

  return (
    <Container>
      <VergeViewer
        src="/applications/MinaSubterranea/Mina_Rampa/Mina_Rampa.html"
        title="Mina Subterránea"
      />
     <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
     
      {/* <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
      <VergeLeftMenu
        buttons={buttons}
        activeMenu={activeMenu}
        onChangeMenu={handleChangeMenu}
        step={step}
        nextStep={nextStep}
        onNext={handleNext}
      />
      <VergeScreen path="/recursos/alineamiento/imagenes" images={images} />
      <VergeMessage />
      <VergeFullScreen />
      <VergeInfo />
      <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" />
      <VergeLockPortrait />
      <VergePreloader /> */}
      
    </Container>
  );
}

export default Rampa;
