import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Event from './Event'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const changeTitle = e => setTitle(e.target.value)
  const changeBody = e => setBody(e.target.value)

  const addEvent = e => {
    // 画面のリロードを防止するため(ボタンを押したときにsubmitが走ることでリロード起きるが、それを抑止する)
    e.preventDefault()
    dispatch({ type: 'CREATE_EVENT', title, body })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除して良いですかあ？')
    if (result) dispatch({type: 'DELETE_ALL_EVENT'})
  }

  // disabledがtrueになる条件を記載
  const unCreatable = title === '' || body === ''

  return (
    <div className="container-fluid">
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
        { state.map((event, idx) => (<Event key={idx} event={event} dispatch={dispatch}/>))}
        </tbody>
      </table>
    </div>
  )
}

export default App
