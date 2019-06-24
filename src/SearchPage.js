import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import SearchBox from './SearchBox'

class SearchPage extends Component {
    state = {
        text:"",
        books: [],
        filterBooks:[]
    }
    onSearchTextChange = (text) => {
        this.setState({text:text})
        if(text){
            BooksAPI.search(text.trim()).then((books)=>{
                if(books.length)
                {
                    books.forEach((book,i)=>{
                        const matched=this.props.books.find((b)=>b.id===book.id);
                        book.shelf=matched? matched.shelf:'none';
                        books[i]=book;
                    });
                    this.setState({filterBooks:books })
                }
                else{
                    this.setState({filterBooks:[]}); 
                }
            })
        }
        else{
            this.setState({filterBooks:[]}); 
        }
    }
    componentWillUnmount(){
        this.onSearchTextChange("")
    }
    render(){
        return(
            <div className="search-books">
                <SearchBox onSearchTextChange={this.onSearchTextChange}/> 
                <div className="search-books-results">
                    <ol className='books-grid' >
                        {
                            this.state.filterBooks !== null ?
                                (this.state.filterBooks.map((book)=>(
                                    <Book key={book.id} book={book} onChangeBookList={this.props.onChangeBookList} />
                                ))):
                                <span>There isn't any books</span>
                        }
                    </ol>
                </div>
            </div>
        );
    }
}
export default SearchPage;