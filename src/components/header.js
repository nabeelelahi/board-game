import React from 'react'
import { Link } from 'react-router-dom'

function header() {
    return (
        <nav class="navbar navbar-primary bg-primary">
            <Link class="navbar-brand" to="/">
                <h3 className='text-white mx-2'>Board Game</h3>
            </Link>
            <Link class="nav-link text-white mx-2" to="/score-board">
                Score Board
            </Link>
        </nav>
    )
}

export default header