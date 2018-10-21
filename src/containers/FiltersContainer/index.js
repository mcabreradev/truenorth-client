import { connect } from 'react-redux';
import { setNameAction, setSortByAction } from '../../store/actions/filterActions';
import { Filters } from '../../components';

const mapStateToProps = state => ({
    name: state.filter.name,
    sortBy: state.filter.sortBy
 });

 const mapActionToProps = {
    setNameAction,
    setSortByAction,
};

export default connect(mapStateToProps, mapActionToProps)(Filters);