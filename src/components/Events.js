import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Event from './Event'

const Events = () => {
    const { state } = useContext(AppContext)
    return (
        <>
            <h4>イベント一覧</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>イベント</th>
                    <th>ボディー</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { state.map((event, idx) => (<Event key={idx} event={event} />))}
                </tbody>
            </table>
        </>
    )
}

export default Events
