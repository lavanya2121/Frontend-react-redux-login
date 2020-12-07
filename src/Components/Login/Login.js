import React, { Component, Fragment } from 'react';

// material -ui
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import '../../Components/Login/Login.css'


// Login Component
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            error: false,
            helperText: '',
            username: '',
            password: '',
            isAuthenticated: false
        }

        this.userRef = React.createRef()
        this.passRef = React.createRef()
    };

    // handleAuth event handler
    handleAuth = () => {
        const user = 'hruday@gmail.com';
        const pass = 'hruday123';
        const { username, password } = this.state;
        if (username !== user && password !== pass) {
            this.setState({
                error: true,
                helperText: 'Incorrect Username and Password',
            })
        } else {
            this.setState({
                isAuthenticated: true
            })
            sessionStorage.setItem("access-token", 'XYZ');
        }
    }

    // handleSubmit event handler
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: this.userRef.current[0].value,
            password: this.userRef.current[1].value,
        }, () => {
            this.handleAuth();
        })
    }

    render() {
        const { isAuthenticated } = this.state;

        const CardRenderer = () => {
            const {
                error,
                helperText
            } = this.state;
            return (
                <Card>
                    <CardContent>
                        <div
                            style={{ height: '400px' }}
                            className='d-flex flex-column p-5 vh-75 justify-content-between'>
                            <Typography variant="h4" gutterBottom>
                                LOGIN
                            </Typography>
                            <form
                                method='post'
                                ref={this.userRef}
                                className='form-container'
                                onSubmit={this.handleSubmit}>

                                {/* Username Text field */}
                                <TextField
                                    label="Username *"
                                    name='username'
                                    error={error}
                                />

                                {/* Password Text Field */}
                                <TextField
                                    label="Password *"
                                    name='password'
                                    error={error}
                                    helperText={helperText}
                                />
                                {/* Login Button */}
                                <Button
                                    className='w-25 d-inline'
                                    variant="contained"
                                    type='submit'
                                    color="primary">
                                    Login
                                </Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            )
        }

        return (
            <Fragment>

                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='d-flex justify-content-center align-items-center vh-100'>
                            <div className='login-container w-50'>
                                {isAuthenticated ? <Redirect to="/profile" /> : <CardRenderer />}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export { Login };