import React, {Component} from 'react'
import {connect} from "react-redux";
import Footer from '../../Layout/Footer'
import Header from "../ProductPage/layout/Header";
import CartContent from "./Content";
import './cart.less'
class CartPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='product-page flex-column flex-between'>
                <Header />
                <CartContent />
                <Footer />
            </div>
        );
    }


}

export default connect()(CartPage)
