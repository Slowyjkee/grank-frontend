import React, {Component} from 'react'
import { Sidebar, Sidenav, Nav, Dropdown, Icon} from "rsuite";
import {Link} from "react-router-dom";

class AdminSidenav extends Component {
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
            <Sidebar>
                <Sidenav  defaultOpenKeys={['3', '4']}>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                User Group
                            </Nav.Item>
                            <Dropdown eventKey="3" title="Редактирование" icon={<Icon icon="magic" />}>
                                <Dropdown.Item eventKey="3-1"><Link to={'/admin/product'}>Товары</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="3-2"><Link to={'/admin/category'}>Категории</Link></Dropdown.Item>
                            </Dropdown>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </Sidebar>

        );
    }

}

export default AdminSidenav
