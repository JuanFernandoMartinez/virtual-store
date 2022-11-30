
import React from "react";
import Navbar from "../../bootstrapComponents/Navbar";
import UserList from "./UserList";

export default class AdminMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 2
        }
    }

    pageA = e=>{this.setState({page:0})}
    pageB = e=>{this.setState({page:1})}
    pageC = e=>{this.setState({page:2})}
    pageD = e=>{this.setState({page:3})}
    navbarOptions = [
        {
            name: "Agregar",
            page: this.pageA
        },
        {
            name: "Editar",
            page: this.pageB
        },
        {
            name: "Usuarios",
            page: this.pageC
        },
        {
            name: "Productos",
            page: this.pageD
        }
    ]

    render(){
       let currentPage = this.state.page
        switch (currentPage){
            case 2:
                return <div>
                    <Navbar options = {this.navbarOptions} >
                        <UserList></UserList>
                    </Navbar>
                </div>

            default: break;
        }
    }
}