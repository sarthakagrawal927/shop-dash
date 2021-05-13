import { uuid } from "uuidv4";
export const shop = {
  categories: [
    {
      id: 1,
      name: "cat1",
      subcategory: [
        {
          name: "subcat1",
          id: 2,
          items: [
            {
              name: "item1",
              price: "12",
              id: 3,
            },
            {
              name: "item2",
              price: "12",
              id: 4,
            },
          ],
        },
        {
          name: "subcat2",
          items: [
            {
              name: "item3",
              price: "12",
              id: 5,
            },
            {
              name: "item4",
              price: "12",
              id: 6,
            },
          ],
        },
        {
          name: "subcat3",
          items: [
            {
              name: "item5",
              price: "12",
              id: 7,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "cat2",
      subcategory: [
        {
          name: "subcat4",
          id: 9,
          items: [
            {
              name: "item6",
              price: "12",
              id: 10,
            },
            {
              name: "item7",
              price: "12",
              id: 11,
            },
          ],
        },
        {
          name: "subcat5",
          items: [
            {
              name: "item8",
              price: "12",
              id: 12,
            },
          ],
        },
      ],
    },
  ],
};
