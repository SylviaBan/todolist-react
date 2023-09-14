import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash, FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function TodoList() {
    return (

        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                {/* All tasks*/}
                <Link to="/" className="btn btn-outline-dark bg-light"><FaListAlt/></Link>
                {/* Completed tasks*/}
                <Link to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare/></Link>
                {/* Add task*/}
                <Link to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare/></Link>
            </div>
            <button className="btn btn-outline-dark bg-light"><FaTrash/></button>
        </footer>
    );
}