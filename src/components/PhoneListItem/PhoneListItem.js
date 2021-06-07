import React, {Component} from 'react';

import './PhoneListItem.css'

class PhoneListItem extends Component {
    render() {
        const { surname, name, tel, onRemoveItem} = this.props

        return (
            <div className='phone-items'>
                <div className="phone-name">
                    <p>{surname}</p>
                    <p>{name}</p>
                </div>
                <p>Телефон: {tel}</p>
                <button
                    onClick={onRemoveItem}
                    className='remove-button'
                >
                    Удалить
                </button>
            </div>
        );
    }
}

export default PhoneListItem;