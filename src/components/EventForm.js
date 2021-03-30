import React, { /* useReducer,*/ useState } from 'react'
// useReducerもreducerも不要のため、コメントアウト
// import reducer from '../reducers'

import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions'

const EventForm = ({ state, dispatch }) => {
    // App.jsからstateとdispatchがpropsとして渡されるため、個別でのuseReducerは不要
    // const [state, dispatch] = useReducer(reducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const changeTitle = e => setTitle(e.target.value)
    const changeBody = e => setBody(e.target.value)

    const addEvent = e => {
        // 画面のリロードを防止するため(ボタンを押したときにsubmitが走ることでリロード起きるが、それを抑止する)
        e.preventDefault()
        dispatch({ type: CREATE_EVENT, title, body })
        setTitle('')
        setBody('')
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('全てのイベントを本当に削除して良いですかあ？')
        if (result) dispatch({type: DELETE_ALL_EVENT})
    }

    // disabledがtrueになる条件を記載
    const unCreatable = title === '' || body === ''

    return (
        <>
            <h4>イベントフォーム</h4>
            <form>
                <div className="form-group">
                <label htmlFor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" value={title} onChange={changeTitle}/>
                </div>
                <div className="form-group">
                <label htmlFor="formEventBody">ボディー</label>
                <textarea className="form-control" id="formEventBody" value={body} onChange={changeBody}/>
                </div>
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
            </form>
        </>
    )
}

export default EventForm
