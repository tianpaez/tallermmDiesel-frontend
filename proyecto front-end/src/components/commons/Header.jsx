import { Link} from "react-router-dom";
  function Header() {
    return (
      <div>
        <header className="u-clearfix u-custom-color-1 u-header u-header" id="sec-2ed4">
          <div className="u-clearfix u-sheet u-sheet-1">
            <Link to ="/Inicio" className="u-align-left u-image u-logo u-image-1" data-image-width={500} data-image-height={500}>
              <img src="images/LogoMMDiesel.png" className="u-logo-image u-logo-image-1" />
            </Link>
            <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="SM">
              <div className="menu-collapse" style={{fontSize: '1rem', letterSpacing: '0px', fontWeight: 500}}>
                <a className="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-border-radius u-custom-borders u-custom-color u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                  <svg><use xlinkHref="#menu-hamburger" /></svg>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: '16px', height: '16px'}}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                      </symbol>
                    </defs></svg>
                </a>
              </div>
              <div className="u-custom-menu u-nav-container">
                <ul className="u-nav u-spacing-10 u-unstyled u-nav-1"><li className="u-nav-item"><Link className="u-active-custom-color-1 u-border-2 u-border-active-white u-border-custom-color-1 u-border-hover-white u-button-style u-hover-grey-10 u-nav-link u-radius-20 u-text-active-white u-text-grey-90 u-text-hover-grey-90 u-white" to="/Inicio" style={{padding: '10px 20px'}}>INICIO</Link>
                  </li><li className="u-nav-item"><Link className="u-active-custom-color-1 u-border-2 u-border-active-white u-border-custom-color-1 u-border-hover-white u-button-style u-hover-grey-10 u-nav-link u-radius-20 u-text-active-white u-text-grey-90 u-text-hover-grey-90 u-white" to="/Servicios" style={{padding: '10px 20px'}}>NUEST​ROS SERVICIOS</Link>
                  </li><li className="u-nav-item"><Link className="u-active-custom-color-1 u-border-2 u-border-active-white u-border-custom-color-1 u-border-hover-white u-button-style u-hover-grey-10 u-nav-link u-radius-20 u-text-active-white u-text-grey-90 u-text-hover-grey-90 u-white" to="/Servicios" style={{padding: '10px 20px'}}>¿COMO FUNCIONA?</Link>
                  </li><li className="u-nav-item"><Link className="u-active-custom-color-1 u-border-2 u-border-active-white u-border-custom-color-1 u-border-hover-white u-button-style u-hover-grey-10 u-nav-link u-radius-20 u-text-active-white u-text-grey-90 u-text-hover-grey-90 u-white" to="/Iniciarsesion" target="_blank" style={{padding: '10px 20px'}}>INICIAR SESIÓN</Link>
                  </li></ul>
              </div>
              <div className="u-custom-menu u-nav-container-collapse">
                <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                  <div className="u-inner-container-layout u-sidenav-overflow">
                    <div className="u-menu-close" />
                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><Link className="u-button-style u-nav-link" to="/Inicio" style={{padding: '10px 20px'}}>INICIO</Link>
                      </li><li className="u-nav-item"><Link className="u-button-style u-nav-link" to="/Servicios" style={{padding: '10px 20px'}}>NUEST​ROS SERVICIOS</Link>
                      </li><li className="u-nav-item"><Link className="u-button-style u-nav-link" to="/Servicios" style={{padding: '10px 20px'}}>¿COMO FUNCIONA?</Link>
                      </li><li className="u-nav-item"><Link className="u-button-style u-nav-link" to="/Iniciarsesion" target="_blank" style={{padding: '10px 20px'}}>INICIAR SESIÓN</Link>
                      </li></ul>
                  </div>
                </div>
                <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
              </div>
            </nav>
          </div>
        </header> 
      </div>
    );
  }

export default Header;
