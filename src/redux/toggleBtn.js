
export function toggleBtn() {
    return {
        type: "TOGGLE_BTN"
    }
}

export default function toggleBtnReducer(toggleBtn = false, action) {
    switch (action.type) {
        case "TOGGLE_BTN":
            return  !toggleBtn
        default : 
            return toggleBtn
    }
}