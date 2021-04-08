import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions'

const operationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            // ログは、常に新しいものが上に表示されるもの
            // したがって、新しいログが古いstateの前に配置されるように、returnの配列を作成
            return [operationLog, ...state]
        case DELETE_ALL_OPERATION_LOGS:
            return []
        default:
            return state
    }
}

export default operationLogs