import { uuid } from "uuidv4";

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
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

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);

    case "EDIT_ITEM":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, name: action.newName, price: action.newPrice }
          : item,
      );

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
      return state.filter((category) => category.name !== action.name);

    case "EDIT_CATEGORY":
      console.log(action);
      return state.map((category) =>
        category.name === action.newName
          ? { ...category, name: action.newName }
          : category,
      );

    case "ADD_SUBCATEGORY":
      console.log(state);
      console.log(action);
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          console.log("s");
          state[i].subcategory.push(action.newSubcategory);
        }
      }
      console.log(state);
      return state;

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

export default Reducer;
