
export function setMovies(movies) {
    return {
        type: "SET_MOVIES",
        payload: movies
    }
}

export function removeMovie(id) {
    return {
        type: "REMOVE_MOVIE",
        payload: id
    }
}

export function filterMovies(category) {
    return {
        type: "FILTER_MOVIES",
        payload: category
    }
}

export default function moviesReducer(state  = [],action) {
    switch (action.type) {
        case "SET_MOVIES":
            return  action.payload
        case "REMOVE_MOVIE":
            return state.filter(movie => movie.id !== action.payload )
        case "FILTER_MOVIES":
            console.log(action.payload);
            if (action.payload.length === 0)
            return state
            else
            return state.filter(movie => action.payload.includes(movie.category));
        default: 
            return state 
    }
}