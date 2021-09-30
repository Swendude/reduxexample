const initialState = {
    items: [],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'addItem': {
        return { ...state, items:[... state.items, {name:action.payload.name, price:action.payload.price}]};
      }
      default: {
        return state;
      }
    }
  }