import { Link} from "react-router-dom";
import Header from '../commons/Header';
import Footer from '../commons/Footer';



function EstadoVehiculo() {
  return (
    <div>
    <Header/>
    <section className="u-align-center u-clearfix u-custom-color-1 u-section-1" id="sec-4f71">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">Estado del vehículo</h2>
          <div className="u-form u-palette-5-base u-form-1">
            <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style={{padding: '10px'}} source="email" name="form">
              <input type="hidden" id="siteId" name="siteId" defaultValue={1102668} />
              <input type="hidden" id="pageId" name="pageId" defaultValue={1104157} />
              <div className="u-form-group u-form-name">
                <label htmlFor="name-3b9a" className="u-label">Nombre del cliente</label>
                <input type="text" id="name-3b9a" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
              </div>
              <div className="u-form-email u-form-group">
                <label htmlFor="email-3b9a" className="u-label">Placa del vehículo</label>
                <input type="email" id="email-3b9a" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
              </div>
              <div className="u-form-group u-form-group-3">
                <label htmlFor="text-e4f8" className="u-label">Mecánico a cargo</label>
                <input type="text" placeholder id="text-e4f8" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
              </div>
              <div className="u-form-group u-form-message">
                <label htmlFor="message-3b9a" className="u-label">Estado del servicio</label>
                <textarea rows={4} cols={50} id="message-3b9a" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required defaultValue={""} />
              </div>
              <div className="u-align-left u-form-group u-form-submit">
                <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-1 u-btn-1">Enviar</a>
                <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
              </div>
            </form>
          </div>
        </div>
      </section>

    <Footer/>
    </div>
    );
    }
    export default EstadoVehiculo;