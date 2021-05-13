# Shop Dashboard

Started this for getting intership, but decided to do it for fun.

React app : A shop dashboard, letting user add, edit, remove category -> subcategory -> items : uses reducers and context for smooth functioning & localStorage to store data in browser.

Started it as a todo app, so the issues in things left is probably because of the way I am interpretting the data (1 array of objects for items and another for category along with its subcategories), probably a single array of objects like :

```js
[
    {
        category: String,
        subcategories : [
            {
                name: String,
                items: [
                    {
                        name: String,
                        val: String,
                    }
                ]
            }
        ]
    }
]
```

But at the start of the project this seemed a bit too complex as too many states were to be changed, maybe creating a 3rd array of objects with only subcategory only would have ease the job but result in duplication of code and data. The tradeoffs.

Things left:

1) Edit Category
2) Add SubCategory
3) Edit SubCategory
4) Remove SubCategory

I am very much inclined towards the single large object approach as it will not only reduce the number of changes I need to do but it will also keep the code cleaner. In multiple array of object approach editing the category would mean editing in every item too which is a lot of hassle. Since the deadline of internship is a bit too near and I am not interested anymore I'll skip this for now. Hoping to complete this project in future with single array of objects.

To run and test this out:

Installing dependencies:

```bash
npm i
# or
yarn
# or
pnpm i
```

Running the application:

```bash
npm dev
# or
yarn dev
# or
pnpm dev
```

Looks like I was not supposed to code this in the internship, I was supposed to use Zoho Creator for making this interface. My bad XD.
