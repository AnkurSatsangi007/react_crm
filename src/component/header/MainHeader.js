import React from "react"
import SvgTitle from "../Ui/SvgTitle"
import { Link } from "react-router-dom"

export default function MainHeader(){
    return(
        <header className="page-header sticky-top px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
        <div className="container-fluid">
          <nav className="navbar">
            {/* <!-- start: toggle btn --> */}
            <div className="d-flex">
              <button type="button" className="btn btn-link d-none d-xl-block sidebar-mini-btn p-0 text-primary">
                <span className="hamburger-icon">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </span>
              </button>
              <button type="button" className="btn btn-link d-block d-xl-none menu-toggle p-0 text-primary">
                <span className="hamburger-icon">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </span>
              </button>
              <Link to="index.html" className="brand-icon d-flex align-items-center mx-2 mx-sm-3 text-primary">
                <SvgTitle/>
              </Link>
            </div>
           
            {/* <!-- start: link --> */}
            <ul className="header-right justify-content-end d-flex align-items-center mb-0">
              {/* <!-- start: notifications dropdown-menu --> */}
              <li>
                <div className="dropdown morphing scale-left notifications">
                  <Link className="nav-link dropdown-toggle after-none" to="#" role="button" data-bs-toggle="dropdown">
                    <span className="d-none d-xl-block me-2">Notification</span>
                    <svg className="d-inline-block d-xl-none" viewBox="0 0 16 16" width="18px" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.91802L7.203 2.07902C6.29896 2.26322 5.48633 2.75412 4.90265 3.46864C4.31897 4.18316 4.0001 5.07741 4 6.00002C4 6.62802 3.866 8.19702 3.541 9.74202C3.381 10.509 3.165 11.308 2.878 12H13.122C12.835 11.308 12.62 10.51 12.459 9.74202C12.134 8.19702 12 6.62802 12 6.00002C11.9997 5.07758 11.6807 4.18357 11.097 3.46926C10.5134 2.75494 9.70087 2.26419 8.797 2.08002L8 1.91802ZM14.22 12C14.443 12.447 14.701 12.801 15 13H1C1.299 12.801 1.557 12.447 1.78 12C2.68 10.2 3 6.88002 3 6.00002C3 3.58002 4.72 1.56002 7.005 1.09902C6.99104 0.959974 7.00638 0.819547 7.05003 0.686794C7.09368 0.554041 7.16467 0.43191 7.25842 0.328279C7.35217 0.224647 7.4666 0.141815 7.59433 0.085125C7.72206 0.028435 7.86026 -0.000854492 8 -0.000854492C8.13974 -0.000854492 8.27794 0.028435 8.40567 0.085125C8.5334 0.141815 8.64783 0.224647 8.74158 0.328279C8.83533 0.43191 8.90632 0.554041 8.94997 0.686794C8.99362 0.819547 9.00896 0.959974 8.995 1.09902C10.1253 1.32892 11.1414 1.94238 11.8712 2.83552C12.6011 3.72866 12.9999 4.84659 13 6.00002C13 6.88002 13.32 10.2 14.22 12Z" />
                      <path className="fill-secondary" d="M9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14H10C10 14.5304 9.78929 15.0391 9.41421 15.4142Z" fill="black" />
                    </svg>
                  </Link>
                  <div id="NotificationsDiv" className="dropdown-menu shadow rounded-4 border-0 p-0 m-0">
                    <div className="card w380">
                      <div className="card-header p-3">
                        <h6 className="card-title mb-0">Notifications Center</h6>
                        <span className="badge bg-danger text-light">14</span>
                      </div>
                      <ul className="nav nav-tabs tab-card d-flex text-center" role="tablist">
                        <li className="nav-item flex-fill"><Link className="nav-link active" data-bs-toggle="tab" to="#Noti-tab-Message" role="tab">Message</Link></li>
                        <li className="nav-item flex-fill"><Link className="nav-link" data-bs-toggle="tab" to="#Noti-tab-Events" role="tab">Events</Link></li>
                        <li className="nav-item flex-fill"><Link className="nav-link" data-bs-toggle="tab" to="#Noti-tab-Logs" role="tab">Logs</Link></li>
                      </ul>
                      <div className="tab-content card-body custom_scroll">
                        <div className="tab-pane fade show active" id="Noti-tab-Message" role="tabpanel">
                          <ul className="list-unstyled list mb-0">
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <img className="avatar rounded-circle" src="assets/img/xs/avatar5.jpg" alt=""/>
                                <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Olive Tree</span> <small>13MIN</small></p>
                                  <span>making it over 2000 years old</span>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <img className="avatar rounded-circle" src="assets/img/xs/avatar6.jpg" alt=""/>
                                <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Del Phineum</span> <small>1HR</small></p>
                                  <span>There are many variations of passages</span>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <img className="avatar rounded-circle" src="assets/img/xs/avatar1.jpg" alt=""/>
                                <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Rose Bush</span> <small>2MIN</small></p>
                                  <span>changed an issue from "In Progress" to <span className="badge bg-success">Review</span></span>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <div className="avatar rounded-circle no-thumbnail">PT</div>
                                <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Pat Thettick</span> <small>13MIN</small></p>
                                  <span>It is a long established fact that a reader will be distracted</span>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <img className="avatar rounded-circle" src="assets/img/xs/avatar3.jpg" alt=""/>
                                <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Eileen Dover</span> <small>1HR</small></p>
                                  <span>There are many variations of passages</span>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <img className="avatar rounded-circle" src="assets/img/xs/avatar4.jpg" alt=""/>
                                <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Carmen Goh</span> <small>1DAY</small></p>
                                  <span>Contrary to popular belief <span className="badge bg-danger">Code</span></span>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2">
                              <Link to="javascript:void(0);" className="d-flex">
                                <img className="avatar rounded-circle" src="assets/img/xs/avatar7.jpg" alt=""/>
                                <div className="flex-fill ms-3">
                                  <p className="d-flex justify-content-between mb-0"><span>Karen Onnabit</span> <small>1DAY</small></p>
                                  <span>The generated Lorem Ipsum</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="Noti-tab-Events" role="tabpanel">
                          <ul className="list-unstyled list mb-0">
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-thumbs-up fa-lg"></i></div>
                                <div className="flex-fill ms-3">
                                  <p className="mb-0">Your New Campaign <strong className="text-primary">Holiday Sale</strong> is approved.</p>
                                  <small>11:30 AM Today</small>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-pie-chart fa-lg"></i></div>
                                <div className="flex-fill ms-3">
                                  <p className="mb-0">Website visits from Twitter is <strong className="text-danger">27% higher</strong> than last week.</p>
                                  <small>04:00 PM Today</small>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-info-circle fa-lg"></i></div>
                                <div className="flex-fill ms-3">
                                  <p className="mb-0">Campaign <strong className="text-primary">Holiday Sale</strong> is nearly reach budget limit.</p>
                                  <small>10:00 AM Today</small>
                                </div>
                              </Link>
                            </li>
                            <li className="py-2 mb-1 border-bottom">
                              <Link to="javascript:void(0);" className="d-flex">
                                <div className="avatar rounded-circle no-thumbnail"><i className="fa fa-warning fa-lg"></i></div>
                                <div className="flex-fill ms-3">
                                  <p className="mb-0"><strong className="text-warning">Error</strong> on website analytics configurations</p>
                                  <small>Yesterday</small>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane fade" id="Noti-tab-Logs" role="tabpanel">
                          <h4 className="color-400">No Logs right now!</h4>
                        </div>
                      </div>
                      <Link to="#" className="btn btn-primary text-light rounded-0">View all notifications</Link>
                    </div>
                  </div>
                </div>
              </li>
              
              
             
              {/* <!-- start: quick light dark --> */}
              <li>
                <Link className="nav-link quick-light-dark" to="#">
                  <svg viewBox="0 0 16 16" width="18px" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                    <path className="fill-secondary" d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                  </svg>
                </Link>
              </li>
              {/* <!-- start: User dropdown-menu --> */}
              <li>
                <div className="dropdown morphing scale-left user-profile mx-lg-3 mx-2">
                  <Link className="nav-link dropdown-toggle rounded-circle after-none p-0" to="#" role="button" data-bs-toggle="dropdown">
                    <img className="avatar img-thumbnail rounded-circle shadow" src="assets/img/profile_av.png" alt=""/>
                  </Link>
                  <div className="dropdown-menu border-0 rounded-4 shadow p-0">
                    <div className="card border-0 w240">
                      <div className="card-body border-bottom d-flex">
                        <img className="avatar rounded-circle" src="assets/img/profile_av.png" alt=""/>
                        <div className="flex-fill ms-3">
                          <h6 className="card-title mb-0">Allie Grater</h6>
                          <span className="text-muted">alliegrater@luno.com</span>
                        </div>
                      </div>
                      <div className="list-group m-2 mb-3">
                        <Link className="list-group-item list-group-item-action border-0" to="page-profile.html"><i className="w30 fa fa-user"></i>My Profile</Link>
                        <Link className="list-group-item list-group-item-action border-0" to="account-settings.html"><i className="w30 fa fa-gear"></i>Settings</Link>
                        <Link className="list-group-item list-group-item-action border-0" to="account-billing.html"><i className="w30 fa fa-credit-card"></i>Billing</Link>
                        <Link className="list-group-item list-group-item-action border-0" to="page-teamsboard.html"><i className="w30 fa fa-users"></i>Manage Team</Link>
                        <Link className="list-group-item list-group-item-action border-0" to="dashboard-enevt.html"><i className="w30 fa fa-calendar"></i>My Events</Link>
                        <Link className="list-group-item list-group-item-action border-0" to="page-support-ticket.html"><i className="w30 fa fa-tag"></i>Support Ticket</Link>
                      </div>
                      <Link to="auth-signin.html" className="btn bg-secondary text-light text-uppercase rounded-0">Sign out</Link>
                    </div>
                  </div>
                </div>
              </li>
             
            </ul>
          </nav>
        </div>
      </header>
    )
}