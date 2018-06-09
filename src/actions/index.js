import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


//increment like
/*export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export function incrementLikes(id){
    return {
        type: INCREMENT_LIKES,
        id
    }
};*/

//add story

export const ADD_STORY = 'ADD_STORY';
export function addStory(story){
    return {
        type: ADD_STORY,
        story
    }
};

export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS';
export const fetchStoriesSuccess = stories => ({
    type: FETCH_STORIES_SUCCESS,
    stories 
});

export const FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR';
export const fetchStoriesError = error => ({
    type: FETCH_STORIES_ERROR,
    error
});

export const fetchStories = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/stories`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(stories => {
        dispatch(fetchStoriesSuccess(stories));
    }).catch(err => dispatch(fetchStoriesError(err)));
};


export const postStory = newStory => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/stories`, {
        method: 'POST',
        body: JSON.stringify(newStory),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

//export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const incrementLikes = (id, likes) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/stories/story/${id}`, {
        method: 'PUT',
        body: JSON.stringify({likes}),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(fetchStories()));
}