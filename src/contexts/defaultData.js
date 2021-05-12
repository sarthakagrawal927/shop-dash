import { uuid } from "uuidv4";
export const defaultItems = [
  {
    id: uuid(),
    category: "cat1",
    subcategory: "subcat1",
    name: "item1",
    price: 2,
  },
  {
    id: uuid(),
    category: "cat1",
    subcategory: "subcat1",
    name: "item2",
    price: 3,
  },
  {
    id: uuid(),
    category: "cat1",
    subcategory: "subcat2",
    name: "item3",
    price: 4,
  },
  {
    id: uuid(),
    category: "cat1",
    subcategory: "subcat2",
    name: "item4",
    price: 5,
  },
  {
    id: uuid(),
    category: "cat2",
    subcategory: "subcat3",
    name: "item5",
    price: 6,
  },
  {
    id: uuid(),
    category: "cat2",
    subcategory: "subcat3",
    name: "item61",
    price: 7,
  },
  {
    id: uuid(),
    category: "cat2",
    subcategory: "subcat3",
    name: "item6",
    price: 7,
  },
  {
    id: uuid(),
    category: "cat2",
    subcategory: "subcat4",
    name: "item7",
    price: 7,
  },
  {
    id: uuid(),
    category: "cat2",
    subcategory: "subcat4",
    name: "item8",
    price: 7,
  },
  {
    id: uuid(),
    category: "cat3",
    subcategory: "subcat5",
    name: "item9",
    price: 7,
  },
];

export const categories = [
  { id: uuid(), name: "cat1", subcategory: ["subcat1", "subcat2"] },
  { id: uuid(), name: "cat2", subcategory: ["subcat3", "subcat4"] },
  { id: uuid(), name: "cat3", subcategory: ["subcat5"] },
];
