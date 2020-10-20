import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.Submitting(this.state.term);
    };
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <input
                        type="text"
                        placeholder="Search here.."
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;
