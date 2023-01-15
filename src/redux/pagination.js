import  moviesReducer  from './movies.js';

export function changePage(page)  {
    return {
        type: "CHANGE_PAGE",
        payload: page
    }
}


export function changeItemsPerPage(itemsPerPage)  {
    return {
        type: "CHANGE_ITEMS_PER_PAGE",
        payload: itemsPerPage
    }
}

const initialState = {
    currentPage: 1,
    itemsPerPage: 4,
    totalItems: moviesReducer.length
}

export default function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_PAGE":
            return {...state, currentPage: action.payload}
        case "CHANGE_ITEMS_PER_PAGE":
            return {...state, itemsPerPage: action.payload}
        default:
            return state
    }
}
