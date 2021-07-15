# Shop Dashboard

## Purpose

To get an intership, turned out they wanted to use a 3rd party service for this functionality that I decided to code.

## Stack

ReactJS with immer for updating state.

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
