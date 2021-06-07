import React, {Component} from 'react';

import './SeachPanel.css'

export default class SearchPanel extends Component {
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render () {
        return (
            <div className='search-panel'>
                <p>Поиск: </p>
                <input type="text"
                       placeholder="Поиск по имени..."
                       value={this.state.term}
                       onChange={this.onSearchChange}
                />
            </div>
        );
    }
};

