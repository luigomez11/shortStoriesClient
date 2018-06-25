import stories from '../data/stories';
import { FETCH_STORIES_SUCCESS, FETCH_STORIES_ERROR, FETCH_USER_STORIES_ERROR, FETCH_USER_STORIES_SUCCESS } from '../actions/index';

const initialState = { 
    stories,
    error: null
};

function rootReducer(state = initialState, action){
    switch(action.type){

        /*case INCREMENT_LIKES:
        console.log(action);
        const newStories = state.stories.map(item => {
            if(item.id === action.id){
                item.likes++;
                return item;
            }
            return item;
        })
        return Object.assign({}, state, {
            stories: [...newStories]
        })*/

        //create async action for adding stories, fetch again...

        case FETCH_STORIES_SUCCESS:
        return Object.assign({}, state, {
            stories: [...action.stories],
            error: null
        })

        case FETCH_STORIES_ERROR:
        return Object.assign({}, state, {
            error: action.error
        })

        case FETCH_USER_STORIES_SUCCESS:
        return Object.assign({}, state, {
            stories: [...action.stories],
            error: null
        })
        
        case FETCH_USER_STORIES_ERROR:
        return Object.assign({}, state, {
            error: action.error
        })

    }
    
    return state;
}

export default rootReducer;