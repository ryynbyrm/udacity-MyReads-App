import React,{Component}from 'react'
import Book from './Book';
class BookList extends Component {
    render(){
      //using function and object binding on props
        const { books, title, onChangeBookList } = this.props
        return(<div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            books ?
            (books.map((book) => (
              <Book key={book.id} book={book} onChangeBookList={onChangeBookList}/>
              ))):
            <span>There isn't any books in this shelf</span>
            }
          </ol>
        </div>
      </div>
      );
    }
}

export default BookList;