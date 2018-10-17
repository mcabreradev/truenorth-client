import { connect } from 'react-redux';
import { fetchRestaurantById, toggleModal, setTotalPrice, setOrderDetails } from '../../store/actions/actions';
import { Order } from '../../components';

const mapStateToProps = state => ({
    restaurant: state.data.restaurant,
    isModalActive: state.data.isModalActive,
    reviewedRestaurant: state.data.reviewedRestaurant,
    totalSelectedMeals: state.data.totalSelectedMeals,
    orderDetails: state.data.orderDetails,
});

const mapActionToProps = {
    fetchRestaurantById,
    toggleModal,
    setTotalPrice,
    setOrderDetails
};

export default connect(mapStateToProps, mapActionToProps)(Order);