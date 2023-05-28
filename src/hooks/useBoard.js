import { useEffect, useState } from 'react'
import _ from 'lodash';
import { showPopModal } from '../helpers';
import useHttp from './useHttp';
import useTimer from './useTimer';

// this hook performs functionalities and handling logic of the whole board game
function useBoard() {

    const [cells, setCells] = useState([])
    const [activeCell, setActiveCells] = useState(0)
    const [score, setScore] = useState(0)
    const [name, setName] = useState({})
    const [isModalOpen, setIsModalOpen] = useState({})
    // number which contains a decimal square root
    const length = 20 * 20;
    // this hook is used here to submit score
    const { makeRequest } = useHttp('scores', 'form');
    // this hook is used here to maintain time
    const { timeTaken, createCounter, counter, clearTimeInterval } = useTimer();

    // this function creates the board cells.
    function createBoard() {
        clearStates()
        let tempCells = []
        for (let i = 0; i < length; i++) {
            let data = {
                number: i + 1,
                type: i === 0 ? 'knight' : '',
            };
            tempCells.push(data)
        }
        spawnEnemies(tempCells)
        spawnItems(tempCells)
        setCells(tempCells)
    }

    // this function clears the states.
    function clearStates() {
        setCells([])
        setActiveCells(0)
        setScore(0)
    }

    // this generate random numbers between a range of numbers
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // this function spawn enemies on the board
    function spawnEnemies(data) {
        for (let i = 0; i < Math.sqrt(length); i++) {
            data[randomIntFromInterval(1, length - 1)].type = 'enemy';
        }
    }

    // this function spawn items on the board
    function spawnItems(data) {
        for (let i = 0; i < Math.sqrt(length); i++) {
            data[randomIntFromInterval(1, length - 1)].type = 'item';
        }
    }

    // this function parforms the logic when the knight cells positions is changed
    function onActiveCellChange() {
        let tempCells = _.cloneDeep(cells);
        tempCells = tempCells.map((p, ind) => {
            if (p.type === 'knight') p.type = '';
            if (ind === activeCell) {
                if (p.type === 'enemy') {
                    // creating board again
                    createBoard()
                    let message = 'You have lost the game. Because you ran into an enemy.';
                    showPopModal('error', 'You Lost', message)
                    // clearing last inteval
                    clearTimeInterval()
                }
                else if (p.type === 'item') {
                    // increasing score
                    setScore(p => ++p)
                }
                p.type = 'knight'
                return p
            }
            return p
        })
        setCells(tempCells)
    }

    // this function performs the functionalities of key presses
    function onKeyPress(e) {
        let row = Math.sqrt(length)
        if (e.key === 'ArrowLeft') {
            setActiveCells(p => p > 0 ? p - 1 : p)
        }
        if (e.key === 'ArrowRight') {
            setActiveCells(p => p < length - 1 ? 1 + p : p)
        }
        if (e.key === 'ArrowDown') {
            setActiveCells(p => row + p <= length - 1 ? row + p : p)
        }
        if (e.key === 'ArrowUp') {
            setActiveCells(p => p - row >= 0 ? p - row : p)
        }
    }

    // this function performs the functionality of showing results when a user wins game.
    function onGameWing() {
        if (cells.length) {
            // checking if all items have been picked
            let cellExists = cells.find(i => i.type === 'item')
            if (_.isEmpty(cellExists)) {
                let message = 'You have won the game. You have collected all Items';
                showPopModal('success', 'You Won', message)
                // clearing time interval
                clearTimeInterval()
                if (score > 0) {
                    // making api request to save results.
                    let payload = { name, score, time_taken: timeTaken }
                    makeRequest('POST', payload)
                }

            }
        }
    }


    useEffect(() => {
        // creating board
        createBoard()
        // appending listeners of key press
        window.addEventListener("keydown", onKeyPress);
    }, [])

    useEffect(() => {
        // checking if game has been won or not
        onGameWing()
    }, [cells])

    useEffect(() => {
        if (cells.length) {
            // handing knight cell change
            onActiveCellChange();
        }
    }, [activeCell])


    return {
        cells: _.cloneDeep(cells),
        score: _.cloneDeep(score),
        activeCell: _.cloneDeep(activeCell),
        isModalOpen: _.cloneDeep(isModalOpen),
        setIsModalOpen: setIsModalOpen,
        name: _.cloneDeep(name),
        setName: setName,
        counter,
        createCounter
    }
}

export default useBoard