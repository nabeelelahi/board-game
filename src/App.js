import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from './pages/game';
import ScoreBoard from './pages/scoreBoard';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    name="Game"
                    element={<Game />}
                />
                <Route
                    exact
                    path="/score-board"
                    name="ScoreBoard"
                    element={<ScoreBoard />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default React.memo(App);