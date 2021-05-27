import { uuid } from "uuidv4";

const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          price: action.price,
          category: action.category,
          subcategory: action.subcategory,
        },
      ];

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "EDIT":
      console.log(action);
      console.log(state);
      return state.map((item) =>
        item.id === action.id
          ? { ...item, name: action.newName, price: action.newPrice }
          : item,
      );

    default:
      return state;
  }
};

export default itemReducer;
