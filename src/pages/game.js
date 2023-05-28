import React, { useEffect } from 'react'
import Board from '../components/board'
import Header from '../components/header'

function Game() {

    return (
        <>
        <Header />
        <Board />
        </>
    )
}

export default React.memo(Game)