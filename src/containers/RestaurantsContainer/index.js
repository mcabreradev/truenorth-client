import { connect } from 'react-redux';
import { fetchRestaurants, toggleModal } from '../../store/actions/actions';
import { Restaurants } from '../../components';

const mapStateToProps = state => ({
    restaurants: state.data.filteredRestaurants,
    name: state.data.name,
    isLoading: state.data.isLoading,
    selectedSortby: state.data.selectedSortby ? state.data.selectedSortby : false,
    isModalActive: state.data.isModalActive,
    reviewedRestaurant: state.data.reviewedRestaurant,
});

const mapActionToProps = {
    fetchRestaurants,
    toggleModal
};

export default connect(mapStateToProps, mapActionToProps)(Restaurants);