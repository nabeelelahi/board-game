import { useEffect, useState } from 'react'
import _ from 'lodash';
import { showPopModal } from '../helpers';
import useHttp from './useHttp';
import useTimer from './useTimer';

function useBoard() {

    const [cells, setCells] = useState([])
    const [activeCell, setActiveCells] = useState(0)
    const [score, setScore] = useState(0)
    const [name, setName] = useState({})
    const [isModalOpen, setIsModalOpen] = useState({})
    const length = 5 * 5;
    const { makeRequest } = useHttp('scores', 'form');
    const { timeTaken, createCounter, counter, clearTimeInterval } = useTimer();

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

    function clearStates() {
        setCells([])
        setActiveCells(0)
        setScore(0)
    }

    function randomIntFromInterval(min, max) {
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

    function onActiveCellChange() {
        let tempCells = _.cloneDeep(cells);
        tempCells = tempCells.map((p, ind) => {
            if (p.type === 'knight') p.type = '';
            if (ind === activeCell) {
                if (p.type === 'enemy') {
                    createBoard()
                    let message = 'You have lost the game. Because you ran into an enemy.';
                    showPopModal('error', 'You Lost', message)
                    clearTimeInterval()
                }
                else if (p.type === 'item') {
                    setScore(p => ++p)
                }
                p.type = 'knight'
                return p
            }
            return p
        })
        setCells(tempCells)
    }

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

    function onGameWing() {
        if (cells.length) {
            let cellExists = cells.find(i => i.type === 'item')
            if (_.isEmpty(cellExists)) {
                let message = 'You have won the game. You have collected all Items';
                showPopModal('success', 'You Won', message)
                clearTimeInterval()
                if (score > 0) {
                    let payload = { name, score, time_taken: timeTaken }
                    makeRequest('POST', payload)
                }

            }
        }
    }


    useEffect(() => {
        createBoard()
        window.addEventListener("keydown", onKeyPress);
    }, [])

    useEffect(() => {
        onGameWing()
    }, [cells])

    useEffect(() => {
        if (cells.length) {
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