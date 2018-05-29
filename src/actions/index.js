//increment like
export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export function incrementLikes(likes){
    return {
        type: INCREMENT_LIKES,
        likes
    }
};

//add story

export const ADD_STORY = 'ADD_STORY';
export function addStory(story){
    return {
        type: ADD_STORY,
        story
    }
};