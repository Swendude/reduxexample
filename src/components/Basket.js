import { useDispatch } from "react-redux";
import { addItem } from "../store/actions";
import { useSelector } from "react-redux";
import {selectItems} from "../store/selectors"

function Basket() {
  const dispatch = useDispatch();
  const shopItems = useSelector(selectItems);

  return (
    <div>
      <h3>Items in basket:</h3>
      {shopItems.map((it, ix) => {
        return <li key={ix}>{it.name}</li>;
      })}
      <button onClick={() => dispatch(addItem({ name: "wine", price: 10 }))}>
        Wine (10€)
      </button>
      <button onClick={() => dispatch(addItem({ name: "beer", price: 5 }))}>
        Beer (5€)
      </button>
    </div>
  );
}

export default Basket;
