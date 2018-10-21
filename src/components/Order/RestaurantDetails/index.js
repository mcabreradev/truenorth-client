import React, { Component } from 'react';
import { findColor } from '../../../util';
import Rating from '../../Rating';
import Modal from '../../Modal';

class RestaurantDetails extends Component {

    constructor(props) {
        super(props);
        this.onClickHandlerOpenReview = this.onClickHandlerOpenReview.bind(this);
    }

    onClickHandlerOpenReview(){
        this.props.toggleModalAction(true, this.props.restaurant._id);
    }

    render() { 
        const { restaurant } = this.props;

        return (
            <article className="media restaurant-details">
                <div className="media-left">
                    <figure className="image is-128x128">
                        <img src={ restaurant.logo } alt={ restaurant.commercialName } />
                    </figure>
                </div>

                <div className="media-content columns">
                    <div className="content column is-four-fifths">
                        <div className="is-size-5 has-text-weight-semibold has-text-grey restaurant-name">{ restaurant.commercialName }</div>

                        <div className="is-flex restaurant-rating">
                            <span className={"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold " + (findColor(restaurant.rating)) }>{ restaurant.rating }</span> 
                            <Rating rating={ restaurant.rating }/> 
                            <span className="is-size-7 has-text-link restaurant-reviews" name="review" onClick={ this.onClickHandlerOpenReview }>{ restaurant.reviews.length } Reviews</span>
                        </div>

                        <div>
                            <i className="has-text-grey-lighter fas fa-map-marker-alt restaurant-marker"></i> 
                            <span className="is-size-7 restaurant-address">{ restaurant.address }</span> 
                        </div>
                    </div>
                </div>
                <Modal {...this.props}/>
            </article>
        )   
    }
}

export default RestaurantDetails;
