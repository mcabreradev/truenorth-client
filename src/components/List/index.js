import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../store/actions/actions';

import Wrapper from '../../containers/Wrapper';
import { Filters, Restaurant, Loading } from '../../components';


import './styles.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentWillMount() {
       this.props.fetchRestaurants();
    }

    render() { 

        const { restaurants , isLoading } = this.props;

        return ( 
            <Wrapper>

                <Loading isActive={isLoading} />

                <Filters />

                <div className="columns is-multiline">
                    <div className="column is-12-desktop is-12-tablet">
                        { restaurants.map( resto => <Restaurant {...resto} key={resto._id} />)  }
                    </div>
                </div>

            </Wrapper>
         );
    }
}
 
List.defaultProps = {  
    renderLoading: <div className="container">loading...</div>, 
    tryAgain: <div className="container">Restaurant was not found!, try again</div>, 
    restaurants: [],
    name: "",
    selectedSortby: "",
};

const mapStateToProps = state => ({
    restaurants: state.data.filteredRestaurants,
    name: state.data.name,
    isLoading: state.data.isLoading,
    selectedSortby: state.data.selectedSortby ? state.data.selectedSortby : false
});

export default connect(mapStateToProps, { fetchRestaurants })(List);