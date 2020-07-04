import React, {Component} from 'react'
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import {withRouter, Link} from "react-router-dom";


class HeaderNavbar  extends Component {
    render(){
        return (
            <div className={`navbar-header ${this.props.onTop ? 'navbar-toped' : 'navbar-bottomed bg-white'}`}>
                <div className="container" >
                    <Navbar appearance="inverse">
                        <Navbar.Header>
                        </Navbar.Header>
                        <Navbar.Body>
                            <Nav onSelect={this.onSelect} pullRight>
                                <Nav.Item icon={<Icon icon="home" />}>Главная</Nav.Item>
                                <Nav.Item>Товары</Nav.Item>
                                <Nav.Item> <Link to={`/login`}>Логин</Link></Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderNavbar)
