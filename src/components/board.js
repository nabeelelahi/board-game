import React, { useState } from 'react'
import Cell from './cell';
import useBoard from '../hooks/useBoard';

function Board() {

    const { score, activeCell, cells } = useBoard();

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Your Score: {score}</h1>
            <div id="board" className='shadow border d-flex flex-wrap'>
                {
                    cells.map((data, index) => <Cell key={data.number} {...{ data, index, activeCell }} />)
                }
            </div>
        </div>
    )
}

export default React.memo(Board);