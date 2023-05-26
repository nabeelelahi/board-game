import React from 'react'

function Cell(props) {
    const { data, index, activeCell } = props;
    return (
        <div id="cell"
            className={`${activeCell === index ? 'border border-primary shadow' : 'border'}`}>
            {
                data.type &&
                <img src={`/images/${data.type}.jpg`} alt='' />
            }
        </div>
    )
}

export default React.memo(Cell)