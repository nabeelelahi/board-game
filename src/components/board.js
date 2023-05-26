import React, { useEffect } from 'react'
import Cell from './cell';
import useBoard from '../hooks/useBoard';

function Board() {

    const { cells, activeCell } = useBoard();

    return (
        <div id="board" className='shadow border d-flex flex-wrap'>
            {
                cells.map((data, index) => <Cell key={data.number} {...{ data, index, activeCell }} />)
            }
        </div>
    )
}

export default React.memo(Board);