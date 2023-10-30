import React , { useState, useCallback, useEffect } from "react";

import { Container, /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";
import VergePreloader from "../../components/VergePreloader";
import VergeLeftMenu2 from '../../components/VergeLeftMenu2';
import {AiTwotoneSetting} from "react-icons/ai";

function AislamientoYBloqueo(){
    const [nextStep, setNextStep] = useState(1);

    const handleChangeState = useCallback((e) => {
        setNextStep(parseInt(e.target.value) + 1);
      }, []);
    useEffect(() => {
        const input = document.querySelector("#estado_animacion");
        input.addEventListener("input", handleChangeState);
        return () => input.removeEventListener("input", handleChangeState);
      }, []);

      

    return (
        <Container>
          <VergeViewer
            src="/applications/Aislamiento_y_bloqueo/Aislamiento y bloqueo.html"
            title="Laboratorio Bomba"
          />
         <input
            id="estado_animacion"
            defaultValue="0"
            style={{ display: "none" }}
          />
          </Container>
  );
         
}

export default AislamientoYBloqueo;