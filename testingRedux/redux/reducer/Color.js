export default (state = 'orange' , action) => {
    switch(action.type){
        case 'change_color':
            return state = action.color
        default:
            return state
    }
}