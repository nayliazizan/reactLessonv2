import React, {useState} from "react";

function SearchBar({searchTerm, handleSearch}) {
    return (
        <div className="ui form">
            <div className="field">
                <label>Search</label>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
            </div>  
        </div>
        
    );
}

export default SearchBar;