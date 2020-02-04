const Number = (state = 0 , action) => {
    switch (action.type) {
        case 'Increase':
            return state = state + 1;
        case 'Decrease':
            return state = state - 1;
        default:
            return state;
    }
}

export default Number;