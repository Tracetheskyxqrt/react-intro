const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you? :)'},
        {id: 3, message: 'Whats going on?'},
        {id: 4, message: 'Whats going on?'},
        {id: 5, message: 'Whats going on?'},
        {id: 6, message: 'Whats going on?'},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>
    ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;