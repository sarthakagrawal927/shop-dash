import { uuid } from "uuidv4";
export const shop = {
  categories: [
    {
      id: uuid(),
      name: "cat1",
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
          id: uuid(),
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
                    id: uuid(),

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
      name: "cat2",
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
                    id: uuid(),

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
    {
      id: uuid(),
      name: "cat3",
      subcategory: [
        {
          name: "subcat6",
          id: uuid(),
          items: [
            {
              name: "item9",
              price: "12",
              id: uuid(),
            },
            {
              name: "item10",
              price: "12",
              id: uuid(),
            },
          ],
        },
        {
          name: "subcat7",
                    id: uuid(),

          items: [
            {
              name: "item11",
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
          name: "subcat8",
                    id: uuid(),

          items: [
            {
              name: "item12",
              price: "12",
              id: uuid(),
            },
          ],
        },
      ],
    },
  ],
};
