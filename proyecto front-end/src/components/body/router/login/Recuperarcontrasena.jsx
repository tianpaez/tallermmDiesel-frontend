import { Link} from "react-router-dom";
import Header from '../../../commons/Header';
import Footer from '../../../commons/Footer';

  function Recuperarcontrasena() {
    return (
      <div>
        <Header/>
        <section className="u-clearfix u-section-1" id="sec-aa55">
          <div className="u-clearfix u-sheet u-sheet-1" />
        </section>
        <section className="u-clearfix u-section-2" id="sec-0b4a">
          <div className="u-clearfix u-sheet u-sheet-1">
          <h6><b>RECUPERAR CONTRASEÑA</b></h6>
            <div className="u-form u-radius-20 u-white u-form-1">
              <form action="https://nicepage.com/editor/Forms/Process" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="email" name="form" style={{padding: '20px'}}>
                <input type="hidden" id="siteId" name="siteId" defaultValue={1017901} />
                <input type="hidden" id="pageId" name="pageId" defaultValue={1019510} />
                <div className="u-form-group u-form-name">
                  <label htmlFor="name-c8ec" className="u-form-control-hidden u-label" />
                  <input type="text" placeholder="Introduzca su nombre" id="name-c8ec" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                </div>
                <div className="u-form-email u-form-group">
                  <label htmlFor="email-c8ec" className="u-form-control-hidden u-label" />
                  <input type="email" placeholder="Introduzca una dirección de correo electrónico válida" id="email-c8ec" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                </div>
                <div className="u-align-center u-form-group u-form-submit">
                  <Link to="/Iniciarsesion" className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-radius-20 u-btn-1">Enviar</Link>
                  <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                </div>
                <div className="u-form-send-message u-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>
                <div className="u-form-send-error u-form-send-message"> No se puede enviar su mensaje. Por favor, corrija los errores y vuelva a intentarlo. </div>
                <input type="hidden" defaultValue name="recaptchaResponse" />
              </form>
            </div>
            <img className="u-image u-image-1" src="images/imagefondovista3.jpg" data-image-width={1600} data-image-height={1067} />
          </div>
        </section>
        <Footer/>
       
      </div>
    );
  }

export default Recuperarcontrasena;
