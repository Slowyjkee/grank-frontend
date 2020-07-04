import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {Content, Loader, Button, InputNumber} from "rsuite";
import {storeActions} from "../../../store/actions";
import {ReusableImage} from "../../Reusable/ReusableImage";
import {addToCart} from "../../../store/cart";
const mapStateToProps = state => ({
    products: state.PRODUCTS.data,
    loading:state.PRODUCTS.loading
});
class ProductItem extends Component {
    componentWillMount() {
        if(!Object.values(this.props.products).length){
            storeActions()['products']['GET_LIST'](this.props.dispatch)
        }
    }

    state = {
      quantity:1
    };

    addItemToCart = (item) => {
        const cartItem = {...item, ...{quantity:this.state.quantity}};
        this.props.dispatch(addToCart({[cartItem._id] : cartItem}))
    };

    render() {
        const {products, id} = this.props;
        const item = products[id];
        return !this.props.loading && Object.values(this.props.products).length? (
            <div className='product-content container'>
                <div className="product-block flex-align-center">
                    <ReusableImage width={480} height={340} link={item.image}/>
                    <div className="product-annotation-block flex-column">
                        <span className='title-caption'>{item.title}</span>
                        <span className='description-caption'>{item.description}</span>
                        <span className='price-caption'>Цена: {item.price} руб.</span>
                        <InputNumber defaultValue={this.state.quantity}  min={1} onChange={(value, event) => this.setState({quantity:value})}/>
                        <Button onClick={() => this.addItemToCart(item)}>Добавить в корзину</Button>
                    </div>
                </div>
            </div>
        ) : <Loader center  />
    }


}

export default connect(mapStateToProps)(withRouter(ProductItem))
