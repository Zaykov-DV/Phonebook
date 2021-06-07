import React, {Component} from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ItemAddForm from "./components/ItemAddForm/ItemAddForm";
import PhoneList from "./components/PhoneList/PhoneList";

import './App.css'

export default class App extends Component {
    maxId = 100

    state = {
        phoneBook: [
            this.createPhonebookItem('Иванов', 'Иван', '89995553322'),
            this.createPhonebookItem('Петров', 'Петр', '89994447733'),
            this.createPhonebookItem('Волков', 'Илья', '89991114477'),
        ],
        term: '',
        filterPhoneBook: []
    }

    createPhonebookItem(surname, name, tel) {
        return {
            surname,
            name,
            tel,
            id: this.maxId++
        }
    }

    removeItem = itemId => {
        this.setState(({phoneBook}) => {
            return {
                phoneBook: phoneBook.filter(item => item.id !== itemId )
            }
        })
    }


    addItem = (...text) => {
        const newItem = this.createPhonebookItem(...text)

        if (
            (this.state.phoneBook.find((item) => item.name === newItem.name)) &&
            (this.state.phoneBook.find((item) => item.tel === newItem.tel))
        ) {
            alert('Такое имя и телефон уже есть')
        } else {
            this.setState(({phoneBook}) => {
                return {
                    phoneBook: [...phoneBook, newItem]
                }
            })
        }
    }


    onSearchChange = (term) => {
        this.setState({term})
    }

    search(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filterPhoneBook(items) {
        return items.filter((item) => item.name)
    }

    onFilterChange = (filterPhoneBook) => {
        this.setState({filterPhoneBook})
    }

  render() {
      const {phoneBook, term, filterPhoneBook} = this.state

      const visibleItems = this.filterPhoneBook(
          this.search(phoneBook, term), filterPhoneBook )

      return (
          <div className="App">

              <AppHeader/>

              <ItemAddForm
                  onItemAdded={this.addItem}
              />

              <SearchPanel
                  onSearchChange={this.onSearchChange}
              />

              <PhoneList phoneBook={visibleItems}
                         onRemoveItem={this.removeItem}
              />
              <hr/>


          </div>
    );
  }
}
