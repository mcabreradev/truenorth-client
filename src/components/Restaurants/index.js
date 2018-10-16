import React, { Component } from 'react';
import { Restaurant, Loading, Modal } from '../../components';
import FilterContainer from '../../containers/FiltersContainer';
import './styles.css';

import styled from 'styled-components';

const Container = styled.div`
  top: 40px;
  position: relative;
`;
class Restaurants extends Component {

    constructor(props) {
        super(props);
        this.onClickHandlerOpenReview = this.onClickHandlerOpenReview.bind(this);
    }

    componentWillMount() {
       this.props.fetchRestaurants();
    }

    onClickHandlerOpenReview(resto_id){
        this.props.toggleModal(true, resto_id);
    }

    render() { 
        const { restaurants , isLoading, name, selectedSortby, tryAgain, renderLoading } = this.props;

        return ( 
            <Container className="container">
                <Loading isActive={isLoading} />
                <FilterContainer />
                <div className="columns is-multiline">
                    <div className="column is-12-desktop is-12-tablet">
                        { 
                            restaurants.length ? 
                            restaurants.map( resto => <Restaurant {...resto} key={resto._id} onClick={this.onClickHandlerOpenReview}/>) : 
                            (name.length || selectedSortby.length) ? tryAgain : renderLoading 
                        }
                    </div>
                </div>
                <Modal {...this.props}/>
            </Container>
         );
    }
}
 
Restaurants.defaultProps = {  
    renderLoading: <div className="container">loading...</div>, 
    tryAgain: <div className="container">Restaurant was not found!, try again</div>, 
};

export default Restaurants;