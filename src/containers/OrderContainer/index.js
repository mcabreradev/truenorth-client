import { connect } from 'react-redux';
import { fetchRestaurantByIdAction } from '../../store/actions/restaurantActions';
import { toggleModalAction } from '../../store/actions/appActions';
import { setTotalPriceAction, setOrderDetailsAction, getDistances } from '../../store/actions/orderActions';
import { Order } from '../../components';

const mapStateToProps = state => ({
    restaurant: state.restaurant.restaurant,
    isModalActive: state.app.isModalActive,
    reviewedRestaurant: state.app.reviewedRestaurant,
    totalSelectedMeals: state.order.totalSelectedMeals,
    orderDetails: state.order.orderDetails,
    distances: state.order.distances,
});

const mapActionToProps = {
    fetchRestaurantByIdAction,
    toggleModalAction,
    setTotalPriceAction,
    setOrderDetailsAction,
    getDistances
};

export default connect(mapStateToProps, mapActionToProps)(Order);