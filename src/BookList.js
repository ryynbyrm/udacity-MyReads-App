import React,{Component}from 'react'
import Book from './Book';
class BookList extends Component {
    render(){
        const { books, title } = this.props
        return(<div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} onChangeBookList={this.props.onChangeBookList}/>
            ))}
          </ol>
        </div>
      </div>
      );
    }
}

export default BookList;