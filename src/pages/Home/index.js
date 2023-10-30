/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';



function Home() {
 
  return (
  
     <div className="flexbox-container">
     <div className="flexbox-item fixed">
       <div className="demo">
       <h2>Laboratorios Web</h2>
       <img src=".././images/logo-eduverso.png" class="logo-chinalco-menu" alt="" />
 <ol className="ol">
     <li className="li">
       <a className="laboratorio-link" href="/identificacion-de-tipos-de-desgaste">Identificación de desgastes - Inspección visual</a>
     </li>
     <li className="li">
       <a className="laboratorio-link" href="/valvula-neumatica-v2">Valvula Neumatica</a>
     </li>
     <li className="li">
       <a className="laboratorio-link" href="/laboratorio-bomba">Laboratorio Bomba</a>
     </li>
     <li className="li">
       <a className="laboratorio-link" href="/laboratorio-tambor">Laboratorio Tambor</a>
     </li>
     <li className="li">
       <a className="laboratorio-link" href="/mina-subterranea">Mina Subterránea</a>
     </li>
     
 </ol>
       </div>
     </div>
   </div>
  )
}

export default Home;