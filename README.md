# NodeJS Version of BookLibraryAPI
#### Author : Christian Glassiognon
<br/>

## ('/api') API Routes

### ('/') Test Route
```
Request (GET): url/api/ 
```
```
Response: Welcome to the Library Project API
```

### ('/book/list') Get a list of books
Returns the id, title, author and img for 20 books.
```   
Request (GET): url/api/book/list
```
```
Response : 200
    [
        {
            "id": 1,
            "title": "Catalyst",
            "author": "S.J Kincaid",
            "img": "https://libraryapibookcovers.s3.us-east-2.amazonaws.com/catalyst-sjkincaid.jpg"
        },
        {
            "id": 2,
            "title": "The Magician",
            "author": "Michael Scott",
            "img": "https://libraryapibookcovers.s3.us-east-2.amazonaws.com/themagician-michaelscott.jpg"
        },
        {
            "id": 3,
            "title": "The Alchemyst",
            "author": "Michael Scott",
            "img": "https://libraryapibookcovers.s3.us-east-2.amazonaws.com/thealchemyst-michaelscott.jpg"
        },
        ...
    ]
```

### ('/book/:id') Get one book
Returns the id, title, author, published_date, synopsis, img, rating and pages based on the id of the request.
```
Request (GET): url/api/book/15
```
```
Response: 200
[
    {
        "id": 15,
        "title": "Artemis Fowl",
        "author": "Eoin Colfer",
        "published_date": "2009-06-23",
        "synopsis": "Twelve-year-old Artemis Fowl is a millionaire, a genius, and, above all, a criminal mastermind. But even Artemis doesn't know what he's taken on when he kidnaps a fairy, Captain Holly Short of the LEPrecon Unit..",
        "img": "https://libraryapibookcovers.s3.us-east-2.amazonaws.com/artemisfowl-eoincolfer.jpg",
        "rating": 5,
        "pages": 303,
        "createdAt": "2020-12-18T01:11:20.000Z",
        "updatedAt": "2020-12-18T01:11:20.000Z"
    }
]
```

### ('/book/check/:title/:author') Check if book exists
Returns 200 if a book does not exist, and 400 if a book has already been created
```
Request (GET):  url/api/book/check/Champion/Marie%20Lu
```
```
Response: 400 "Book Already Created"
```

### ('/book/add/') Add Book to database
Returns 200 and inserted book if book has been created.
```
Request (POST): url/api/book/add
{
   
   "id": 20,
   
   "title": "Six of Crows",
   
   "author": "Leigh Bardugo",
   
   "published_date": "2015-09-29",
   
   "synopsis": "A Heartrender using her magic to survive the slums.\n\nA thief wi
   gift for unlikely escapes.\n\nSix dangerous outcasts. One impossible heist. K
   crew is the only thing that might stand between the world and destruction—if 
   don't kill each other first.\n\nSix of Crows by Leigh Bardugo returns to
   breathtaking world of the Grishaverse in this unforgettable tale about
   opportunity—and the adventure—of a lifetime.\n\nPraise for Six of Crows:\n\n“Si
   Crows is a twisty and elegantly crafted masterpiece that thrilled me from
   beginning to end.” –New York Times-bestselling author Holly Black?",
   
   "img": "https://libraryapibookcovers.s3.us-east-2.amazonaws
   sixofcrows-leighbardugo.jpg",
   
   "rating": 5,
   
   "pages": 517,
   
}
```
```
Response: 200
{
   
   "id": 20,
   
   "title": "Six of Crows",
   
   "author": "Leigh Bardugo",
   
   "published_date": "2015-09-29",
   
   "synopsis": "A Heartrender using her magic to survive the slums.\n\nA thief wi
   gift for unlikely escapes.\n\nSix dangerous outcasts. One impossible heist. K
   crew is the only thing that might stand between the world and destruction—if 
   don't kill each other first.\n\nSix of Crows by Leigh Bardugo returns to
   breathtaking world of the Grishaverse in this unforgettable tale about
   opportunity—and the adventure—of a lifetime.\n\nPraise for Six of Crows:\n\n“Si
   Crows is a twisty and elegantly crafted masterpiece that thrilled me from
   beginning to end.” –New York Times-bestselling author Holly Black?",
   
   "img": "https://libraryapibookcovers.s3.us-east-2.amazonaws
   sixofcrows-leighbardugo.jpg",
   
   "rating": 5,
   
   "pages": 517,
   
}
```

### ('/book/add/') Edit Book in database
Returns 200 and edited book if edit was successful.
```
Request (POST): url/api/book/edit/2
Body:
[
    {
        "id": 2,
        "published_date": "2008-06-05",
        "synopsis": "The Enemies: Dr. John Dee and Niccolo Machiavelli.\n\nTheir Plan: Steal the rest of what Nicholas Flamel has fought to protect.\n\nJohn Dee has the Book of Abraham the Mage, which means the world is on the brink of ruin. Except he's missing two cruscial pages, pages that Nicholas, Sophie, Josh, and the legendary warrior Scatty have taken to Paris.\nBut Paris is teeming with enemies--and old acquaintances like Nicollo Machiavelli. On the run and with time running out for Nicholas and his wife, Perenell, Sophie must learn the second ele...",
    }
]
```
```
Response: 200
[
    {
        "id": 2,
        "title": "The Magician",
        "author": "Michael Scott",
        "published_date": "2008-06-05",
        "synopsis": "The Enemies: Dr. John Dee and Niccolo Machiavelli.\n\nTheir Plan: Steal the rest of what Nicholas Flamel has fought to protect.\n\nJohn Dee has the Book of Abraham the Mage, which means the world is on the brink of ruin. Except he's missing two cruscial pages, pages that Nicholas, Sophie, Josh, and the legendary warrior Scatty have taken to Paris.\nBut Paris is teeming with enemies--and old acquaintances like Nicollo Machiavelli. On the run and with time running out for Nicholas and his wife, Perenell, Sophie must learn the second ele...",
        "img": "https://libraryapibookcovers.s3.us-east-2.amazonaws.com/themagician-michaelscott.jpg",
        "rating": 5,
        "pages": 465,
        "createdAt": "2020-12-15T01:11:20.000Z",
        "updatedAt": "2020-12-18T01:11:20.000Z"
    }
]
```

### ('/api/delete/:id') Delete book from database
Returns 200 if delete was succesful.
```
Request (DELETE): url/api/book/delete/:1
```
```
Response: 200
```
## ('/img') IMG Routes
## ('/upload/:key) Upload Image to database 
Returns 200 if image upload is succesful.
```
Request (POST): url/img/upload/Insignia-%20SJ%20Kincaid
Body: (base64 image)
```
```
Response: 200
https://libraryapibookcovers.s3.us-east-2.amazonaws.com/insignia-sjkincaid.jpg
```


