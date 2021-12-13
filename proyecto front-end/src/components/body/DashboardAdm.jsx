import { Link} from "react-router-dom";
import Header from '../commons/Header';
import Footer from '../commons/Footer';



function DashboardAdm() {
  return (
    <div>
    <Header/>
    <div>
    <title>DashboardAdm</title>
        <link rel="stylesheet" href="formularios.css" media="screen" />
        <link rel="stylesheet" href="DashboardAdm.css" media="screen" />
        <meta name="generator" content="Nicepage 4.1.6, nicepage.com" />
        <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" />
        <meta name="theme-color" content="#478ac9" />
        <meta property="og:title" content="DashboardAdm" />
        <meta property="og:type" content="website" />
        <section className="u-clearfix u-custom-color-1 u-section-1" id="sec-81a0">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-container-style u-group u-palette-5-base u-group-1">
              <div className="u-container-layout u-valign-top u-container-layout-1">
                <div className="u-form u-form-1">
                  <form action="https://nicepage.com/editor/Forms/Process" method="POST" className="u-clearfix u-form-spacing-1 u-form-vertical u-inner-form" source="email" name="form" style={{padding: '18px'}}>
                    <input type="hidden" id="siteId" name="siteId" defaultValue={1102668} />
                    <input type="hidden" id="pageId" name="pageId" defaultValue={1102678} />
                    <div className="u-form-group u-form-name u-form-group-1">
                      <label htmlFor="name-22d2" className="u-label">Nombre</label>
                      <input type="text" id="name-22d2" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                    </div>
                    <div className="u-form-email u-form-group u-form-group-2">
                      <label htmlFor="email-fc2d" className="u-label">E-mail</label>
                      <input type="email" id="email-fc2d" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                    </div>
                    <div className="u-form-group u-form-phone u-form-group-3">
                      <label htmlFor="phone-36a3" className="u-label">Teléfono</label>
                      <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" id="phone-36a3" name="phone" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                    </div>
                    <div className="u-form-group u-form-group-4">
                      <label htmlFor="text-629e" className="u-label">Número de documento</label>
                      <input type="text" placeholder id="text-629e" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
                    </div>
                    <div className="u-form-group u-form-group-5">
                      <label htmlFor="text-0cc5" className="u-label">Rol</label>
                      <input type="text" placeholder id="text-0cc5" name="text-1" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
                    </div>
                    <div className="u-align-left u-form-group u-form-submit">
                      <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-1 u-btn-1">Guardar</a>
                      <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-1 u-btn-1">Editar</a>
                      <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-1 u-btn-1">Eliminar</a>
                      <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                    </div>
                    <div className="u-form-send-message u-form-send-success">Usuario registradp</div>
                    <div className="u-form-send-error u-form-send-message">  Por favor, corrija los errores y vuelva a intentarlo. </div>
                    <input type="hidden" defaultValue name="recaptchaResponse" />
                  </form>
                </div>
                <div>
        <a href="https://nicepage.com/html-templates" className="u-border-none u-btn u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-btn-2">editar perfil de usuario</a>
        <a href="https://nicepage.com/website-builder" className="u-border-none u-btn u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-btn-3">ASIGNAR CITA</a>
        <a href="https://nicepage.com/website-builder" className="u-border-none u-btn u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-btn-4">EDITAR PERFIL USUARIO</a>
        <a href="https://nicepage.com/website-builder" className="u-border-none u-btn u-button-style u-custom-color-1 u-hover-palette-1-dark-1 u-btn-5">EDITAR PERFIL MECÁNICO</a>
      </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>

      <Footer/>
      </div>
    
);
}

export default DashboardAdm;