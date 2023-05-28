import React from 'react'
import { Table } from 'antd';
import Header from '../components/header';
import useHttp from '../hooks/useHttp';

function ScoreBoard() {

    const { state } = useHttp('scores')

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'Time Taken',
            dataIndex: 'time_taken',
            key: 'time_taken',
            render: (key, _) => <p className='fw-bold'>{key} seconds</p>
        },
    ];

    return (
        <>
            <Header />
            <div id="score-board" className='container d-flex  flex-column justify-content-center'>
                <h1 className='text-center'>Previous Scores</h1>
                <div className='shadow px-2 border'>
                    <h2 className='my-3 text-center'>Score Board</h2>
                    <div className='border'>
                        <Table dataSource={state?.data} columns={columns} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(ScoreBoard);