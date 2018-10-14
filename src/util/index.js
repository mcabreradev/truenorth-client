export const ENDPOINT = "https://mcabreradev-truenorth-api.herokuapp.com";

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
