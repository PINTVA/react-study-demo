import * as color from './action-type'

const themeReducer = (state, action) => {
    if(!state){
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case color.CHANGE_COLOR: 
            return {...state , themeColor: action.themeColor}
        default:
            return state
    }
}

export default themeReducer
