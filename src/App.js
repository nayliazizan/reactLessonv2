import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Timekeeper from './components/Timekeeper';
import ClockControl from './components/ClockControl';
import Clock from './components/Clock';
import Blog from './components/Blog';
import Form from './components/Form';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import React, {useState} from "react";

function App() {
  const books = [ 
    { id: 1, title: "Norwegian Wood" }, 
    { id: 2, title: "Kafka on the Shore" }, 
    { id: 3, title: "1Q84" }, 
    { id: 4, title: "The Wind-Up Bird Chronicle" }, 
    { id: 5, title: "Hear the Wind Sing" }, 
    { id: 6, title: "Pinball 1973" }, 
    { id: 7, title: "Dance, Dance, Dance" }, 
    { id: 8, title: "Sputnik Sweetheart" }, 
    { id: 9, title: "A Wild Sheep Chase" }, 
    { id: 10, title: "The Idiot" }, 
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filterList = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='ui piled segments'>
      <div className='ui segment'>
        <h2>Modern Japanese books</h2>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch}/>
      </div>
      <div className='ui segment'>
        <BookList filterList={filterList}/>
      </div>
    </div>
  );
}

export default App;
