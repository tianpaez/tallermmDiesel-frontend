import { Link} from "react-router-dom";
import Header from '../../../commons/Header';
import Footer from '../../../commons/Footer';

  function Agendarcita() {
    return (
      <div>
        <Header/>
        <section className="u-clearfix u-section-1" id="sec-fde0">
          <div className="u-clearfix u-sheet u-sheet-1" />
        </section>
        <section className="u-align-center u-clearfix u-white u-section-2" id="sec-8680">
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-layout" style={{}}>
              <div className="u-layout-row" style={{}}>
                <div className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-36 u-size-xs-60 u-image-1" data-image-width={1024} data-image-height={683}>
                  <div className="u-container-layout u-valign-middle u-container-layout-1" />
                </div>
                <div className="u-align-left u-container-style u-custom-color-1 u-layout-cell u-right-cell u-size-24 u-size-xs-60 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <div className="u-container-style u-group u-radius-15 u-shape-round u-white u-group-1">
                      <div className="u-container-layout u-valign-middle u-container-layout-3">
                        <h4 className="u-align-center u-text u-text-body-color u-text-default u-text-1">AGENDAR CITA </h4>
                      </div>
                    </div>
                    <div className="u-form u-radius-15 u-white u-form-1">
                      <form action="https://nicepage.com/editor/Forms/Process" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="email" name="form" style={{padding: '20px'}}>
                        <input type="hidden" id="siteId" name="siteId" defaultValue={1017901} />
                        <input type="hidden" id="pageId" name="pageId" defaultValue={1019897} />
                        <div className="u-form-group u-form-name u-form-partition-factor-2">
                          <label htmlFor="name-58eb" className="u-form-control-hidden u-label" />
                          <input type="text" placeholder="Nombre de usuario" id="name-58eb" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required />
                        </div>
                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2">
                          <label htmlFor="name-44e9" className="u-form-control-hidden u-label" />
                          <input type="text" placeholder="apellidos" id="name-44e9" name="name-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required />
                        </div>
                        <div className="u-form-email u-form-group u-form-partition-factor-2 u-form-group-3">
                          <label htmlFor="email-df8f" className="u-form-control-hidden u-label" />
                          <input type="email" placeholder="Introduzca una dirección de correo electrónico válida" id="email-df8f" name="email-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-phone u-form-group-4">
                          <label htmlFor="phone-6efa" className="u-form-control-hidden u-label" />
                          <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Ingrese su teléfono (por ejemplo, +14155552675)" id="phone-6efa" name="phone" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-5">
                          <label htmlFor="text-f9a5" className="u-form-control-hidden u-label" />
                          <input type="text" placeholder="Placa del vehículo" id="text-f9a5" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-6">
                          <label htmlFor="text-6105" className="u-form-control-hidden u-label" />
                          <input type="text" placeholder="Marca del vehículo" id="text-6105" name="text-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" />
                        </div>
                        <div className="u-form-group u-form-radiobutton u-form-group-7">
                          <div className="u-form-radio-button-wrapper">
                            <input type="radio" name="radiobutton" defaultValue="Revisión de frenos" />
                            <label className="u-label" htmlFor="radiobutton">Revisión de frenos</label>
                            <br />
                            <input type="radio" name="radiobutton" defaultValue="Pastillas" />
                            <label className="u-label" htmlFor="radiobutton">Pastillas</label>
                            <br />
                            <input type="radio" name="radiobutton" defaultValue="Discos" />
                            <label className="u-label" htmlFor="radiobutton">Discos</label>
                            <br />
                            <input type="radio" name="radiobutton" defaultValue="Alineación" />
                            <label className="u-label" htmlFor="radiobutton">Alineación</label>
                            <br />
                            <input type="radio" name="radiobutton" defaultValue="suspensión" />
                            <label className="u-label" htmlFor="radiobutton">suspensión</label>
                            <br />
                            <input type="radio" name="radiobutton" defaultValue="Amortiguadores" />
                            <label className="u-label" htmlFor="radiobutton">Amortiguadores</label>
                            <br />
                            <input type="radio" name="radiobutton" defaultValue="Cambio de aceite" />
                            <label className="u-label" htmlFor="radiobutton">Cambio de aceite</label>
                            <br />
                            <input type="radio" name="radiobutton" defaultValue="Rotación de llantas" />
                            <label className="u-label" htmlFor="radiobutton">Rotación de llantas</label>
                            <br />
                          </div>
                        </div>
                        <div className="u-form-group u-form-select u-form-group-8">
                          <label htmlFor="select-766e" className="u-label">Selecciona un mecánico</label>
                          <div className="u-form-select-wrapper">
                            <select id="select-766e" name="select" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white">
                              <option value="--">--</option>
                              <option value="Martin Sandoval">Martin Sandoval</option>
                              <option value="Jáson Bruno">Jáson Bruno</option>
                              <option value="Marcos Slim">Marcos Slim</option>
                              <option value="Luis torres">Luis torres</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} version={1} className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z" /></svg>
                          </div>
                        </div>
                        <div className="u-form-date u-form-group u-form-partition-factor-2 u-form-group-9">
                          <label htmlFor="date-1ae8" className="u-form-control-hidden u-label" />
                          <input type="date" placeholder="MM/DD/YYYY" id="date-1ae8" name="date" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" required />
                        </div>
                        <div className="u-form-group u-form-partition-factor-2 u-form-group-10">
                          <label htmlFor="text-8c32" className="u-form-control-hidden u-label" />
                          <input type="text" placeholder="Hora de atención" id="text-8c32" name="text-2" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-15 u-white" />
                        </div>
                        <div className="u-align-center u-form-group u-form-submit">
                          <div className="u-align-center u-form-group u-form-submit">
                          <Link to="/Usuariodeplanta" className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-radius-15 u-btn-1">ENVIAR<br />
                          </Link>
                          <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                        </div>
                          <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>
                        <div className="u-form-send-error u-form-send-message"> No se puede enviar su mensaje. Por favor, corrija los errores y vuelva a intentarlo. </div>
                        <input type="hidden" defaultValue name="recaptchaResponse" />
                      </form>
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

export default Agendarcita;
