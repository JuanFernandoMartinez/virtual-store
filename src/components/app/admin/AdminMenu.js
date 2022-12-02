
import React from "react";
import Navbar from "../../bootstrapComponents/Navbar";
import UserList from "./UserList";
import CreateItem from "./CreateItem";

export default class AdminMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }

    pageA = e=>{this.setState({page:0})}
    pageB = e=>{this.setState({page:1})}

    navbarOptions = [
        {
            name: "Usuarios",
            page: this.pageA
        },
        {
            name: "Productos",
            page: this.pageB
        },


    ]

    render(){
       let currentPage = this.state.page
        switch (currentPage){
            case 0:
                return <div>
                    <Navbar options = {this.navbarOptions} >
                        <UserList></UserList>

                    </Navbar>
                </div>

            case 1: return <div>
                <Navbar options = {this.navbarOptions} >
                    <CreateItem></CreateItem>
                </Navbar>
            </div>

            default: break;
        }
    }
}