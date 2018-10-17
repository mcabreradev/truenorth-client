import React, { Component } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress
  } from 'react-places-autocomplete';

class CustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = { address: '' };
    }

    onChange(e) {
        console.log(e.target.name, e.target.value);
        this.props.setOrderDetails({[e.target.name]: e.target.value});
    }

    handleChange = address => {
        this.setState({ address })
    };
    
    handleSelect = address => {
        this.setState({ address });

        geocodeByAddress(address)
            .then(results => this.props.setOrderDetails({address: results[0].formatted_address}))
            .catch(error => console.error('Error', error));
    };

    render() { 


        return  true ? (
            <div className="content is-small">
                <h2>Customer details</h2>
                <p>Please enter the customer details</p>

                <form className="column is-7" autoComplete="off">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Name" name="name" onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Last Name" name="lastname" onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Phone Number</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Phone Number" name="phone" onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Address</label>
                        
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div className="control">
                                <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'input location-search-input',
                                })}
                                />
                                <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            )}
                        </PlacesAutocomplete>

                    </div>
                </form>
            </div>
        ) : (
            <div>
                Enviado
            </div>
        )
    }

}

export default CustomerDetails;
