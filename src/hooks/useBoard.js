import React, { useEffect, useState } from 'react'

function useBoard() {

    const [cells, setCells] = useState([])
    const [activeCell, setActiveCells] = useState(0)
    const length = 20;

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function spawnEnemies(data) {
        for (let i = 0; i < Math.sqrt(length); i++) {
            data[randomIntFromInterval(1, length - 1)].type = 'enemy';
        }
    }

    function spawnItems(data) {
        for (let i = 0; i < Math.sqrt(length); i++) {
            data[randomIntFromInterval(1, length - 1)].type = 'item';
        }
    }

    function createBoard() {
        let cells = [];
        for (let i = 0; i < length; i++) {
            let data = {
                number: i + 1,
                type: i === 0 ? 'knight' : '',
            }
            cells.push(data)
        }
        spawnEnemies(cells)
        spawnItems(cells)
        setCells(cells)
    }

    useEffect(() => {
        createBoard()
    }, [])

    return {
        cells,
        activeCell
    }

}

export default useBoard