import { uuid } from "uuidv4";

const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      console.log(action);
      return [
        ...state,
        {
          name: action.name,
          subcategory: action.subcategory,
        },
      ];

    case "REMOVE_CATEGORY":
      return state.filter((item) => item.name !== action.name);
    case "EDIT_CATEGORY":
      return state.map((item) =>
        item.id === action.id ? { ...item, name: action.newName } : item,
      );

    case "ADD_SUBCATEGORY":
      console.log(action);

      return [
        ...state,
        {
          id: uuid(),
          category: action.category,
          subcategory: action.subcategory,
        },
      ];
    case "REMOVE_SUBCATEGORY":
      return state.filter((item) => item.id !== action.id);
    case "EDIT_SUBCATEGORY":
      return state.map((item) =>
        item.id === action.id ? { ...item, name: action.newName } : item,
      );

    default:
      return state;
  }
};

export default CategoryReducer;
