import { uuid } from "uuidv4";

const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      console.log(action);
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          subcategory: action.subcategory,
        },
      ];

    case "REMOVE_CATEGORY":
      console.log(state);
      console.log(action);
      return state.filter((category) => category.id !== action.id);

    case "EDIT_CATEGORY":
      return state.map((category) =>
        category.id === action.id
          ? { ...category, name: action.newName }
          : category,
      );

    case "ADD_SUBCATEGORY":
      console.log(action);
      console.log(state);
      return state.map((category) =>
        category.id === action.id
          ? { ...category, subcategory: [action.newSubcategory] }
          : category,
      );

    case "REMOVE_SUBCATEGORY":
      return state.filter((category) => category.id !== action.id);

    case "EDIT_SUBCATEGORY":
      return state.map((category) =>
        category.id === action.id
          ? { ...category, name: action.newName }
          : category,
      );

    default:
      return state;
  }
};

export default CategoryReducer;
