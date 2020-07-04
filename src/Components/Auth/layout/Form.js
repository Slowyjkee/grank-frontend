import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Alert, Schema} from 'rsuite';
import { connect} from "react-redux";
import {
    FlexboxGrid,
    Panel,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button,
    ButtonToolbar
} from 'rsuite';
import '../login.less'
import {signIn} from "../../../store/auth";


const { StringType, NumberType } = Schema.Types;
const model = Schema.Model({
    password: StringType().isRequired('Необходимо заполнить поле'),
    email: StringType()
        .isEmail('Введите корректную электронный почту')
        .isRequired('Необходимо заполнить поле')
});


class LoginForm extends Component {
    constructor(props){
        super(props);
        this.dispatch = this.props.dispatch;
    }
    state = {
        form: {
            email:'',
            password:''
        },
        errors: {

        }
    };

    onHandleSubmit = async (value) => {
        if(this.form.check()){
            const status =  await this.dispatch(signIn(this.state.form));
            if(status === 'success') {
                Alert.success('Вы успешно выполнили вход')
                this.props.history.push('/admin')

            } else {
                Alert.error('Неправильный логин или пароль ')
            }
        }
    };
    render() {
        return (
            <FlexboxGrid justify="center" align="middle" style={{height:'100%'}}>
                <FlexboxGrid.Item colspan={12}>
                    <Panel header={<h3>Login</h3>} bordered>
                        <Form fluid model={model}
                              onChange={formValue => this.setState({form:formValue})}
                              checkTrigger='none'
                              ref={ref => (this.form = ref)}
                        >
                            <FormGroup>
                                <ControlLabel>Почта</ControlLabel>
                                <FormControl name="email" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Пароль</ControlLabel>
                                <FormControl name="password" type="password" />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button appearance="primary" onClick={this.onHandleSubmit}>Войти</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </Panel>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        );
    }

}

export default connect()(withRouter(LoginForm))
