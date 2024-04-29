import React, { useContext } from "react";
import BookList from "./BookList";
import { ThemeContext } from "../context/ThemeContext";


const App = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: themeContext.bg, color: themeContext.text }}>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-sm btn-info my-3"
                    onClick={themeContext.changeTheme}>Change Theme</button>
            </div>
            <BookList />
        </div >
    )
}

export default App;