
export function setSelectedCategories(categories) {
    return {
        type: "SET_SELECTED_CATEGORIES",
        payload: categories
    }
}
export function resetSelectedCategories() {
    return {
        type: "RESET_SELECTED_CATEGORIES",
    }
}


export default function setSelectedCategoriesReducer(state = [], action) {
    switch (action.type) {
        case "SET_SELECTED_CATEGORIES":
            if (state.includes(action.payload))
            return [...state.filter(category => category !== action.payload)]
            else
            return [...state,action.payload]
        case "RESET_SELECTED_CATEGORIES":
            return []
        default:
            return state
    }
}