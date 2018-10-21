import React, { Component } from 'react';
import { loopOverTotals, toCurrency } from '../../../util';

class MealsDetails extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onChagenQty = this.onChagenQty.bind(this);
    }
    

    onChagenQty(e) {
        let price = this.props.restaurant.meals[ e.target.id].price;
        let qty = e.target.value;
        let total = price * qty;
        
        if(total === 0) { total = "";}

        this.props.setTotalPriceAction(total, parseInt(e.target.id));
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

    render() { 
        const { restaurant, totalSelectedMeals } = this.props;

        return (
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
                                        <td>{ meal.name }</td>
                                        <td>{ meal.description }</td>
                                        <td>{ toCurrency(meal.price) }</td>
                                        <td>
                                            <div className="select">
                                                <select onChange={this.onChagenQty} id={id}>
                                                    <option value="0">Select</option>
                                                    { Array(20).fill('nums').map( (num, key) => <option key={key} values={key+1}>{ key + 1}</option>)}
                                                </select>
                                            </div>
                                        </td>
                                        <td>{ totalSelectedMeals[id] ? toCurrency(totalSelectedMeals[id].total) : '' }</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan="6"><h2 className="has-text-right">{ loopOverTotals(totalSelectedMeals) !== 0 ? 'Total ' + toCurrency(loopOverTotals(totalSelectedMeals)) : '' }</h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        ) 
    }

}

export default MealsDetails;
