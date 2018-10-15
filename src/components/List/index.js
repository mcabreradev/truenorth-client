import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, toggleModal } from '../../store/actions/actions';

import Wrapper from '../../containers/Wrapper';
import { Filters, Restaurant, Loading, Modal } from '../../components';


import './styles.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.onClickOpenReview = this.onClickOpenReview.bind(this);
    }

    componentWillMount() {
       this.props.fetchRestaurants();
    }

    onClickOpenReview(_id){
        this.props.toggleModal(true, _id);
    }

    render() { 

        const { restaurants , isLoading } = this.props;

        return ( 
            <Wrapper>

                <Loading isActive={isLoading} />

                <Filters />

                <div className="columns is-multiline">
                    <div className="column is-12-desktop is-12-tablet">
                        { restaurants.map( resto => <Restaurant {...resto} key={resto._id} onClick={this.onClickOpenReview}/>)  }
                    </div>
                </div>

                <Modal/>

            </Wrapper>
         );
    }
}
 
List.defaultProps = {  
    renderLoading: <div className="container">loading...</div>, 
    tryAgain: <div className="container">Restaurant was not found!, try again</div>, 
    restaurants: []
};

const mapStateToProps = state => ({
    restaurants: state.data.filteredRestaurants,
    name: state.data.name,
    isLoading: state.data.isLoading,
    selectedSortby: state.data.selectedSortby ? state.data.selectedSortby : false
});

export default connect(mapStateToProps, { 
    fetchRestaurants,
    toggleModal 
})(List);