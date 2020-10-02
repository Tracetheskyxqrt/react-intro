let rerenderEntireTree = () => {
    console.log('State has been changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 1},
            {id: 2, message: 'Its my first post', likesCount: 3},
        ],
        newPostText: 'Yessirsky'
    },
    dialogsPage: {
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
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;