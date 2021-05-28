# Shop Dashboard

```js
{
    categories: [
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
}

```

Using this object , immer is op. As long as you do not modify 1st category and subcategory the app will work smoothly.
