import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from './pages/game';
import Score from './pages/scores';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* common */}
                <Route
                    exact
                    path="/"
                    name="Game"
                    element={<Game />}
                />
                <Route
                    exact
                    path="/game"
                    name="Game"
                    element={<Score />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default React.memo(App);