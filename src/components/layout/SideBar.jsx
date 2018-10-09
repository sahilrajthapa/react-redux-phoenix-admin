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
                    </ul>
                </section>
            </aside>
        )
    }
}

export default SideBar;