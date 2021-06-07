import React, {Fragment} from 'react';
import PhoneListItem from "../PhoneListItem/PhoneListItem";

import './PhoneList.css'

const PhoneList = ({phoneBook, onRemoveItem}) => {

    const elements = phoneBook.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className='phone-item'>
                <PhoneListItem {...itemProps}
                                onRemoveItem={() => onRemoveItem(id)}
                />
            </li>
        )
    })

    return (
        <Fragment>
            <p>Справочник: </p>
            { phoneBook.length === 0 ? <h5> Имя не найдено! </h5> : null  }
            <ul className='phones-list'>
                {elements}
            </ul>
        </Fragment>
    );
};

export default PhoneList;