import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {storeActions} from "../../../store/actions";
import {ReusableCard} from "../../../Components/Reusable/ReusableCard";
const mapStateToProps = state => ({
    products: Object.values(state.PRODUCTS.data),
    loading:state.PRODUCTS.loading
});
class ProductContent  extends Component {
    componentDidMount() {
        storeActions()['products']['GET_LIST'](this.props.dispatch)
    }



    render(){
        const productsListArray = this.props.products.map( (el, index) => {
            const {title, image, description, _id} = el;
            return index < 3 && (
                <ReusableCard
                    width={240}
                    height={240}
                    link={image}
                    title={title}
                    id={_id}
                    description={description}
                    onClickButton={(id) =>  this.props.history.push({
                        pathname: `/product/${id}`,
                    })}
                />
            )
        });
        return (
            <div className='container'>
                <h4 className='mb-10'>Популярные товары</h4>
                <div className="flex flex-between" style={{marginTop:'20px'}}>
                    {productsListArray}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(ProductContent))
