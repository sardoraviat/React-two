import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faBarsProgress} from '@fortawesome/free-solid-svg-icons'
import {faPeopleRoof, faChartLine, faPersonRays, faGear, faUser,faBell} from '@fortawesome/free-solid-svg-icons'
import {faOsi} from '@fortawesome/free-brands-svg-icons'


class Box1 extends Component {
    render() {
        return (
           <div>
               <div className="container-fluid">
                   <div className="row flex-nowrap mt-3">
                       <div className="col-auto px-0">

                           <div id="sidebar" className="collapse collapse-horizontal show ">
                               <div id="sidebar-nav" className="list-group border-0 rounded-0  min-vh-400  list-size ">
                                   <div className={"pdp-logo -5"}><img src="/images/newPdpLogo.svg" alt=""/></div>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faBarsProgress } size={"1x"} className={"padding"}></FontAwesomeIcon>Asosiy</a>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faPeopleRoof} size={"1x"} className={"padding"}></FontAwesomeIcon>Manegment</a>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faOsi} size={"1x"} className={"padding"}></FontAwesomeIcon>HR</a>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faChartLine} size={"1x"} className={"padding"}></FontAwesomeIcon>Finance</a>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faPersonRays} size={"1x"} className={"padding"}></FontAwesomeIcon>Marketing</a>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faGear} size={"1x"} className={"padding"}></FontAwesomeIcon>Setting</a>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faUser} size={"1x"} className={"padding"}></FontAwesomeIcon>Foydalanuvchilar</a>
                                   <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate"
                                      data-bs-parent="#sidebar"><FontAwesomeIcon icon={faBell} size={"1x"} className={"padding"}></FontAwesomeIcon>Eslatmalar</a>

                               </div>
                           </div>
                       </div>
                       <main className="col ps-md-2 pt-2">
                           <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse">
                               <FontAwesomeIcon icon={faBars} size={"2x"}></FontAwesomeIcon>
                           </a>
                                <div className="row">
                                   <div className="col-12">

                                   </div>
                               </div>
                       </main>
                   </div>
               </div>
           </div>
        );
    }
}

export default Box1;