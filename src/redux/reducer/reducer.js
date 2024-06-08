const INIT_STATE = {
    carts: [],
  };
  
  export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        // Check if the item already exists in the cart
        const existingItem = state.carts.find((item) => item.id === action.payload.id);
        if (existingItem) {
          // If the item exists, update the quantity
          return {
            ...state,
            carts: state.carts.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          // If the item doesn't exist, add it to the cart
          return {
            ...state,
            carts: [...state.carts, { ...action.payload, quantity: 1 }],
          };
        }
  
      case "REMOVE_TO_CART":
        return {
          ...state,
          carts: state.carts.filter((item) => item.id !== action.payload),
        };
  
      case "INCREMENT":
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
  
      case "DECREMENT":
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
  
      default:
        return state;
    }
  };