import { combineReducers } from 'redux'

import events from './events'
import operationLogs from './operationLogs'

// reducerをcombineしたことで、stateがArray型からオブジェクト型へ変わった
export default combineReducers({ events, operationLogs })