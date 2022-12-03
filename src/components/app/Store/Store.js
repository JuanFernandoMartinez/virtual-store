import StockGrid from "./Stock/StockGrid";
import ShoppingItem from "./ShoppingCar/ShoppingItem";

let shoppingCar = []

export default function Store(){
    return <div className="d-flex flex-wrap">
       <div className="d-flex flex-wrap">

           <StockGrid></StockGrid>
           <ShoppingItem items = {shoppingCar}></ShoppingItem>
       </div>
    </div>
}