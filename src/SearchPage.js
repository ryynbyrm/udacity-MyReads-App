import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import SearchBox from './SearchBox'

class SearchPage extends Component {
    state = {
        text:"",
        filterBooks:[]
    }
    onSearchTextChange = (text) => {
        this.setState({text})
        //update filterBooks when text is null or empty
        if(!text) {
            this.setState({filterBooks:null}); 
        }
        BooksAPI.search(text).then((searched)=>
        {
            if(searched && searched.length)
            {
                 //change filterbooks shelf if user choose any shelf
                this.setState({filterBooks:searched.map(search => {
                    let inShelf = this.props.books.filter(book => book.id === search.id);
                    search.shelf= inShelf && inShelf.length ? inShelf[0].shelf : "none";
                    return search;
                  }) 
                })
            }
            //when there isn't any book
            else {
                this.setState({filterBooks:null}); 
            }
        })
    }
    render(){
        return(
            <div className="search-books">
                <SearchBox onSearchTextChange={this.onSearchTextChange}/> 
                <div className="search-books-results">
                    <ol className='books-grid' >
                        {//using function and object binding on props
                            this.state.filterBooks ?
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