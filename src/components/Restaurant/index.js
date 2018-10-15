import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Rating from '../Rating';
import { findColor } from '../../util';

import './styles.css';

class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props._id);
    }

    render() { 
        const { logo, commercialName, rating, reviews, address, _id } = this.props;

        return (
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
                                <span className={"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold " + (findColor(rating)) }>{ rating }</span> 
                                <Rating rating={ rating }/> 
                                <span className="is-size-7 has-text-link restaurant-reviews" name="review" onClick={ this.onClick }>{ reviews.length } Reviews</span>
                            </div>

                            <div>
                                <i className="has-text-grey-lighter fas fa-map-marker-alt restaurant-marker"></i> 
                                <span className="is-size-7 restaurant-address">{ address }</span> 
                            </div>
                        </div>

                        <div className="column">
                            <Link to={`${process.env.PUBLIC_URL}/restaurants/${_id}`}><span className="button is-small is-danger is-pulled-right order-button"> Order food</span></Link>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Restaurant;
