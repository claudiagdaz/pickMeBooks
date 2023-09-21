import { useDispatch, useSelector } from 'react-redux';
import { changeAuthor, changeTitle, addBook} from '../store'

function BookForm() {
    const dispatch = useDispatch();

    const { author, title } = useSelector((state) => {
        return state.form
    });

   
    function handleBookFormSubmit(event){
        event.preventDefault();
        dispatch(addBook({
            author,
            title
        }))

    }

    function handleAuthorChange(event){
        dispatch(changeAuthor(event.target.value))
    };

    function handleTitleChange(event){
        dispatch(changeTitle(event.target.value))
    };

    return (
        <>
            <form onSubmit={handleBookFormSubmit}>
                <label> Author</label>
                <input 
                type="text"
                value={author}
                onChange={handleAuthorChange} 
                />
                <label>Title</label>
                <input 
                type="text"
                value={title}
                onChange={handleTitleChange} 
                />
                <button>Submit</button>
            </form>  
        </>
    )
};

export default BookForm;