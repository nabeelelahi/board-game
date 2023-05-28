import React from 'react'
import Cell from './cell';
import useBoard from '../hooks/useBoard';
import NameModal from './nameModal';

// this components renders the board of the game
function Board() {

    // calling up the useBoad Hook
    const {
        score,
        activeCell,
        cells,
        isModalOpen,
        setIsModalOpen,
        setName,
        name,
        counter,
        createCounter
    } = useBoard();

    return (
        <div className='d-flex flex-column align-items-center container'>
            <div className='d-flex justify-content-evenly w-100'>
                {/* rendering scores and time counter */}
                <h2>Your Score: {score}</h2>
                <h2>{counter}</h2>
            </div>
            <div id="board" className='shadow border d-flex flex-wrap'>
                {/* rendering all the cells */}
                {
                    cells.map((data, index) => <Cell key={data.number} {...{ data, index, activeCell }} />)
                }
            </div>
            {/* modal which ask for players name */}
            {
                isModalOpen &&
                <NameModal
                    name={name}
                    setName={setName}
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
                    createCounter={createCounter}
                />
            }
        </div>
    )
}

export default React.memo(Board);