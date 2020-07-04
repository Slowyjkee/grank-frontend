import React, {Component} from 'react'
import {

} from "../../../../store/products";
import {connect} from "react-redux";
import {ReusableTable} from "../../../Reusable/ReusableTable";
import {Modal} from "rsuite";
import {ReusableForm} from "../../../Reusable/ReusableForm";
import {categoryAction} from "../../../../store/actions/category";
import {GET_LIST} from "../../../../store/generic/Types";
import {ReusableModal} from "../../../Reusable/ReusableModal";
import {storeActions} from "../../../../store/actions";


const mapStateToProps = state => ({
    products: Object.values(state.PRODUCTS.data),
    loading:state.PRODUCTS.loading
});

class ProductTable extends Component {
    constructor(props){
        super(props);
        this.dispatch = props.dispatch;
    }
    state = {
        updatableId: null,
        updatableIndex:null,
        show:false,
    };

    onRemove = id => {
    };
    onUpdate = (id, index) => {
        this.setState({updatableId: id, updatableIndex: index ,show: true})

    };
    onInput = value => {
    };
    onSubmit = value => {
        storeActions()['categories'][GET_LIST](this.dispatch)
    };
    render() {
        return (
            <>
                <ReusableModal show={this.state.show} onHide={() => this.setState({show:false})} title={'Создание'}>
                    <ReusableForm form={{title:'', price:'', description:'', }}
                                  initialForm={this.props.products[this.state.updatableIndex]}
                                  onSubmit={this.onSubmit}
                                  onChange={(value) => this.onInput(value)}
                                  onCancel={() => this.setState({show:false})}
                    />
                </ReusableModal>
                <ReusableTable data={this.props.products}
                               keys={['title', 'description', 'price']}
                               onRemove={(id) => this.onRemove(id)}
                               onUpdate={(id, index) => this.onUpdate(id, index)}
                />
            </>


        );
    }

}

export default connect(mapStateToProps)(ProductTable)


