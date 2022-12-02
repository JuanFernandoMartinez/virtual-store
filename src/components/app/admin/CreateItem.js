import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default class CreateItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            form : {
                name: "",
                description: "",
                price: 0,
                roleName: "admin"
            }
        }

    }

    handleChange = e =>{
        let name = e.target.name
        switch (name){
            case "name": this.setState({
                form : {
                    ...this.state.form, name: e.target.value
                }
            }); break;

            case "description": this.setState({
                form: {
                    ...this.state.form, description:e.target.value
                }
            }); break;

            case "price": this.setState({
                form: {
                    ...this.state.form, price: e.target.value
                }
            }); break;

            default: break;
        }
    }

    handleSubmit = async e=>{
        e.preventDefault()
        console.log("Sent")
    }
    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <div className="w-75 m-auto">
                    <TextField  label="Nombre del producto" variant="outlined" type="text"
                                onChange={this.handleChange} name="name" value={this.state.form.email}
                                className="w-100 "
                    />
                </div>
                <div className="w-75 m-auto">
                    <TextField  label="Descripción" variant="outlined" type="text"
                                onChange={this.handleChange} name="description" value={this.state.form.email}
                                className="w-100 "
                    />
                </div>
                <div className="w-75 m-auto">
                    <TextField  label="Precio" variant="outlined" type="number"
                                onChange={this.handleChange} name="price" value={this.state.form.email}
                                className="w-100 "
                    />
                </div>

                <Button type="submit"> Create Item</Button>

            </form>
        </div>
    }
}