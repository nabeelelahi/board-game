import React from 'react'
import Board from '../components/board'
import Header from '../components/header'

// Game Page
function Game() {

    return (
        <>
        <Header />
        <Board />
        </>
    )
}

export default React.memo(Game)