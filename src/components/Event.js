import React from 'react'

// Eventコンポーネント自体が、既にkey={idx}の定義されているため、
// このコンポーネントの中身でkey={idx}を付与する必要はない。
const Event = ({ event, dispatch }) => {
    const id = event.id
    const handleClickDeleteButton = () => {
        dispatch({ type: 'DELETE_EVENT', id })
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event