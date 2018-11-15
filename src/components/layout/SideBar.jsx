import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="/img/user2-160x160.jpg" className="img-circle" alt="User" />
                        </div>
                        <div className="pull-left info">
                            <p>Phoenix Admin</p>
                            <Link to="#"><i className="fa fa-circle text-success"></i> Online</Link>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview active">
                            <Link to="#">
                                <i className="fa fa-table"></i> <span>Questions</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </Link>
                            <ul className="treeview-menu" style={{display: "none"}}>
                                <li className="active"><Link to="/create-qset"><i className="fa fa-circle-o"></i> Create Question Set</Link></li>
                                <li><Link to="/question-type"><i className="fa fa-circle-o"></i> Question Set List</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/assignment"><i>Assignment</i></Link></li>
                        <li>
                        <Link to="#">
                            <i className="fa fa-th"></i> <span>Widgets</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-green">new</small>
                            </span>
                        </Link>
                        </li>
                        <li className="treeview">
                        <Link to="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Charts</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/create-form"><i className="fa fa-circle-o"></i> Create Form</Link></li>
                            
                            <li><Link to="#"><i className="fa fa-circle-o"></i> Morris</Link></li>
                            <li><Link to="#"><i className="fa fa-circle-o"></i> Flot</Link></li>
                            <li><Link to="#"><i className="fa fa-circle-o"></i> Inline charts</Link></li>
                        </ul>
                        </li>
                        <li>
                        <ul className="treeview-menu">
                            <li><Link to="#"><i className="fa fa-circle-o"></i> Simple tables</Link></li>
                            <li><Link to="#"><i className="fa fa-circle-o"></i> Data tables</Link></li>
                        </ul>
                        </li>
                        <li>
                        <Link to="#">
                            <i className="fa fa-calendar"></i> <span>Calendar</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-red">3</small>
                            <small className="label pull-right bg-blue">17</small>
                            </span>
                        </Link>
                        </li>
                        <li>
                        <Link to="#">
                            <i className="fa fa-envelope"></i> <span>Mailbox</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-yellow">12</small>
                            <small className="label pull-right bg-green">16</small>
                            <small className="label pull-right bg-red">5</small>
                            </span>
                        </Link>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}

export default SideBar;