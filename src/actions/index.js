//Action Creators
//This has two Errors
//1) Actions Must Be Plain Objects
//2) Use Custom Middleware for async Actions
//3) These Errors Occur in async Action Creators

//////// So, What is Wrong with this code?
// 1 =>  Action Creators must return plain JS objects with a type property
// 2 => By the time our action gets to a reducer, we won't have fetched our data



// import JsonPlaceholder from '../apis/JsonPlaceholder';

// export const fetchPosts = async () => {
//     const response = await JsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// }

import JsonPlaceholder from '../apis/JsonPlaceholder';

export const fetchPosts = () => {
    return async function (dispatch, getState) {

        const response = await JsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response });
    }
}

//Can be done in ES2015 Syntax

// export const fetchPosts = () =>  async dispatch => {

//         const response = await JsonPlaceholder.get('/posts');

//         dispatch({ type: 'FETCH_POSTS', payload: response });
// }