import { useSelector } from "react-redux";
import {selectItems} from "../store/selectors"

function Checkout () {
    const shopItems = useSelector(selectItems);
    
    const totalAmount = (list) => {
        var total = 0;
        for (let i = 0; i < list.length; i++) {
          total += list[i].price;
        }
        return total;
      };
    
      return (
        
        <div>
            <h3>Total Amount:</h3>
            <p>{totalAmount(shopItems)}€</p>
        </div>
    )
}

export default Checkout;