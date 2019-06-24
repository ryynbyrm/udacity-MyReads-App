import React,{Component}from 'react'
class Book extends Component {
    render(){
      return(
            <li id={this.props.book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${(this.props.book.imageLinks !== undefined ? this.props.book.imageLinks.thumbnail :"/src/images/defaultThumbnail.png")})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={this.props.book.shelf} onChange={(event)=>{ this.props.onChangeBookList(this.props.book,event.target.value)}}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
              </div>
            </li>
      );
    }
}
export default Book;
