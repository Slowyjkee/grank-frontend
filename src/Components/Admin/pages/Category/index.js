import React, {Component} from 'react'
import {connect} from "react-redux";
import AdminTable from "../Table";
import {productsActions} from "../../../../store/actions/products";
import {GET_LIST} from "../../../../store/generic/Types";
import {categoryAction} from "../../../../store/actions/category";
import {storeActions} from "../../../../store/actions";
import AdminCreate from "../Create";
const mapStateToProps = state => ({
    categories: Object.values(state.CATEGORIES.data),
    loading:state.CATEGORIES.loading
});
class AdminCategoryPage extends Component {
    constructor(props){
        super(props);
        this.dispatch = props.dispatch;
    }
    state = {
        form: {
            name:'',
            description:''
        }
    };

    componentWillMount() {
        storeActions()['categories']['GET_LIST'](this.dispatch)

    }
    render() {
        return (
            <div>
                <AdminTable
                    data={this.props.categories}
                    form={this.state.form}
                    name='categories'/>
                <AdminCreate
                    form={this.state.form}
                    validationFields={['name', 'description']}
                    name='categories'
                />
            </div>
        );
    }

}

export default connect(mapStateToProps)(AdminCategoryPage)
