import dialogsReducer from "./dialogsReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    /*users: [
        {id: 1, photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
            followed: false, fullName: 'Dmitriy', status: 'No pain no gain', location: {city: 'Saint-Petersburg', country: 'Russia'}},
        {id: 2, photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
            followed: true, fullName: 'Alexander', status: 'Я всё успею, либо моё место обочина', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3, photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
            followed: false, fullName: 'Mike', status: 'Real big drip, Watch out dont sleep', location: {city: 'Atlanta', country: 'USA'}},
        {id: 4, photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
            followed: true, fullName: 'Jeffery', status: 'Again...', location: {city: 'Atlanta', country: 'USA'}},

    ]*/
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {u, follwed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {u, follwed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;