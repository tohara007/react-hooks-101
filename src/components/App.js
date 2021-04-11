import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

// localStorageに保存するときのKEY
const APP_KEY = 'appWithRedux'

const App = () => {
  // localStorageから保存されているstateを取得する
  const appStorage = localStorage.getItem(APP_KEY)
  // 取得したstateを確認し、値があればJSON型からJSのオブジェクト型に直してから初期値とする
  // 値がなければ、空配列を初期値とする
  const initialState = appStorage ? JSON.parse(appStorage) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // stateが更新されるたびに、localStorageに保存する処理
  useEffect(() => {
    // 保存する前に、JSON型文字列に変換する必要ある
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
