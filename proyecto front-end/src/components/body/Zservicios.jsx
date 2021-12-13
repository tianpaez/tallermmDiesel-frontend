import { Link} from "react-router-dom";
import Header from '../commons/Header';
import Footer from '../commons/Footer';


 function Zservicios() {
    return (
      <div>
      <Header/>
        <section className="u-clearfix u-palette-5-base u-section-1" id="sec-28b6">
          
          <h1 className="u-text u-text-white u-text-1">Nuestros servicios<span style={{fontWeight: 500}} />
          </h1>
          <div className="u-blog u-container-style u-layout-grid u-blog-1">
            <div className="u-list-control" />
            <div className="u-repeater-1 u-repeater">
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-1">
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <h3 className="u-align-center u-text u-text-2">Revisión de frenos</h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-2" data-image-width={637} data-image-height={478} src="images/FRENOS.jpg" />
                  <p className="u-align-justify u-text u-text-3">Realizamos la mejor técnica de conducción deportiva que hace más eficaz la frenada, además de evitar el desgaste y el sobrecalentamiento del sistema de&nbsp;<b>frenos.</b>
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"><span className="u-icon u-icon-3"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;100,000&nbsp;
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-9"><span className="u-icon u-icon-4"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp;00:40
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <h3 className="u-align-center u-text u-text-2">Pastillas para frenos</h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-3" src="images/PASTILLAS.jpg" data-image-width={275} data-image-height={183} />
                  <p className="u-align-justify u-text u-text-3">Componente clave del sistema&nbsp;<b>de frenos</b>&nbsp;del vehículo y juegan un papel importante&nbsp;<b>para</b>&nbsp;hacer que su automóvil se detenga cuando presiona el pedal del&nbsp;<b>freno</b>
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"><span className="u-icon u-icon-3"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;100,000&nbsp;
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-9"><span className="u-icon u-icon-4"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp;00:40
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-3">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <h3 className="u-align-center u-text u-text-10">Frenos de discos</h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-4" src="images/discos.jpg" data-image-width={1920} data-image-height={1080} />
                  <p className="u-align-justify u-text u-text-11">Nos destacamos por ofrecer una experiencia impecable para la revisión y reparación del sistema de frenado de tu vehículo</p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"><span className="u-icon u-icon-3"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;100,000&nbsp;
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-9"><span className="u-icon u-icon-4"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp;00:40
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-4">
                <div className="u-container-layout u-similar-container u-container-layout-4">
                  <h3 className="u-align-center u-text u-text-14">Suspensión</h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-5" src="images/suspension.jpg" data-image-width={800} data-image-height={640} />
                  <p className="u-align-justify u-text u-text-3"> La&nbsp;<b>suspensión</b>&nbsp;sustenta la carrocería sobre las ruedas, uniéndolas con el chasis y controlando los movimientos e inercias. <span style={{fontSize: '0.625rem'}} />
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"><span className="u-icon u-icon-3"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;100,000&nbsp;
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-9"><span className="u-icon u-icon-4"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp;00:40
                  </p>
                </div>
              </div>
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-5">
                <div className="u-container-layout u-similar-container u-container-layout-5">
                  <h3 className="u-align-center u-text u-text-18">Amortiguadores</h3>
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-6" src="images/amortiguadores.jpg" data-image-width={620} data-image-height={264} />
                  <p className="u-align-justify u-text u-text-3">El&nbsp;<b>amortiguador</b>&nbsp;es la parte de la suspensión que controla los movimientos de la misma y garantiza que las llantas estén adheridas al camino acreciendo la estabilidad en las curvas.
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"><span className="u-icon u-icon-3"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;100,000&nbsp;
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-9"><span className="u-icon u-icon-4"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp;00:40
                  </p>
                </div>
              </div>{/*/blog_post*/}{/*blog_post*/}
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-6">
                <div className="u-container-layout u-similar-container u-container-layout-6">
                  <h3 className="u-align-center u-text u-text-22">Cambio de aceite</h3>{/*blog_post_image*/}
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-7" src="images/cambiodeaceite.jpg" data-image-width={275} data-image-height={183} />{/*/blog_post_image*/}
                  <p className="u-align-justify u-text u-text-3"> El cambio de aceite es el servicio que casi siempre marca las veces que un carro va al taller ya que es el que se hace con más frecuencia.&nbsp;</p>
                  <p className="u-custom-font u-heading-font u-text u-text-8"><span className="u-icon u-icon-3"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;100,000&nbsp;
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-9"><span className="u-icon u-icon-4"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp;00:40
                  </p>
                </div>
              </div>{/*/blog_post*/}{/*blog_post*/}
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-7">
                <div className="u-container-layout u-similar-container u-container-layout-7">
                  <h3 className="u-align-center u-text u-text-26">Alineación&nbsp;</h3>{/*blog_post_image*/}
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-8" src="images/alineacion.jpg" data-image-width={800} data-image-height={600} />{/*/blog_post_image*/}
                  <p className="u-align-justify u-text u-text-3"> La Alineación resulta en un carro con mayor agarre y vida útil de las llantas, dirección precisa, mejora en desempeño del carro y reducción de consumo de combustible.</p>
                  <p className="u-custom-font u-heading-font u-text u-text-28"><span className="u-icon u-icon-13"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;70,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-29"><span className="u-icon u-icon-14"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp;00:50
                  </p>
                </div>
              </div>{/*/blog_post*/}{/*blog_post*/}
              <div className="u-blog-post u-container-style u-radius-34 u-repeater-item u-shape-round u-white u-repeater-item-8">
                <div className="u-container-layout u-similar-container u-container-layout-8">
                  <h3 className="u-align-center u-text u-text-30">Rotación de llantas</h3>{/*blog_post_image*/}
                  <img alt="" className="u-blog-control u-image u-image-round u-radius-50 u-image-9" src="images/rotaciondellantas.jpg" data-image-width={500} data-image-height={334} />{/*/blog_post_image*/}
                  <p className="u-align-justify u-text u-text-3"> El Balanceo es un proceso vital para el cuidado del vehículo, este es fundamental para evitar que las llantas sufran de deformaciones, ruidos y, por supuesto, de un prematuro desgaste.</p>
                  <p className="u-custom-font u-heading-font u-text u-text-32"><span className="u-icon u-icon-15"><svg className="u-svg-content" viewBox="0 0 512 512" style={{width: '1em', height: '1em'}}><path d="M256,73.089c-100.864,0-182.911,82.058-182.911,182.917S155.136,438.911,256,438.911  c100.859,0,182.911-82.046,182.911-182.905S356.86,73.089,256,73.089z M256,410.059c-84.951,0-154.06-69.108-154.06-154.054  c0-84.956,69.109-154.065,154.06-154.065c84.951,0,154.06,69.109,154.06,154.065C410.06,340.951,340.951,410.059,256,410.059z" /><path d="M227.076,220.157c0-11.572,16.925-13.548,31.606-13.548c13.837,0,32.744,6.485,48.553,14.681l3.098-31.895  c-7.906-4.52-26.247-9.884-44.877-11.005l4.515-32.461H239.77l4.521,32.461c-38.947,3.664-51.651,26.242-51.651,45.154  c0,47.697,88.898,37.547,88.898,66.888c0,11.017-10.434,14.959-28.785,14.959c-24.832,0-43.467-8.74-53.056-17.779l-4.803,35.848  c9.04,5.364,27.375,10.161,49.397,11.294l-4.521,31.329h30.201l-4.515-31.617c45.722-3.954,53.906-28.23,53.906-44.311  C319.363,233.428,227.076,247.532,227.076,220.157z" /></svg><img /></span>&nbsp;45,000
                  </p>
                  <p className="u-custom-font u-heading-font u-text u-text-33"><span className="u-icon u-icon-16"><svg className="u-svg-content" viewBox="0 0 16 16" style={{width: '1em', height: '1em'}}><path d="M1,9c0,3.866,3.134,7,7,7s7-3.134,7-7c0-3.866-3.134-7-7-7S1,5.134,1,9z M8,3c3.314,0,6,2.686,6,6s-2.686,6-6,6  s-6-2.686-6-6S4.686,3,8,3z" /><rect height={1} width={4} x={6} /><rect height={2} transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.3329 10.632)" width={1} x="13.5" y="1.5" /><path d="M8,4v5h5C13,6.239,10.761,4,8,4z" /></svg><img /></span>&nbsp; 01:00
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
