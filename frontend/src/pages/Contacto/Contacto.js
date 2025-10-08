// import React, { useState, useEffect } from "react";
// import { Grid, Dimmer, Loader } from "semantic-ui-react";
// import { MenuRedesSociales } from "../../components";

// import "./Contacto.scss";
// // import imaMaps from "../../../logos/imaMaps.png";

// export function Contacto() {
//   const [mapaCargado, setMapaCargado] = useState(false);

//   const cargarMapa = () => {
//     setMapaCargado(true);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       // behavior: "smooth",
//       /* you can also use 'auto' behaviour
//          in place of 'smooth' */
//     });
//   };

//   useEffect(() => {
//     scrollToTop();
//   }, []);

//   return (
//     <>
//       <Dimmer active={!mapaCargado} inverted>
//         <Loader size="big">Espere un momento</Loader>
//       </Dimmer>

//       <Grid
//         stackable
//         className="gridPage"
//         style={{ display: mapaCargado ? "flex" : "none" }}
//       >
//         <Grid.Row>
//           <Grid.Column>
//             <h2 className="tituloPage">CONTACTO</h2>
//             <h2 className="subtituloPage">
//               Comunicate con nosotros a través de los siguientes medios:
//             </h2>
//           </Grid.Column>
//         </Grid.Row>

//         <Grid.Row columns={2} style={{ padding: "0px" }}>
//           <Grid.Column width={8}>
//             <h3 className="tituloItem">Teléfono:</h3>

//             <p className="descripcionItem">– (0388) 4245518</p>
//             <h3 className="tituloItem">E-mail:</h3>
//             <p className="descripcionItem">
//               unidaddeinvestigacion.msj@gmail.com
//             </p>
//             <h3 className="tituloItem">Personalmente:</h3>
//             <p className="descripcionItem">
//               Av. Italia esq. Independencia – Hall Auditorium. CP 4600 San
//               Salvador de Jujuy – JUJUY-ARGENTINA De 08:00 a 13:00 hs
//             </p>
//           </Grid.Column>

//           <Grid.Column width={8} textAlign="center" style={{ height: "50vh" }}>
//             {/* <Menu.Item
//             as={Link}
//             to="https://maps.app.goo.gl/hQEuCPJzbKGFE97A7"
//             target="_blank"
//           >
//             <img className="contactoMapa" alt="" src={imaMaps}></img>
//           </Menu.Item> */}
//             <iframe
//               title="Mapa de google"
//               className="contactoMapa"
//               onLoad={cargarMapa}
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5191.9211060443085!2d-65.29637308246305!3d-24.1867706389301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f5b8e135cdd%3A0xdef2a693fecfc293!2sMinisterio%20de%20Salud!5e0!3m2!1ses!2sar!4v1699364448663!5m2!1ses!2sar"
//               style={{ border: 0 }}
//               // allowfullscreen=""
//               // loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </Grid.Column>
//         </Grid.Row>

//         <Grid.Row
//           centered
//           verticalAlign="middle"
//           style={{ padding: "10px 0px 40px 0px" }}
//         >
//           <MenuRedesSociales />
//         </Grid.Row>
//       </Grid>
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Grid, Dimmer, Loader, Transition } from "semantic-ui-react";
// import { MenuRedesSociales } from "../../components";

// import "./Contacto.scss";

// export function Contacto() {
//   const [mapaCargado, setMapaCargado] = useState(false);
//   const [activado, setActivado] = useState(false);

//   useEffect(() => {
//     setActivado((a) => !a);
//     scrollToTop();
//   }, []);

//   const cargarMapa = () => {
//     setMapaCargado(true);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//     });
//   };

//   return (
//     <>
//       <Dimmer active={!mapaCargado} inverted>
//         <Loader size="big">Espere un momento</Loader>
//       </Dimmer>

//       <Grid
//         stackable
//         className="gridPage"
//         style={{ display: mapaCargado ? "flex" : "none" }}
//       >
//         <Grid.Row>
//           <Transition animation="fade left" duration={1000} visible={activado}>
//             <Grid.Column>
//               <h2 className="tituloPage">CONTACTO</h2>
//               <p className="descripcionPage">
//                 Para obtener mayor información sobre el proceso de admisión y
//                 evaluación de protocolos de investigación, o para realizar
//                 consultas relacionadas con la normativa vigente, la Unidad de
//                 Investigación pone a disposición los siguientes canales de
//                 contacto.
//               </p>
//             </Grid.Column>
//           </Transition>
//         </Grid.Row>
//         <Transition animation="fade right" duration={1000} visible={activado}>
//           <Grid.Row
//             columns={2}
//             verticalAlign="middle"
//             style={{ padding: "0px" }}
//           >
//             <Grid.Column width={7} style={{ maxHeight: "400px" }}>
//               <h3 className="tituloItem">Teléfono:</h3>

//               <p className="descripcionItem">(0388) 4245518</p>
//               <h3 className="tituloItem">Correo electrónico:</h3>
//               <p className="descripcionItem">
//                 unidaddeinvestigacion.msj@gmail.com
//               </p>
//               <h3 className="tituloItem">Personalmente:</h3>
//               <p className="descripcionItem">
//                 Av. Italia esq. Independencia – Hall Auditorium. CP 4600 San
//                 Salvador de Jujuy – JUJUY-ARGENTINA De 08:00 a 13:00 hs
//               </p>
//             </Grid.Column>

//             <Grid.Column
//               width={9}
//               textAlign="center"
//               style={{ height: "50vh", maxHeight: "400px" }}
//             >
//               {/* <Menu.Item
//             as={Link}
//             to="https://maps.app.goo.gl/hQEuCPJzbKGFE97A7"
//             target="_blank"
//           >
//             <img className="contactoMapa" alt="" src={imaMaps}></img>
//           </Menu.Item> */}
//               <iframe
//                 title="Mapa de google"
//                 className="contactoMapa"
//                 onLoad={cargarMapa}
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5191.9211060443085!2d-65.29637308246305!3d-24.1867706389301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f5b8e135cdd%3A0xdef2a693fecfc293!2sMinisterio%20de%20Salud!5e0!3m2!1ses!2sar!4v1699364448663!5m2!1ses!2sar"
//                 style={{ border: 0 }}
//                 // allowfullscreen=""
//                 // loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </Grid.Column>
//           </Grid.Row>
//         </Transition>
//         <Grid.Row
//           centered
//           verticalAlign="middle"
//           style={{ padding: "10px 0px 40px 0px" }}
//         >
//           <Transition animation="fade left" duration={1000} visible={activado}>
//             <div>
//               <MenuRedesSociales />
//             </div>
//           </Transition>
//         </Grid.Row>
//       </Grid>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Grid, Dimmer, Loader, Transition, Icon } from "semantic-ui-react";
import { MenuRedesSociales } from "../../components";
import "./Contacto.scss";

export function Contacto() {
  const [mapaCargado, setMapaCargado] = useState(true);
  const [activado, setActivado] = useState(false);

  useEffect(() => {
    setActivado((a) => !a);
    scrollToTop();
  }, []);

  const cargarMapa = () => {
    setMapaCargado(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {/* Loader mientras se carga el mapa */}
      <Dimmer active={!mapaCargado} inverted>
        <Loader size="large">Cargando mapa...</Loader>
      </Dimmer>

      <Grid
        stackable
        className="gridPage contactoContainer"
        style={{ display: mapaCargado ? "flex" : "none" }}
      >
        {/* Título y descripción */}
        <Grid.Row>
          <Transition animation="fade down" duration={1000} visible={activado}>
            <Grid.Column textAlign="center">
              <h2 className="tituloPage">📞 Contacto</h2>
              <p className="descripcionPage">
                Para obtener información sobre la admisión y evaluación de
                protocolos de investigación, o realizar consultas sobre la
                normativa vigente, la Unidad de Investigación pone a disposición
                los siguientes medios de contacto.
              </p>
            </Grid.Column>
          </Transition>
        </Grid.Row>

        {/* Datos de contacto + mapa */}
        <Transition animation="fade up" duration={1000} visible={activado}>
          <Grid.Row columns={2} verticalAlign="middle" className="contactoInfo">
            {/* Información de contacto */}
            <Grid.Column width={7}>
              <div className="contactCard">
                <h3 className="tituloItem">
                  <Icon name="phone" color="blue" /> Teléfono:
                </h3>
                <p className="descripcionItem">(0388) 4245518</p>

                <h3 className="tituloItem">
                  <Icon name="mail" color="blue" /> Correo electrónico:
                </h3>
                <p className="descripcionItem">
                  unidaddeinvestigacion.msj@gmail.com
                </p>

                <h3 className="tituloItem">
                  <Icon name="map marker alternate" color="blue" /> Dirección:
                </h3>
                <p className="descripcionItem">
                  Av. Italia esq. Independencia – Hall Auditorium. <br />
                  CP 4600 - San Salvador de Jujuy, Argentina <br />
                  <b>Horario:</b> 08:00 a 13:00 hs
                </p>
              </div>
            </Grid.Column>

            {/* Mapa */}
            <Grid.Column width={9} textAlign="center">
              <iframe
                title="Ubicación del Ministerio de Salud de Jujuy"
                className="contactoMapa"
                onLoad={cargarMapa}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5191.9211060443085!2d-65.29637308246305!3d-24.1867706389301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f5b8e135cdd%3A0xdef2a693fecfc293!2sMinisterio%20de%20Salud!5e0!3m2!1ses!2sar!4v1699364448663!5m2!1ses!2sar"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid.Column>
          </Grid.Row>
        </Transition>

        {/* Redes sociales */}
        <Grid.Row centered style={{ padding: "40px 0" }}>
          <Transition animation="fade" duration={1000} visible={activado}>
            <div className="contactoRedes">
              <h3 className="tituloItem" style={{ textAlign: "center" }}>
                <Icon name="share alternate" color="blue" /> Nuestras redes
              </h3>
              <MenuRedesSociales />
            </div>
          </Transition>
        </Grid.Row>
      </Grid>
    </>
  );
}
