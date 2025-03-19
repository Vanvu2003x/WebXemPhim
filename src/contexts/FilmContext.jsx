import React, { createContext, useState } from "react";

// Tạo context
export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [film_id, setFilm_id] = useState("nu-hoang-nuoc-mat");

    return (
        <FilmContext.Provider value={{ film_id, setFilm_id }}>
            {children}
        </FilmContext.Provider>
    );
};
