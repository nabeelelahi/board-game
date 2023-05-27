import React from 'react'

function Cell(props) {
    const { data, index, activeCell } = props;
    return (
        <div
            id="cell"
            className={`${activeCell === index ?
                'd-flex justify-content-center align-items-center border border-primary shadow'
                :
                'd-flex justify-content-center align-items-center border'
                }`}
        >
            {
                data.type &&
                <img src={`/images/${data.type}.jpg`} alt='' />
            }
        </div>
    )
}

export default React.memo(Cell)