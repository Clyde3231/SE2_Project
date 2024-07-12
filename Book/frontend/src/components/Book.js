// Book.js
import React, { useState, useEffect } from "react";
import "./Book.css";
import axios from "axios";
import BookItem from "./BookItem";
import { useNavigate, useLocation, Link } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000';  // Replace with your Flask server URL

function Book() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Title");
    const [results, setResults] = useState([]);
    const [searchQuery, setQuery] = useState('');
    const [searchType, setSearchType] = useState('title');
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get('query');
    const type = queryParams.get('type');
    

    const fetchResults = async (query, type) => {
        try {
            const response = await axios.get('/api/search', { params: { q: query, type } });
            setResults(response.data || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const newQuery = queryParams.get('query');
        const newType = queryParams.get('type');
        
        if (newQuery) setQuery(newQuery);
        if (newType) setSearchType(newType);

        if (newQuery && newType) {
            fetchResults(newQuery, newType);
        }
    }, [search]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/FindBook?query=${encodeURIComponent(searchQuery)}&type=${searchType.toLowerCase()}`);
            fetchResults(searchQuery, searchType.toLowerCase());
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setSearchType(item.toLowerCase());
        setIsOpen(false);
        
        if (searchQuery.trim()) {
            navigate(`/FindBook?query=${encodeURIComponent(searchQuery)}&type=${item.toLowerCase()}`);
            fetchResults(searchQuery, item.toLowerCase());
        }
    };

    const handleItemClickNavigate = (path) => {
        setIsOpen(false);
        navigate(path);
    };

    return (
        <div className="content">
            <div className="header-content">
                <div className="search-form-container">
                    <form className="search-form">
                        <div className="dropdown-container" onClick={toggleDropdown}>
                            <div className="dropdown-text">
                                <span>{selectedItem}</span>
                                <img
                                    src={isOpen ? "images/dropup.png" : "images/dropdown.png"}
                                    alt="dropdown-icon"
                                    className="dropdown-icon"
                                />
                            </div>
                            {isOpen && (
                                <ul className="dropdown-list">
                                    <li className="dropdown-list-item" onClick={() => handleItemClick("Title")}>Title</li>
                                    <li className="dropdown-list-item" onClick={() => handleItemClick("Author")}>Author</li>
                                </ul>
                            )}
                        </div>
                        <input
                            className="search-input"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={`Enter ${searchType} to search`}
                        />
                        <button onClick={handleSearch} type="submit" className="search-button">
                            <img src="images/searchicon.png" alt="search-icon" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="Book-Section">
                <div className="book-item-container">
                    {searchType === 'author' ? (
                        results.map((result, index) => (
                            <div className="author-item" key={index}>
                               <div className="author-name">
                                    <Link to={`https://openlibrary.org/authors/${result.key}`} target="_blank" rel="noopener noreferrer">{result.name}</Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        results.map((result, index) => (
                            <div className="book-item" key={index}>
                                <BookItem
                                    key={index}
                                    src={`http://covers.openlibrary.org/b/id/${result.cover_id}-M.jpg`}
                                    text={result.title}
                                    path={`/book/works/${result.key.replace('/works/', '')}`}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Book;
