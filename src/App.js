import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  /*.filter() :https://stackoverflow.com/questions/43643877/filtering-a-list-with-react  also in udacity program filter and map methods*/
  getCategoryBooks(title){
    //get shelf's of books
    return this.state.books.filter((book) =>
      book.shelf === title
    )
  };
  onChangeBookList=(book,shelf)=>{
    //update book shelf with using api
    BooksAPI.update(book,shelf).then(()=>{
      book.shelf = shelf;
      this.setState(() =>({books:this.state.books.filter(b=>b.id !== book.id).concat(book)}))
    })
  }
  render() {
    return (
      <div className='app'>
      {/* Route render:https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md*/}
      <Route exact path='/' render={()=>(
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className='list-book'>
            <div className='list-book-content'>
                <BookList books={this.getCategoryBooks("currentlyReading")} title="Currently Reading" onChangeBookList={this.onChangeBookList}/>
                <BookList books={this.getCategoryBooks("wantToRead")} title="Want to Read" onChangeBookList={this.onChangeBookList}/>
                <BookList books={this.getCategoryBooks("read")} title="Read" onChangeBookList={this.onChangeBookList}/>
            </div>
            <div className="open-search">
            {/*Link render:https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md */}
              <Link to="/search" className='button'> Add book/s</Link>
            </div>
          </div>
          </div>
        )}/>
        {/* Route render:https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md*/}
        <Route path='/search' render={()=>(
          <SearchPage books={this.state.books} onChangeBookList={this.onChangeBookList}/>
          )}/>
      </div>
    )
  }
}
export default App
