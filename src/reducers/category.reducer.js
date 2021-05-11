import { uuid } from "uuidv4";

const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
        },
      ];
    case "REMOVE_CATEGORY":
      return state.filter((item) => item.id !== action.id);
    case "EDIT_CATEGORY":
      return state.map((item) =>
        item.id === action.id ? { ...item, name: action.newName } : item,
      );
    default:
      return state;
  }
};

export default itemReducer;
