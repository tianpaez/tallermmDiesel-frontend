import { Link} from "react-router-dom";
import Header from '../commons/Header';
import Footer from '../commons/Footer';


function GestionServicios(){
  return(
      <div>
      <Header/>
        <section className="u-align-center u-clearfix u-section-2" id="sec-2c21">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-tab-links-align-left u-tabs u-tabs-1">
              <ul className="u-border-2 u-border-palette-1-base u-spacing-10 u-tab-list u-unstyled" role="tablist">
                <li className="u-tab-item" role="presentation">
                  <a className="active u-active-palette-1-base u-button-style u-grey-10 u-tab-link u-text-active-white u-text-black u-tab-link-1" id="link-tab-0da5" href="#tab-0da5" role="tab" aria-controls="tab-0da5" aria-selected="true">Listado de mecánicos</a>
                </li>
                <li className="u-tab-item" role="presentation">
                  <a className="u-active-palette-1-base u-button-style u-grey-10 u-tab-link u-text-active-white u-text-black u-tab-link-2" id="link-tab-14b7" href="#tab-14b7" role="tab" aria-controls="tab-14b7" aria-selected="false">Servicios completados</a>
                </li>
              </ul>
              <div className="u-tab-content">
                <div className="u-align-left u-container-style u-tab-active u-tab-pane u-white u-tab-pane-1" id="tab-0da5" role="tabpanel" aria-labelledby="link-tab-0da5">
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    <div className="u-table u-table-responsive u-table-1">
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                        </colgroup>
                        <tbody className="u-table-alt-grey-5 u-table-body">
                          <tr style={{height: '63px'}}>
                            <td className="u-table-cell">Mecanico 1</td>
                            <td className="u-table-cell">Asignacion 1</td>
                            <td className="u-table-cell">Asignacion 2</td>
                            <td className="u-table-cell">Asignacion 3</td>
                          </tr>
                          <tr style={{height: '34px'}}>
                            <td className="u-table-cell">Mecanico 2</td>
                            <td className="u-table-cell">Description 1</td>
                            <td className="u-table-cell">Description</td>
                            <td className="u-table-cell">Description</td>
                          </tr>
                          <tr style={{height: '51px'}}>
                            <td className="u-table-cell">Row 2</td>
                            <td className="u-table-cell">Description</td>
                            <td className="u-table-cell">Description</td>
                            <td className="u-table-cell">Description</td>
                          </tr>
                          <tr style={{height: '51px'}}>
                            <td className="u-table-cell">Row 3</td>
                            <td className="u-table-cell">Description</td>
                            <td className="u-table-cell">Description</td>
                            <td className="u-table-cell">Description</td>
                          </tr>
                          <tr style={{height: '52px'}}>
                            <td className="u-table-cell">Row 4</td>
                            <td className="u-table-cell">Description</td>
                            <td className="u-table-cell">Description</td>
                            <td className="u-table-cell">Description</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-tab-pane u-white u-tab-pane-2" id="tab-14b7" role="tabpanel" aria-labelledby="link-tab-14b7">
                  <div className="u-container-layout u-container-layout-2">
                    <div className="u-expanded-width u-table u-table-responsive u-table-2">
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="50%" />
                          <col width="50%" />
                        </colgroup>
                        <tbody className="u-table-alt-palette-1-light-3 u-table-body">
                          <tr style={{height: '58px'}}>
                            <td className="u-table-cell">Servicios</td>
                            <td className="u-table-cell">ID</td>
                          </tr>
                          <tr style={{height: '69px'}}>
                            <td className="u-table-cell">Row 1</td>
                            <td className="u-table-cell" />
                          </tr>
                          <tr style={{height: '69px'}}>
                            <td className="u-table-cell">Row 2</td>
                            <td className="u-table-cell" />
                          </tr>
                          <tr style={{height: '69px'}}>
                            <td className="u-table-cell">Row 3</td>
                            <td className="u-table-cell" />
                          </tr>
                          <tr style={{height: '69px'}}>
                            <td className="u-table-cell">Row 4</td>
                            <td className="u-table-cell" />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-table u-table-responsive u-table-1">
              <table className="u-table-entity">
                <colgroup>
                  <col width="49.9%" />
                  <col width="50.1%" />
                </colgroup>
                <tbody className="u-table-alt-palette-1-light-3 u-table-body">
                  <tr style={{height: '56px'}}>
                    <td className="u-table-cell">
                    <select name="OS1">
                    <option selected value={0}> Servicios más solicitados </option>
                      <option value={1}>Cambio de aceite</option> 
                      <option value={2}>Revisión de frenos</option> 
                      <option value={3}>Pastillas para frenos</option> 
                      <option value={4}>Frenos de discos</option> 
                      <option value={5}>Suspensión</option> 
                      <option value={6}>Alineación</option> 
                      <option value={7}>Amortiguadores</option> 
                      <option value={8}>Rotación de llantas</option> 
                      </select>
                    </td>
                    
                    <td className="u-table-cell" />
                  </tr>
                  <select name="OS">
                    <option selected value={0}> Servicios menos solicitados </option>
                      <option value={1}>Cambio de aceite</option> 
                      <option value={2}>Revisión de frenos</option> 
                      <option value={3}>Pastillas para frenos</option> 
                      <option value={4}>Frenos de discos</option> 
                      <option value={5}>Suspensión</option> 
                      <option value={6}>Alineación</option> 
                      <option value={7}>Amortiguadores</option> 
                      <option value={8}>Rotación de llantas</option> 
                      </select>
                  <tr style={{height: '65px'}}>
                    <td className="u-table-cell u-table-cell-3"></td>
                    
                  
                  
                  </tr>
                  
                </tbody>
              </table>
          </div>
          </div>
        
        <Footer/>
      </div>
    );
  }
export default GestionServicios;