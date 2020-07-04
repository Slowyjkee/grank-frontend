import React, {Component} from 'react'
import {connect} from "react-redux";
import {ReusableImage} from "../../Reusable/ReusableImage";
import {Button, Icon, InputNumber} from "rsuite";
import {increaseQuantity, removeFromCart} from "../../../store/cart";

const mapStateToProps = state => ({
    cart: Object.values(state.CART.data)
});

class CartContent extends Component {
    constructor(props){
        super(props);
    }

    onRemoveItem = id => {
      this.props.dispatch(removeFromCart(id))
    };

    onIncreaseQuantity = (quantity, id) => {
        this.props.dispatch(increaseQuantity({value:quantity, _id:id, key:'quantity'}))
    };

    render() {
        const totalPrice = (price, quantity) => {
          return price * quantity;
        };
        const cartItems = this.props.cart.map( el => {
            return (
                <div className='cart-item flex-align-center flex-between' style={{marginBottom:'20px'}}>
                    <ReusableImage width={200} height={150} link={el.image}/>
                    <span>{el.title}</span>
                    <span>{el.price} руб</span>
                    <div className="quantity-block pointer" style={{width:'100px'}}>
                        <InputNumber defaultValue={el.quantity}  min={1} onChange={(value) => this.onIncreaseQuantity(value, el._id)}/>
                    </div>
                    <span>Всего: {totalPrice(el.price, el.quantity)} руб.</span>
                    <Icon icon='trash-o' size={'2x'} onClick={() => this.onRemoveItem(el._id)}/>
                </div>
            )
        })

        return cartItems.length ? (
            <div className='cart-content container '>
                {cartItems}
                <div className="button-block flex-end">
                    <Button>Подтвердить заказ</Button>
                </div>
            </div>
        ) : (<div className='empty-cart'><h4 align='center'>В корзине нет товаров</h4></div>)
    }


}

export default connect(mapStateToProps)(CartContent)
