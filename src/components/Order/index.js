import React, { Component } from 'react';
import RestaurantDetails from './RestaurantDetails';
import CustomerDetails from './CustomerDetails';
import MealsDetails from './MealsDetails';
import styled from 'styled-components';
import { loopOverTotals } from '../../util';

const Container = styled.div`
  top: 40px;
  position: relative;
  padding-bottom: 100px;
`;

class Order extends Component {

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);

        this.state = {
            isSubmitted: false
        }
    }

    onClickHandler(){
        this.setState({isSubmitted: true});
        // this.props.getDistances()
    }

    componentWillMount() {
        this.props.fetchRestaurantByIdAction(this.props.match.params.id);
     }

    render() { 
        const { restaurant,  totalSelectedMeals, orderDetails } = this.props;
        const { isSubmitted } = this.state;

        return restaurant.length !== 0  && !isSubmitted ? (
            <Container className="container">
                <RestaurantDetails {...this.props} />
                <hr />
                <CustomerDetails {...this.props} />
                <hr />
                <MealsDetails {...this.props} />
                
                <div className="control is-pulled-right">
                    <button className="button is-success" onClick={this.onClickHandler} disabled={ loopOverTotals(totalSelectedMeals) !== 0 ? '' : 'disabled' }>Order Food</button>
                </div>

            </Container>
        ) : 
        !isSubmitted  ? (this.props.renderLoading) :  (
            <Container className="container">

                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Dear { orderDetails.name }, your order was confirmed!
                            </h1>
                            <h2 className="subtitle">
                                The { restaurant.commercialName }' restaurant is preparing your food. Your order will be delivered to { orderDetails.address } within of 30 minutes.
                            </h2>
                            <p>Thanks for trust in us.. </p>
                        </div>
                    </div>
                </section>
                
            </Container>
        );
    }
}

Order.defaultProps = {  
    renderLoading: <Container className="container">Loading...</Container>, 
};

export default Order;
