const intialData = { users: [] }

const usersDataReducers = (state = intialData, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            console.log('action', action)
            return {
                data: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default usersDataReducers