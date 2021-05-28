import produce from "immer";
import { uuid } from "uuidv4";

let index, index2;
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
        index = draft.categories.findIndex(
          (category) => category.id === action.id,
        );
        if (index !== -1) draft.categories.splice(index, 1);
        break;

      case "EDIT_CATEGORY":
        index = draft.categories.findIndex(
          (category) => category.id === action.id,
        );
        if (index !== -1) draft.categories[index].name = action.newName;
        break;

      case "ADD_SUBCATEGORY":
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

        index = draft.categories.findIndex(
          (category) => category.id === action.categoryId,
        );
        console.log(index);
        if (index !== -1) {
          index2 = draft.categories[index].subcategory.findIndex(
            (subcategory) => (subcategory.id = action.subcategoryId),
          );
          console.log(index2);
          if (index2 !== -1) {
            draft.categories[index].subcategory.splice(index2, 1);
          }
        }
        break;

      case "EDIT_SUBCATEGORY":
        index = draft.categories.findIndex(
          (category) => category.id === action.id,
        );
        if (index !== -1) {
          index2 = draft.categories[index].subcategory.findIndex(
            (subcategory) => (subcategory.id = action.subcategoryId),
          );
          if (index2 !== -1) {
            draft.categories[index].subcategory[index2].name = action.newName;
          }
        }
        break;

      default:
        break;
    }
  });

export default Reducer;
