import React, {Component} from 'react'
import {connect} from "react-redux";
import {GET_LIST} from "../../../../store/generic/Types";
import AdminTable from "../Table";
import {storeActions} from "../../../../store/actions";
import AdminCreate from "../Create";

const mapStateToProps = state => ({
    products: Object.values(state.PRODUCTS.data),
    categories: Object.values(state.CATEGORIES.data),
    loading:state.PRODUCTS.loading
});
class AdminProductPage extends Component {
    constructor(props){
        super(props);
        this.dispatch = props.dispatch;
    }
    state = {
        form: {
            title:'',
            description:'',
            price:'',
            image:'',
            isMix:false,
            category:'',
            mixes:''
        }
    };

    componentWillMount() {
        storeActions()['products']['GET_LIST'](this.dispatch)
        storeActions()['categories']['GET_LIST'](this.dispatch)

    }

    sortedMixes = _ => {

        if(this.props.products.length) {
            let notMixinsArray = this.props.products.filter(el => !el.isMix);
            let sortedArray = notMixinsArray.map( el => ({value:{productId:el._id, percent:0}, label:el.title, groupTitle:el.category.name}));
            console.log(sortedArray)
            return sortedArray
        } else {
            return []
        }
    }

    render() {
        return (
            <div>
                <AdminTable
                    data={this.props.products.map( el =>   ({price:el.price, title:el.title, _id:el._id, isMix:el.isMix}))}
                    form={this.state.form}
                    name='products'
                />
                <AdminCreate
                    categories={this.props.categories}
                    mixes={this.sortedMixes()}
                    form={this.state.form}
                    validationFields={['price', 'description', 'title']}
                    name='products'
                />
            </div>
        );
    }

}

export default connect(mapStateToProps)(AdminProductPage)
