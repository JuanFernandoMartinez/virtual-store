
import React from "react";

export default class LoggedMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    changePage = e=>{
        let page = this.state.page
        if (page === 0) this.setState({page: 1})
        else this.setState({page: 0})
    }

    render() {
        return <h1>Estas Logeado</h1>
    }

}