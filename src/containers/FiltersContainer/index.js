import { connect } from 'react-redux';
import { setName, setSortBy } from '../../store/actions/actions';
import { Filters } from '../../components';

const mapStateToProps = state => ({
    name: state.data.name,
    sortBy: state.data.sortBy
 });

 const mapActionToProps = {
    setName,
    setSortBy,
};

export default connect(mapStateToProps, mapActionToProps)(Filters);