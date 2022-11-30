
import React from "react";

export default class Wrapper extends React.Component{

    render(){
        return (
            <div>
                <h1>Esto es un Wrapper</h1>
                {this.props.children}
            </div>
        )
    }
}