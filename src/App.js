import React from 'react'
import Board from './components/board';
import './app.css'

function App() {
    return (
        <div className='app d-flex justify-content-center align-items-center'>
           <Board />
        </div>
    )
}

export default React.memo(App);