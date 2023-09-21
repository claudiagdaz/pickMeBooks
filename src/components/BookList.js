import { useSelector } from "react-redux";

function BookList( ) {
    
    const bookList = useSelector((state) => {
        return state.bookList.bookList;
    });
    
    //console.log(bookList); //returns an object, can't map an object, need to access the bookList array inside bookList reducer.

    const renderedBooks = bookList.map((book) => {
        return (
            <div key={book.id}> 
            {book.title} by {book.author}
            </div>
        )
    });

    return (
        <>
        {renderedBooks}
        </>
    )
};

export default BookList;