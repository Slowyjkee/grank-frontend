import React, {Component} from 'react'
import {ReusableForm} from "../../../Reusable/ReusableForm";
import {createCategory, getCategories} from "../../../../store/categories";
import {connect} from "react-redux";
import {Button, Modal} from "rsuite";

class CreateCategory extends Component {
    constructor(props){
        super(props);
        this.dispatch = props.dispatch;
    }
    state = {
        show:false,
        form: {
            name:'',
            description:'',
            image:''
        },
        validationFields: ['name', 'description']
    };

    componentWillMount() {
        this.dispatch(getCategories())
    }
    onSubmit = _ => {
        this.dispatch(createCategory(this.state.form))
    };
    onInput = value => {
        this.setState((state) => {
            return {
                ...state,
                form:{...state.form, ...value}
            }
        })
    };
    render() {
        return (
            <div>

                <Button style={{marginTop:'20px'}} onClick={() => this.setState({show:true})}>Добавить</Button>
                <Modal show={this.state.show} onHide={() => this.setState({show:false})}>
                    <Modal.Header>
                        <Modal.Title>Создание категории</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReusableForm form={this.state.form}
                                      onSubmit={this.onSubmit}
                                      onChange={(value) => this.onInput(value)}
                                      fieldsToValidate={this.state.validationFields}
                                      onCancel={() => this.setState({show:false})}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

export default connect()(CreateCategory)
