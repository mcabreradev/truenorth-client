import { connect } from 'react-redux';
import { fetchRestaurantByIdAction } from '../../store/actions/restaurantActions';
import { toggleModalAction } from '../../store/actions/appActions';
import { setTotalPriceAction, setOrderDetailsAction} from '../../store/actions/orderActions';
import { Order } from '../../components';

const mapStateToProps = state => ({
    restaurant: state.restaurant.restaurant,
    isModalActive: state.app.isModalActive,
    reviewedRestaurant: state.app.reviewedRestaurant,
    totalSelectedMeals: state.order.totalSelectedMeals,
    orderDetails: state.order.orderDetails,
});

const mapActionToProps = {
    fetchRestaurantByIdAction,
    toggleModalAction,
    setTotalPriceAction,
    setOrderDetailsAction
};

export default connect(mapStateToProps, mapActionToProps)(Order);