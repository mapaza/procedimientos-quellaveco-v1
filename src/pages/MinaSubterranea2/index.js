/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from "react";

import {
  Container,
} from "./styles";
import VergeViewer from "../../components/VergeViewer";
import VergeScreen from "../../components/VergeScreen";
import VergeLockPortrait from "../../components/VergeLockPortrait";
import { AiTwotoneSliders } from "react-icons/ai";

const pasos1 = [
  {
    id: 1,
    nombre: "Inspección del actuador",
    type: "pro1",
    step: 1,
  },
  {
    id: 2,
    nombre: "Desmontaje del actuador",
    type: "pro1",
    step: 2,
  },
  {
    id: 3,
    nombre: "Limpieza",
    type: "pro1",
    step: 3,
  },
  {
    id: 4,
    nombre: "Lubricación",
    type: "pro1",
    step: 4,
  },  
  {
    id: 5,
    nombre: "Cambio de piezas de desgaste y montaje",
    type: "pro1",
    step: 5,
  }
];

const buttons = [
  {
    menu: 1,
    id: "pro1-btn",
    icon: <AiTwotoneSliders />,
    title: "Transmisión colineal",
    steps: pasos1,
  },
];

function MinaSubterranea() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [images, setImages] = useState(null);
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(1);

  const canChangeMenu = useCallback(
    (id) => {
      if (activeMenu === -1 && id === buttons[0].menu) return true;

      if (activeMenu === id) return false;

      if (activeMenu > id + 1) return false;

      if (activeMenu + 1 === id) {
        const buttonsTmp = buttons.filter((w) => w.menu <= activeMenu);

        const lengths = buttonsTmp.map((x) => x.steps.length);

        const suma = lengths.reduce((acc, element) => acc + element, 0);

        if (suma === step) {
          return true;
        }
        return false;
      }

      return false;
    },
    [activeMenu, step]
  );

  const handleChangeMenu = useCallback(
    (id) => {
      if (canChangeMenu(id)) {
        setActiveMenu(id);
      }
    },
    [activeMenu, step]
  );

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
      <VergeViewer src="/applications/MinaSubterranea/Mina/Mina.html" title="Mina" />
      <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
{/*       <VergeLeftMenu
        buttons={buttons}
        activeMenu={activeMenu}
        openFirstMenu
        onChangeMenu={handleChangeMenu}
        step={step}
        nextStep={nextStep}
        onNext={handleNext}
      /> */}
      <VergeScreen
        path="/recursos/alineamiento/imagenes"
        images={images}
      />
      {/* <VergeMessage /> */}
      {/* <VergeFullScreen /> */}
      {/* <VergeInfo /> */}
      {/* <PoweredBy src="/logo.svg" alt="Potenciado por Tecsup" /> */}
      {/* <VergeLockPortrait /> */}
      {/* <VergePreloader /> */}
    </Container>
  );
}

export default MinaSubterranea;
