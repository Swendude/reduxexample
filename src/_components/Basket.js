import { useDispatch } from "react-redux";
import { addItem } from "../_store/actions";

function Basket (props) {
    return (
        
        <div>  
            <h3>Items in basket:</h3>
            {props.items.map((it, ix) => {
                return <li key={ix}>{it.name}</li>;
            })}
            <button onClick={() => props.addItem('wine', 10)}>Wine (10€)</button>
            <button onClick={() => props.addItem('beer', 5)}>Beer (5€)</button>
        </div>
    )
}

export default Basket;