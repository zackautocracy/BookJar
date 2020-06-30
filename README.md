Book Jar 1.0.0
==============

<img width="370" height="200" src="img/large_Book-Jar.png" alt="Book Jar logo">


Book Jar is an electronic library powered by XML as a data source storage , validated with an XSD and processed via XSLT to ouput it in a JSON format that Javascript uses afterwards in rendering, it provides a minimalistic sleek
user interface with a subtle library theme. Users can browse a collection of books that are generated from one
XML file that holds the books hierarchy.

![screenshot](https://i.imgur.com/KVuAW2n.jpg)

## About
 - Authors: `Zakaria Ouadrhiri Idrissi Azzouzi` & `Anas Ait El Kouch`
 - License: MIT License
 - Website: [http://bookjar.educationhost.cloud/](http://bookjar.educationhost.cloud/)
 - Git clone: [https://github.com/zackautocracy/BookJar.git](https://github.com/zackautocracy/BookJar.git)

## Design Goals
- An easily searchable library with a good SPA experience (Single page application)
- Conjuring the power of Javascript instead of conceiving a Backend architecture
- Convenience when adding Data , no dabatabase needed , storage rely solely on `books.xml`
- Fast data generation from XML via XSLT , revealing a versatile data format baked specifically for APIs (JSON)

## Features
- Book Search is keyword based instead of strictly matched. No you don't need to remember the exact name to find your book again.
- A big collection of books and their ratings to browse just for you.
- Search by Author name and/or Book Title name

## Dependencies

- The App uses Handelbars (Template Engine for Javascript) to display books with their respective data
  It's already added via a CDN , make sure to run it while you're connected to the internet though.
- You need an XSLT Processor in order to generate the JSON file , for more infos on how to install
  such a tool checkout [this resource](http://saxon.sourceforge.net/)

## Getting Started

After cloning the repository you should have the following file tree :

### Tree:
- `Public directory` has the files that should be public to be hosted and contains :
   - `index.html` an HTML file with the HandleBars template used in a script tag with `type="text/x-handlebars-template"`

   - `CSS directory` contains all the stylesheets used by the app.
   - `JS directory` contains modules of helper functions that are imported in `main.js` that contains the logic of the app.
- `Data directory` the warehouse of the app it has the `books.xml` file (contains books) , `books.xsd` (contains the schema),
  `xml2books.JSON.xsl` (contains the stylesheet) and `books.json` (contains the output target in JSON format) tailored specifically for API usage.
- `Img directory` contains images that represent book covers.


### Steps:

#### 1 - Add a new Book to `books.xml`:
All books are contained in a single `<books>` root node rather than storing
each book file individually.An Approach that doesn't scale much.

![screenshot](https://i.imgur.com/ws5ZDte.png)

#### 2 - Validate the updated file (books.xml) with XML schema
A document that respects xml syntax is called a well formed xml document,
Although the syntax is less flexible than HTML it's still exposed to data
corruption resulted from the loss of data integrity. That's why we need to
define a set of rules that are more explicit about what XML file
structure is valid for our usage. Hence the name of a valid XML document.

Use the official [W3C validator](http://www.utilities-online.info/xsdvalidation/).

![screenshot](https://i.imgur.com/aO6Vej9.png)

#### 3 - Transform the `books.xml` into a JSON file
A choice we made while designing the app, we could use XSLT templates directly
to generate our HTML in the browser (yeah you nailed it !!The browser also contains a XSLT Processor
too based mainly on XPATH). The problem with this approach is the scalability and the usability
of the App. In a world dominated by Javascript libraries and APIs , The ideal format
for data transfert is JSON.

Use `xml2booksJSON.xsl`, it's a powerful xsl template that can generate
a JSON format from any given XML file.(So cool !! Isn't it)

Make sure to have a XSLT processor installed to generate the JSON file
I mainly use the default XML plugin in PHPStorm that supports XSL transformation
You can you use the official XSLT processor [by Saxon](http://saxon.sourceforge.net/)


![screenshot](https://i.imgur.com/P1xJL3Y.png)

#### 4 - You're good to go:
The app has some javascript code that loads the generated JSON file automatically
So you now you can our little library updated.
And all that in no time. Hail to JSON !!!

![screenshot](https://i.imgur.com/0Yp2AUx.jpg)

#### 5 - If you liked this little project consider giving it a star
