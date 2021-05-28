import produce from "immer";
import { uuid } from "uuidv4";

let index;
const Reducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "ADD_ITEM":
        console.log(state);
        console.log(action);
        break;

      case "REMOVE_ITEM":
        console.log(state);
        console.log(action);
        break;

      case "EDIT_ITEM":
        console.log(state);
        console.log(action);
        break;

      case "ADD_CATEGORY":
        draft.categories.push({
          id: uuid(),
          name: action.name,
          subcategory: [{ name: action.subcategory, id: uuid(), items: [] }],
        });
        break;

      case "REMOVE_CATEGORY":
        console.log(state);
        console.log(action);
        index = draft.categories.findIndex(
          (category) => category.id === action.id,
        );
        if (index !== -1) draft.categories.splice(index, 1);
        break;

      case "EDIT_CATEGORY":
        console.log(state);
        console.log(action);
        index = draft.categories.findIndex(
          (category) => category.id === action.id,
        );
        if (index !== -1) draft.categories[index].name = action.newName;
        break;

      case "ADD_SUBCATEGORY":
        console.log(state);
        console.log(action);
        index = draft.categories.findIndex(
          (category) => category.id === action.id,
        );
        if (index !== -1)
          draft.categories[index].subcategory.push({
            name: action.newSubcategory,
            id: uuid(),
            items: [],
          });
        break;

      case "REMOVE_SUBCATEGORY":
        console.log(state);
        console.log(action);
        break;

      case "EDIT_SUBCATEGORY":
        console.log(state);
        console.log(action);
        break;

      default:
        break;
    }
  });

export default Reducer;
