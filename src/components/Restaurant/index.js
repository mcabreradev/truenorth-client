import React from 'react';
import Rating from '../Rating';

import './styles.css';

const Restaurant = ({logo, commercialName, rating, reviews, address}) => (

    <div className="box restaurant">
        <article className="media restaurant-details">

            <div className="media-left">
                <figure className="image">
                    <img src={ logo } alt="Imagee" />
                </figure>
            </div>

            <div className="media-content columns">
                <div className="content column is-four-fifths">
                    <div className="is-size-5 has-text-weight-semibold has-text-grey restaurant-name">{ commercialName }</div>

                    <div className="is-flex restaurant-rating">
                        <span className="tag is-success is-radiusless restaurant-tag">{ rating }</span> 
                        <Rating rating={ rating }/> 
                        <span className="is-size-7 has-text-link restaurant-reviews">{ reviews.length } Reviews</span>
                    </div>

                    <div>
                        <i className="has-text-grey-lighter fas fa-map-marker-alt restaurant-marker"></i> 
                        <span className="is-size-7 restaurant-address">{ address }</span> 
                    </div>
                </div>

                <div className="column">
                    <a className="button is-small is-danger is-pulled-right order-button" href="/">Order food</a>
                </div>
            </div>
        </article>
    </div>
);

export default Restaurant;


