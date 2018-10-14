import React from 'react';

const Rating = ({rating}) => {

    const stars = Array(5)
        .fill('star')
        .map( (star, index) => {
            let className = "fas fa-star has-text-grey-lighter"; // empty star by default

            if( (index + 1) <= Math.floor(rating) ) {
                className = "fas fa-star has-text-warning"; // full star
            }

            return <i className={ className } key={ star + index }></i>;
        })

    return ( 
        <div title={ 'Rate ' + rating }>
            { stars }
        </div>
    )
};

export default Rating;