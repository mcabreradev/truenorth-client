// Types
export const ORDER = {
    SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
    SET_ORDER_DETAILS: "SET_ORDER_DETAILS"
}

export const setTotalPriceAction = (total, mealId) => (dispatch) => {
    try {
        dispatch({
            type: ORDER.SET_TOTAL_PRICE,
            total: total,
            mealId
        });
    } catch (error) {
        console.error(error);
    }
};

export const setOrderDetailsAction = (details) => (dispatch) => {
    try {
        dispatch({
            type: ORDER.SET_ORDER_DETAILS,
            payload: details
        });
    } catch (error) {
        console.error(error);
    }
};