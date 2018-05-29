import stories from '../data/stories';
import { INCREMENT_LIKES, ADD_STORY } from '../actions/index';

const defaultState = { stories };

console.log(defaultState);

function rootReducer(state=defaultState, action){
    switch(action.type){

        case INCREMENT_LIKES:
        console.log(action);
        return Object.assign({}, state, {
            stories: [...stories, action.story]
        })

        case ADD_STORY:
        console.log(action);
        return Object.assign({}, state, {
            stories: [...stories, action.story]
        })

    }
    
    return state;
}

export default rootReducer;