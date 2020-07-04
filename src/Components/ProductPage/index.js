import React, {Component} from 'react'
import {connect} from "react-redux";
import {Container} from "rsuite";
import ProductHeader from "./layout/Header";
import './product.less'
import Footer from '../../Layout/Footer'
import ProductItem from "./layout/Content";
class ProductPage extends Component {
    constructor(props){
        super(props);
        this.id = this.props.match.params.id;
    }
    render() {
        return (
            <div className='product-page flex-column flex-between'>
                    <ProductHeader />
                    <ProductItem id={this.id} />
                    <Footer />
            </div>
        );
    }


}

export default connect()(ProductPage)
