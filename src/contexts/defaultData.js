import { uuid } from "uuidv4";
export const shop = [
  {
    id: uuid(),
    category: "cat1",
    subcategory: [
      {
        name: "subcat1",
        id: uuid(),
        items: [
          {
            name: "item1",
            price: "12",
            id: uuid(),
          },
          {
            name: "item1",
            price: "12",
            id: uuid(),
          },
        ],
      },
      {
        name: "subcat2",
        items: [
          {
            name: "item1",
            price: "12",
            id: uuid(),
          },
          {
            name: "item1",
            price: "12",
            id: uuid(),
          },
        ],
      },
      {
        name: "subcat3",
        items: [
          {
            name: "item1",
            price: "12",
            id: uuid(),
          },
        ],
      },
    ],
  },
];
