import { uuid } from "uuidv4";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          price: action.price,
        },
      ];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "EDIT":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, name: action.newName, price: action.newPrice }
          : item,
      );
    default:
      return state;
  }
};

export default reducer;
