import {useEffect, useState} from "react";
import {getToken} from "../../../../utils/sessionManager";
import axios from "axios";
import {URLAdmin} from "../../../../utils/URLManager";
import StockItem from "./StockItem";

export default function StockGrid(){

    const [items, setItems] = useState([])

    useEffect(()=>{
        let config = {
            headers: {'Authorization': 'Bearer ' + getToken()},

        }
        axios
            .get(URLAdmin.CREATE_ITEM, config)
            .then(res =>{
                console.log(res.data)
                setItems(res.data)
            })
            .catch(err=>{
                console.log(err)
            })



    },[])
    return <div className="d-flex flex-wrap w-75 shadow rounded">
        <h1 className="text-center">Tienda virtual</h1>
        {items.map(e=>
            <StockItem buy = {this.props.buy} name = {e.name} description = {e.description} price = {e.price}></StockItem>
        )}
    </div>
}