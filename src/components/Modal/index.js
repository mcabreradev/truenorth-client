import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../store/actions/actions';
import { findColor } from '../../util';

import './styles.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.toggleModal(false);
    }

    render() { 
        const { isModalActive, reviewedRestaurant } = this.props;

        return isModalActive ? (
            
            <div className={ "modal " + (isModalActive ? "is-active" : "")}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <div className="content is-small">
                            <h1>{ reviewedRestaurant.commercialName }'s Reviews</h1>
                            { 
                                reviewedRestaurant.reviews.map( (review, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="is-divider"></div>
                                            <span className={"tag has-text-white is-radiusless restaurant-tag has-text-weight-semibold " + (findColor(review.rating)) }>{ review.rating }</span>
                                            <p className="modal-review">
                                                <span className="has-text-grey has-text-weight-semibold">{ review.name }: </span>
                                                "<span className="is-italic">{ review.review }</span>"
                                            </p>
                                            
                                        </div>
                                    )
                                })
                            }
                            <div className="is-divider"></div>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.onClick}></button>
            </div>
          ) : null ;
    }
}

const mapStateToProps = state => ({
    isModalActive: state.data.isModalActive,
    reviewedRestaurant: state.data.reviewedRestaurant,
 });

export default connect(mapStateToProps, {
    toggleModal,
})(Modal);