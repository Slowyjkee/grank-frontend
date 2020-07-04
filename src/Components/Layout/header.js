import React, {Component} from "react";
import {Icon, Nav, Navbar, Header, Badge} from "rsuite/lib/index";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
const mapStateToProps = state => ({
    cartLength: Object.values(state.CART.data).length,
});

class Header  extends Component {
    render(){
        return (
            <div className='bg-primary'>
                <div className="container" >
                    <Navbar appearance="inverse">
                        <Navbar.Header>
                        </Navbar.Header>
                        <Navbar.Body>
                            <Nav onSelect={this.onSelect} pullRight>
                                <Nav.Item><Link to={`/`}>Главная</Link></Nav.Item>
                                <Nav.Item>Товары</Nav.Item>
                                <Nav.Item> <Link to={`/login`}>Логин</Link></Nav.Item>
                                <Nav.Item>
                                    <Link to={'/cart'}>
                                        <Badge content={this.props.cartLength > 0 ? this.props.cartLength : null}>
                                            <Icon size={'2x'} icon={'shopping-cart'}/>
                                        </Badge>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header)
