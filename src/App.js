import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([{ name: "wine", price: 5 }]);

  const add = (_name, amount) =>
    setBasket([...basket, { name: _name, price: amount }]);
  
  const totalAmount = (list) => {
    var total = 0;
    for (let i = 0; i < list.length; i++) {
      total += list[i].price;
    }
    return total;
  };
  
  return (
    <div>
      <Basket items={basket} addItem={add} />
      <Checkout amount={totalAmount(basket)} />
    </div>
  );
}

export default App;
