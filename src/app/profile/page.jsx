"use client";
import React from "react";
import "@/app/profile/style.css"; // Asegúrate de que la ruta sea correcta
// import perfilImg from "@/app/profile/img/Perfil.png"; // Asegúrate de que la ruta sea correcta
import perfilImg from "@/app/profile/img/per.jpg"; // Asegúrate de que la ruta sea correcta
import Navigation from "../components/Navbar/Navbar";

const Page = () => {
  return (
    <div className="padre">
      <div className="navar">
        <Navigation />
      </div>
      <div className="cuerpo">
        <div className="perfil">
          <div className="foto">
            <img id="perfil" src={perfilImg} alt="Perfil" />
          </div>
          <div className="contenido">
            <div className="nombre">
              <h1>Juanito Alcachofa</h1>
            </div>
            <div className="descripcion">Estos son mis videos</div>
          </div>
          <div className="botones_container">
            <div className="botones">
              <p>Seguir</p>
            </div>
            <div className="botones">
              <p>Mensaje</p>
            </div>
          </div>
        </div>
        <div className="videos">
          <div className="video">
            <div className="ver"></div>
            <div className="vinombre">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis
              </p>
            </div>
          </div>
          <div className="video">
            <div className="ver"></div>
            <div className="vinombre">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis
            </div>
          </div>
          <div className="video">
            <div className="ver"></div>
            <div className="vinombre">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
