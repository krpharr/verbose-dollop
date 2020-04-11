# verbose-dollop

<p>Verbose-dollop is an MERN-stack application where you can search the Google Books API and save selections for later viewing.</p>
<p><a href="https://krp-react-book-search.herokuapp.com/">https://krp-react-book-search.herokuapp.com/</a></p> 
<p>
Enter search terms, paginate through results and click Save button to add to your future reading list.
If a previously saved book appears in a new search, the save button will be disabled indicating that the book has already been added to your list.  Each result has link to 
Google Books when you are ready to purchase or obtain the book. Your list of saved books are shown by clicking the Saved menu item and books can be deleted from your list by simply clicking the Delete button.
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You will need to create an API key at https://console.developers.google.com/apis/credentials

Install dotenv globally:
```
npm install -g dotenv 
```
Create a .env file in project root directory and add:
```
API_KEY=<YOUR_API_KEY>
```

### Installing

```
git clone https://github.com/krpharr/verbose-dollop.git
cd verbose-dollop
npm install
```

### Run locally

```
dotenv npm start
```


## Built With

* [Mongoose](https://www.npmjs.com/package/mongoose) 
* [Express](https://www.npmjs.com/package/express) 
* [React](https://reactjs.org/) 
* [Node](https://nodejs.org/en/) 
* [Materialize](https://materializecss.com/) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

