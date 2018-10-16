import { connect } from 'react-redux';
import { fetchRestaurantById, toggleModal, setTotalPrice } from '../../store/actions/actions';
import { Order } from '../../components';

const mapStateToProps = state => ({
    restaurant: state.data.restaurant,
    isModalActive: state.data.isModalActive,
    reviewedRestaurant: state.data.reviewedRestaurant,
    mealTotal: state.data.totals,
});

const mapActionToProps = {
    fetchRestaurantById,
    toggleModal,
    setTotalPrice
};

export default connect(mapStateToProps, mapActionToProps)(Order);