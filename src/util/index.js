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

export const stringToSlug = (str) => {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaaeeeeiiiioooouuuunc------";
  
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
  
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-") // collapse dashes
      .replace(/^-+/, "") // trim - from start of text
      .replace(/-+$/, ""); // trim - from end of text
  
    return str;
  }

export const loopOverTotals = (totals) => {
    let totalFull = 0;

    for (let key in totals) {
        if (totals.hasOwnProperty(key)) {
            totalFull = totals[key].total + totalFull;
        }
    }

return totalFull;
}

export const toCurrency = number => '$' + number.toLocaleString('es-AR');