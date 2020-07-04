import React, {Component} from 'react'
import {

} from "../../../../store/products";
import {connect} from "react-redux";
import {ReusableTable} from "../../../Reusable/ReusableTable";
import {Modal} from "rsuite";
import {ReusableForm} from "../../../Reusable/ReusableForm";
import {categoryAction} from "../../../../store/actions/category";


const mapStateToProps = state => ({
    products: Object.values(state.PRODUCTS.data),
    loading:state.PRODUCTS.loading
});

class CategoryTable extends Component {
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
        alert('s')
    };
    onUpdate = (id, index) => {
    };
    onInput = value => {
    };
    onSubmit = value => {
       console.log('s')
        // categoryAction.create()
    };
    render() {
        console.log(categoryAction)
        return (
            <>
                <Modal show={this.state.show} onHide={() => this.setState({show:false})}>
                    <Modal.Header>
                        <Modal.Title>Создание категории</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReusableForm form={{name:'', description:''}}
                                      initialForm={this.props.categories[this.state.updatableIndex]}
                                      onSubmit={this.onSubmit}
                                      categories={this.props.categories}
                                      onChange={(value) => this.onInput(value)}
                                      onCancel={() => this.setState({show:false})}
                        />
                    </Modal.Body>
                </Modal>
                <ReusableTable data={this.props.categories}
                               keys={['name', 'description']}
                               onRemove={(id) => this.onRemove(id)}
                               onUpdate={(id, index) => this.onUpdate(id, index)}
                />
            </>


        );
    }

}

export default connect(mapStateToProps)(CategoryTable)


