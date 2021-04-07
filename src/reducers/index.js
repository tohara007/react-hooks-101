import { combineReducers } from 'redux'

import events from './events'

// reducerをcombineしたことで、stateがArray型からオブジェクト型へ変わった
export default combineReducers({ events })