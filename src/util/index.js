export const filterRestaurants = (state) => {

    const {
        restaurants,
        name,
        sortBy
    } = state;

    return restaurants.filter(restaurant => {
        return restaurant.commercialName.toLowerCase().indexOf(name.toLowerCase()) >= 0 || restaurant.address.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    })
    .sort((last, next) => {

        if (sortBy === "") {
            return last.commercialName > next.commercialName ? 1 : -1; // sort by name ASC 
        }

        // next.rating - last.rating -> ASC
        // last.rating - next.rating -> DESC
        return sortBy === "highest_rated" ? next.rating - last.rating : last.rating - next.rating;
    });
}

export const findColor = (rating) => {
    let color = "has-background-success";

    if (rating < 2){
        color = "has-background-danger";
    }
    if (rating >=2 && rating <= 3){
        color = "has-background-warning";
    }
    else if(rating >=3 && rating <= 4){
        color = "has-background-info";
    }

    return color;
}