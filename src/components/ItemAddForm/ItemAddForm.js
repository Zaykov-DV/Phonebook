import React, {Component} from 'react';

import './ItemAddForm.css'

export default class ItemAddForm extends Component {

    state = {
        surname: '',
        name: '',
        tel: '',
        isSurnameValid: true,
        isNameValid: true,
        isTelValid: true,
    }

    onSurnameChange = (e) => {
        this.setState({
            surname: e.target.value
        })

    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    onTelChange = (e) => {
        this.setState({
            tel: e.target.value
        })

    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.surname === '' || this.state.name === '' || this.state.tel === '') {
            alert(`Поле не может быть пустым `)
            if (this.state.surname === '') {
                this.setState({
                    isSurnameValid: false
                })
            }
            if (this.state.name === '') {
                this.setState({
                    isNameValid: false
                })
            }
            if (this.state.tel === '') {
                this.setState({
                    isTelValid: false
                })
            }
        } else {
            this.props.onItemAdded(this.state.surname, this.state.name, this.state.tel)
            e.target.reset()
            this.setState({
                surname: '',
                name: '',
                tel: '',
                isSurnameValid: true,
                isNameValid: true,
                isTelValid: true,
            })
        }
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} className='form-add' >
                <p>Добавить в справочник</p>

                <label htmlFor={this.state.surname} className='input-label'>
                <input type="text"
                       placeholder='Фамилия'
                       onChange={this.onSurnameChange}
                       value={this.state.surname}
                       className={this.state.isSurnameValid ? 'input-form' : 'input-form input-form-error' }
                />
                </label>

                <label htmlFor={this.state.name} className='input-label'>
                    <input type="text"
                           placeholder='Имя'
                           onChange={this.onNameChange}
                           value={this.state.name}
                           className={this.state.isNameValid ? 'input-form' : 'input-form input-form-error' }
                    />
                </label>

                <label htmlFor={this.state.tel} className='input-label'>
                    <input type="tel"
                           pattern='^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$'
                           placeholder='8-000-000-00-00'
                           onChange={this.onTelChange}
                           value={this.state.tel}
                           className={this.state.isTelValid ? 'input-form' : 'input-form input-form-error' }
                    />
                </label>


                <div className="add-button-container">
                    <button className='add-button'>Добавить</button>
                </div>

            </form>
        );
    }
}