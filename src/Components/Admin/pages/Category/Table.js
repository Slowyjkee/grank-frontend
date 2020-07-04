import React, {Component} from 'react'
import {
    deleteCategory as onDeleteCategory,
    getCategories,
    onSubmitUpdatedCategory,
    updateCategory
} from "../../../../store/categories";
import {connect} from "react-redux";
import {ReusableTable} from "../../../Reusable/ReusableTable";
import {Modal} from "rsuite";
import {ReusableForm} from "../../../Reusable/ReusableForm";


const mapStateToProps = state => ({
    categories: Object.values(state.CATEGORIES.data),
    loading:state.CATEGORIES.loading
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

    componentWillMount() {
        this.dispatch(getCategories())
    }
    onRemove = id => {
        this.dispatch(onDeleteCategory(id));
        this.forceUpdate()
    };
    onUpdate = (id, index) => {
        this.setState({updatableId: id, updatableIndex: index ,show: true})
    };
    onInput = value => {
        this.dispatch(updateCategory({_id: this.state.updatableId, value:value}))
    };
    onSubmit = value => {
        this.dispatch(onSubmitUpdatedCategory(this.state.updatableId))
    };
    render() {

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


