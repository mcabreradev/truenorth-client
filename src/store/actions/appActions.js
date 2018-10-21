// Types
export const APP = {
    TOGGLE_LOADING: "TOGGLE_LOADING",
    TOGGLE_MODAL: "TOGGLE_MODAL"
}

export const loadingAction = (state) => (dispatch) => {
    try {
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: state
        });
    } catch (error) {
        console.error(error);
    }
};

export const toggleModalAction = (isActive, restoId) => (dispatch, getState) => {
    try {
        dispatch({
            type: APP.TOGGLE_MODAL,
            payload: isActive,
            reviewedRestaurant: typeof restoId !== "undefined" ? getState().restaurant.restaurants.find(resto => resto._id === restoId) : []
        });
    } catch (error) {
        console.error(error);
    }
};
