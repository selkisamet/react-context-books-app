import React, { useContext } from "react";
import BookList from "./BookList";
import { ThemeContext } from "../context/ThemeContext";


const App = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: themeContext.bg, color: themeContext.text }}>
            <BookList />
        </div>
    )
}

export default App;