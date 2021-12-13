
import { Link} from "react-router-dom";
import Header from '../../../commons/Header';
import Footer from '../../../commons/Footer';

  function Iniciarsesion() {
    return (
      <div>
        <Header/>
        <section className="u-clearfix u-section-1" id="sec-3f01">
          <div className="u-clearfix u-sheet u-sheet-1" />
        </section>
        <section className="u-align-center u-clearfix u-white u-section-2" id="sec-8680">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-36 u-size-xs-60 u-image-1" data-image-width={900} data-image-height={600}>
                  <div className="u-container-layout u-valign-middle u-container-layout-1"/>
                </div>
                <div className="u-align-left u-container-style u-custom-color-1 u-layout-cell u-right-cell u-size-24 u-size-xs-60 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <div className="u-container-style u-group u-radius-15 u-shape-round u-white u-group-1">
                      
                        <h4 className="u-text u-text-body-color u-text-default u-text-1">INICIAR SESIÓN</h4>
                      
                    </div>
                  
                    <div className="u-form u-radius-15 u-white u-form-1">
                      <form action="https://nicepage.com/editor/Forms/Process" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="email" name="form" style={{padding: '20px'}}>
                        <input type="hidden" id="siteId" name="siteId" defaultValue={1017901} />
                        <input type="hidden" id="pageId" name="pageId" defaultValue={1019527} />
                        <div className="u-form-group u-form-name">
                          <label htmlFor="name-58eb" className="u-form-control-hidden u-label" />
                          <input type="text" placeholder="Nombre de usuario" id="name-58eb" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required />
                        </div>
                        <div className="u-form-group">
                          <label htmlFor="email-58eb" className="u-form-control-hidden u-label" />
                          <input type="password" placeholder="Contraseña" id="email-58eb" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required="required" />
                        </div>
                        <div className="u-form-checkbox u-form-group u-form-group-3">
                          <input type="checkbox" id="checkbox-f77c" name="checkbox" defaultValue="On"/>
                          <label htmlFor="checkbox-f77c" className="u-label">Mostrar contraseña</label>
                        </div>
                        <div className="u-align-center u-form-group u-form-submit">
                          <Link to="/Usuariodeplanta" className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-radius-15 u-btn-1">INGRESAR<br />
                          </Link>
                          <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>
                        <div className="u-form-send-error u-form-send-message"> No se puede enviar su mensaje. Por favor, corrija los errores y vuelva a intentarlo. </div>
                        <input type="hidden" defaultValue name="recaptchaResponse" />
                      </form>
                    </div>
                    <div className="u-container-style u-group u-radius-10 u-shape-round u-white u-group-2">
                      <div className="u-container-layout u-valign-top u-container-layout-4">
                        <Link to="/Recuperarcontrasena" className="u-active-none u-border-2 u-border-active-palette-2-dark-1 u-border-custom-color-1 u-border-hover-palette-2-base u-btn u-button-style u-hover-none u-none u-text-custom-color-1 u-text-hover-palette-2-base u-btn-2">
                          <span style={{fontStyle: 'italic'}}>¡<span style={{fontStyle: 'italic'}} />Olvido su
                          </span>
                          <span style={{fontStyle: 'italic'}}> contraseña?</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/> 
      </div>
    );
  }

export default Iniciarsesion;
