import React,{Component} from 'react'
class Book extends Component {
    render(){
      //using function and object binding on props
      const { book,onChangeBookList } = this.props;
      return(
            <li id={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 
                    `url(${(book.imageLinks !== undefined
                      ? book.imageLinks.thumbnail
                      : "/src/images/defaultThumbnail.png")})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event)=>{ onChangeBookList(book,event.target.value)}}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors
                      ? book.authors
                      : "-"}
                  </div>
              </div>
            </li>
      );
    }
}
export default Book;
