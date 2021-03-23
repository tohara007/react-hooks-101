// action = {
//     type: 'CREATE_EVENT',
//     title: '東京オリンピック中止のお知らせ',
//     body: '東京オリンピックの開催を中止します。つきましては。。。'
// }
// # before
// state = []
// # after
// state = [
//     {id: 1, title: '東京オリンピック中止のお知らせ', body: '東京オリンピックの開催を中止します。つきましては。。。'}
// ]
//
// # before
// state = [
//     {id: 1, title: 'タイトル１', body: 'ボディー１'}, 
//     {id: 2, title: 'タイトル２', body: 'ボディー２'}, 
//     {id: 3, title: 'タイトル３', body: 'ボディー３'}
// ]
// # after
// state = [
//     {id: 1, title: 'タイトル１', body: 'ボディー１'}, 
//     {id: 2, title: 'タイトル２', body: 'ボディー２'}, 
//     {id: 3, title: 'タイトル３', body: 'ボディー３'},
//     {id: 4, title: '東京オリンピック中止のお知らせ', body: '東京オリンピックの開催を中止します。つきましては。。。'}
// ]
//

const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id, ...event}]
        case 'DELETE_EVENT':
            return state.filter(event => event.id !== action.id)
        case 'DELETE_ALL_EVENT':
            return []
        default: 
            return state
    }
}

export default events