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
            name: "item2",
            price: "12",
            id: uuid(),
          },
        ],
      },
      {
        name: "subcat2",
        items: [
          {
            name: "item3",
            price: "12",
            id: uuid(),
          },
          {
            name: "item4",
            price: "12",
            id: uuid(),
          },
        ],
      },
      {
        name: "subcat3",
        items: [
          {
            name: "item5",
            price: "12",
            id: uuid(),
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    category: "cat2",
    subcategory: [
      {
        name: "subcat4",
        id: uuid(),
        items: [
          {
            name: "item6",
            price: "12",
            id: uuid(),
          },
          {
            name: "item7",
            price: "12",
            id: uuid(),
          },
        ],
      },
      {
        name: "subcat5",
        items: [
          {
            name: "item8",
            price: "12",
            id: uuid(),
          },
        ],
      },
    ],
  },
];
