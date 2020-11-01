import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 1},
        {id: 2, message: 'Its my first post', likesCount: 3},
    ],
    profile: null,
    status: ''
};

it('length of posts should be incremented', () => {
    //test data
    let action = addPostActionCreator('Real big drip');

    //action
    let newState = profileReducer(state, action);

    //3. expection
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    //test data
    let action = addPostActionCreator('Real big drip');

    //action
    let newState = profileReducer(state, action);

    //3. expection
    expect(newState.posts[2].message).toBe('Real big drip');
});

it('after deleting length should not be decremented if id is incorrect', () => {
    //test data
    let action = deletePost(812);

    //action
    let newState = profileReducer(state, action);

    //3. expection
    expect(newState.posts.length).toBe(2);
});


it('after deleting length of messages should be decremented', () => {
    //test data
    let action = deletePost(1);

    //action
    let newState = profileReducer(state, action);

    //3. expection
    expect(newState.posts.length).toBe(2);
});