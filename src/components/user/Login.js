import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleChange = e =>{
        if (e.target.name === 'email'){
            this.setState({
                form : {
                    ...this.state.form, email:e.target.value
                }
            })
        }else{
            this.setState({
                form: {
                    ...this.state.form,
                    password: e.target.value
                }
            })
        }


    }


    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state.form)
    }



    render(){
        return (
            <div className="card p-3 m-auto mt-5 shadow border rounded w-25">
                <h1 className="text-center">Sign in</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="w-75 m-auto">
                        <TextField  label="Email" variant="outlined" type="email"
                                    onChange={this.handleChange} name="email" value={this.state.form.email}
                                    className="w-100 "
                        />
                    </div>
                    <br/>
                    <div className="w-75 m-auto">
                        <TextField  label="Password" variant="outlined" type="password"
                                    onChange={this.handleChange} name="password" value={this.state.form.password}
                                    className="w-100 "
                        />
                    </div>
                    <br/>

                    <div className="w-25 m-auto">
                        <Button className="w-100" variant="contained" type = "submit">Login</Button>
                    </div>
                </form>
                <div>
                    <b  onClick={this.props.linkMethod}> Create an account</b>
                </div>
            </div>
        )
    }
}