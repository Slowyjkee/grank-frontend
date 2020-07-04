import React, {Component} from 'react'
import {connect} from "react-redux";
import {Button, Modal, InputPicker} from "rsuite";
import {storeActions} from "../../../store/actions";
import {ReusableForm} from "../../Reusable/ReusableForm";
import {ReusableModal} from "../../Reusable/ReusableModal";

class AdminCreate extends Component {
    constructor(props){
        super(props);
        this.dispatch = props.dispatch;
        this.storeName = props.name;
    }
    state = {
        show:false,
        form: this.props.form,
        validationFields: this.props.validationFields
    };

    onSubmit = _ => {
        storeActions()[this.storeName]['CREATE'](this.dispatch, this.state.form)

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
                <ReusableModal show={this.state.show} onHide={() => this.setState({show:false})} title={this.storeName}>
                    <ReusableForm form={this.state.form}
                                  onSubmit={this.onSubmit }
                                  mixes={this.props.mixes}
                                  categories={this.props.categories}
                                  onChange={(value) => this.onInput(value)}
                                  fieldsToValidate={this.state.validationFields}
                                  onCancel={() => this.setState({show:false})}>


                    </ReusableForm>
                </ReusableModal>

            </div>
        );
    }

}

export default connect()(AdminCreate)
