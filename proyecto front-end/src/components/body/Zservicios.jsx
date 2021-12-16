import { Link} from "react-router-dom";
import Header from '../commons/Header';
import Footer from '../commons/Footer';

 function Zservicios() {
    return (
      <div>
      <Header/>
        <section className="u-clearfix u-palette-5-base u-section-1" id="sec-28b6">
          
          <h1 className="u-text u-text-white u-text-14">Nuestros servicios<span style={{fontWeight: 500}} />
          </h1>
          <div className="u-blog u-container-style u-layout-grid u-blog-1">
            <div className="u-list-control" />
            <div className="u-repeater-1 u-repeater">
            <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-1">
            <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-3"><b>Revisión de frenos</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/FRENOS.jpg" />
                  <p className="u-align-justify u-text u-text-3">Realizamos la mejor técnica que hace más eficaz la frenada, evita el desgaste y el sobrecalentamiento del sistema de frenos.
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>30,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:15
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-3"><b>Pastillas para frenos</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/PASTILLAS.jpg" />
                  <p className="u-align-justify u-text u-text-3">Juegan un papel importante para hacer que su automóvil se detenga cuando presiona el pedal del freno y nosotros lo mejoramos
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>75,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:30
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-3">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                <h3 className="u-align-center u-text u-text-3"><b>Frenos de discos</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/discos.jpg" />
                  <p className="u-align-justify u-text u-text-3">Nos destacamos por ofrecer una experiencia impecable para la revisión y reparación del sistema de frenado de tu vehículo
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>87,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:40
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-4">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-3"><b>Suspensión</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/suspension.jpg" />
                  <p className="u-align-justify u-text u-text-3">​La suspensión sustenta la carrocería sobre las ruedas, uniéndolas con el chasis y controlando los movimientos e inercias
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>45,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:15
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-3"><b>Amortiguadores</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/amortiguadores.jpg" />
                  <p className="u-align-justify u-text u-text-3">El amortiguador controla los movimientos y garantiza que las llantas estén adheridas al camino acreciendo la estabilidad.
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>55,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:30
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-3"><b>Cambio de aceite</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/cambiodeaceite.jpg" />
                  <p className="u-align-justify u-text u-text-3">​El cambio de aceite es el servicio que casi siempre marca las veces que un carro va al taller ya que es el que se hace con más frecuencia. 
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>40,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:20
                  </p>
                </div>
              </div>{/*/blog_post*/}{/*blog_post*/}
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-3"><b>Alineación</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/alineacion.jpg" />
                  <p className="u-align-justify u-text u-text-3">​La Alineación da vida útil a las llantas, además mejora el desempeño del carro y reducción de consumo de combustible.
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>65,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:25
                  </p>
                </div>
              </div>{/*/blog_post*/}{/*blog_post*/}
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-3"><b>Rotación de llantas</b></h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/rotaciondellantas.jpg" />
                  <p className="u-align-justify u-text u-text-3">​El Balanceo es vital para el cuidado del vehículo,evita  que las llantas sufran de deformaciones, ruidos y un prematuro desgaste.
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8">
                  <b>Precio: </b>50,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"> 
                  <b>Duración: </b>00:40
                  </p>
                </div>
              </div>
            </div>
            <div className="u-list-control" />
          </div>
        </section>
        <Footer/>
        </div>
      );
    }
  
export default Zservicios;
