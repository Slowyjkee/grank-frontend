import React, {Component} from 'react'
import {Container, Header, Navbar} from "rsuite";



class AdminNavbar extends Component {
    constructor(props){
        super(props);
        this.dispatch = props.dispatch;
    }
    state = {

    };

    componentDidMount() {
    }

    render() {
        return (
            <Header>
                <Navbar appearance="inverse">
                    <Navbar.Header>
                        <a className="navbar-brand logo">Brand</a>
                    </Navbar.Header>
                </Navbar>
            </Header>
        );
    }

}

export default AdminNavbar
