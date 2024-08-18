import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentList from './Components/StudentList'
import FvtStudent from './Components/FvtStudent'

const ArrContext = createContext()
function App() {
    const [favourites, setFavourites] = useState([]);
    const [value, setValue] = useState([
        {
            id: 1,
            name: "Nandha"
        },
        {
            id: 2,
            name: "Partha"
        },
        {
            id: 3,
            name: "Yasar"
        }
    ])
    return (
        <div>
            <ArrContext.Provider value={{value, setValue, favourites, setFavourites}}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<StudentList />} />
                        <Route path='/favourite' element={<FvtStudent />} />
                    </Routes>
                </BrowserRouter>
            </ArrContext.Provider>

        </div>
    )
}

export default App
export {ArrContext}