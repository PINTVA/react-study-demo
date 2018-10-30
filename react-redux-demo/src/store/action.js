import * as actionType from './action-type'

export const changeColor = (color) => {
    return{
        type: actionType.CHANGE_COLOR,
        themeColor: color
    }
}