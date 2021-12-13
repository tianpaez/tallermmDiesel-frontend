import { Link} from "react-router-dom";
import Header from '../commons/Header';
import Footer from '../commons/Footer';


function ModificarServicio(){
  return(
      <div>
      <Header/>
      <section className="u-clearfix u-palette-5-base u-section-1" id="sec-4af0">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h3 className="u-text u-text-default u-text-1">Modificar servicios</h3>
          <div className="u-form u-form-1">
            <form action="https://nicepage.com/editor/Forms/Process" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="email" name="form" style={{padding: '10px'}}>
              <input type="hidden" id="siteId" name="siteId" defaultValue={1102668} />
              <input type="hidden" id="pageId" name="pageId" defaultValue={1104130} />
              <div className="u-form-group u-form-select u-form-group-1">
                <label htmlFor="select-a9d7" className="u-label">Seleccione un servicio:</label>
                <div className="u-form-select-wrapper">
                  <select id="select-a9d7" name="select" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white">
                    <option value="-----">-----</option>
                    <option value="Amortiguadores">Amortiguadores</option>
                    <option value="Cambio de aceite">Cambio de aceite</option>
                    <option value="Rotación de llantas">Rotación de llantas</option>
                    <option value="Pastillas para frenos">Pastillas para frenos</option>
                    <option value="Revisión de frenos">Revisión de frenos</option>
                    <option value="Suspensión">Suspensión</option>
                    <option value="Frenos de discos">Frenos de discos</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} version={1} className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z" /></svg>
                </div>
              </div>
              <div className="u-form-group u-form-group-2">
                <label htmlFor="text-9013" className="u-label">Precio</label>
                <input type="text" placeholder id="text-9013" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
              </div>
              <div className="u-form-group u-form-group-3">
                <label htmlFor="text-827d" className="u-label">Tiempo</label>
                <input type="text" placeholder id="text-827d" name="text-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
              </div>
              <div className="u-form-group u-form-textarea u-form-group-4">
                <label htmlFor="textarea-2dbc" className="u-label">Descripción del servicio</label>
                <textarea rows={4} cols={50} id="textarea-2dbc" name="textarea" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required defaultValue={""} />
              </div>
              <div className="u-align-left u-form-group u-form-submit">
                <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-1 u-btn-1">Enviar</a>
                <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
              </div>
              <div className="u-form-send-message u-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>
              <div className="u-form-send-error u-form-send-message"> No se puede enviar su mensaje. Por favor, corrija los errores y vuelva a intentarlo. </div>
              <input type="hidden" defaultValue name="recaptchaResponse" />
            </form>
          </div>
        </div>
      </section>
      <div>
      
      <Footer/>
      </div>
      </div>
  );
}
export default ModificarServicio;