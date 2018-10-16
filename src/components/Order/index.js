import React, { Component } from 'react';
import styled from 'styled-components';
import { findColor } from '../../util';
import Rating from '../Rating';
import Modal from '../Modal';
import { loopOverTotals } from '../../util';

const Container = styled.div`
  top: 40px;
  position: relative;
`;

class Order extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClickHandlerOpenReview = this.onClickHandlerOpenReview.bind(this);
        this.onChagenQty = this.onChagenQty.bind(this);
    }
    
    componentWillMount() {
        this.props.fetchRestaurantById(this.props.match.params.id);
     }

    onChagenQty(e) {
        let price = this.props.restaurant.meals[ e.target.id].price;
        let qty = e.target.value;
        let total = price * qty;
        
        if(total === 0) { total = "";}

        this.props.setTotalPrice(total, parseInt(e.target.id))
    }

    onChange(e) {
        switch (e.target.name) {
            case "name":
                this.props.setName(e.target.value);
                break;
            
            case "sortBy":
                this.props.setSortBy(e.target.value);
                break;
        
            default:
                break;
        }
    }

    onClickHandlerOpenReview(){
        this.props.toggleModal(true, this.props.restaurant._id);
    }

    render() { 
        const { restaurant, mealTotal } = this.props;

        return restaurant.length !== 0 ? (
            <Container className="container">
                <article className="media restaurant-details">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img src={ restaurant.logo } alt="Imagee" />
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
                </article>
                <Modal {...this.props}/>

                <hr />
                <div className="content is-small">
                    <h2>Customer details</h2>
                    <p>Please enter the customer details</p>

                    <form className="column is-7">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Name" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Last Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Phone Number</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Phone Number" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Address</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Address" />
                            </div>
                        </div>

                    </form>
                </div>

                <hr />
                <div className="content is-small">
                    <h2>Order Food</h2>
                    <p>Please select the food</p>

                    <table className="table is-hoverable">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                restaurant.meals.map( (meal, id) => {
                                    return (
                                        <tr key={id + '_product'}>
                                            <td>
                                                <figure className="image is-128x128">
                                                    <img className="image is-64-64" src={meal.img} alt={meal.name} />
                                                </figure>
                                            </td>
                                            <td>{meal.name}</td>
                                            <td>{meal.description}</td>
                                            <td>${meal.price}</td>
                                            <td>
                                                <div className="select">
                                                    <select onChange={this.onChagenQty} id={id}>
                                                        <option value="0">Select</option>
                                                        { Array(20).fill('nums').map( (num, key) => <option key={key} values={key+1}>{ key + 1}</option>)}
                                                    </select>
                                                </div>
                                            </td>
                                            <td>{ mealTotal[id] ? ( mealTotal[id].total !== "" ? '$' : '' ) + mealTotal[id].total : '' }</td>
                                        </tr>
                                    )
                                })
                            }

                            <tr>
                                <td colSpan="6"><h2 className="has-text-right">{ loopOverTotals(mealTotal) !== 0 ? 'Total $' + loopOverTotals(mealTotal) : '' }</h2></td>
                            </tr>
                            
                        </tbody>
                        </table>

                </div>

            </Container>
        ) : (this.props.renderLoading) ;
    }

}

Order.defaultProps = {  
    renderLoading: <Container className="container">Loading...</Container>, 
};

export default Order;
