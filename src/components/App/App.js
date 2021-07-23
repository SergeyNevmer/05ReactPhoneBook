import React from "react";
import css from "./App.module.css";
import NameAndNumberForm from "../NameAndNumberForm/NameAndNumberForm";
import ContactFound from "../ContactFound/ContactFound";
import { nanoid } from "nanoid";
import { CSSTransition } from "react-transition-group";
import fadeTransition from "../transitions/fade.module.css";
import ContactsList from "../ContactsList/ContactsList";
import FindContacts from "../FindContacts/FindContacts";

function filterContacts(contacts, filter) {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}

export default class App extends React.Component {
  state = {
    name: "",
    number: "",
    contacts: [],
    isOpen: false,
    filter: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    if (contacts.find((contact) => contact.name === name)) {
      this.setState({ isOpen: true });
      setTimeout(() => {
        this.setState({ isOpen: false });
      }, 1000);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));

    this.reset();
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, isOpen, contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <CSSTransition
          in={isOpen}
          timeout={1000}
          unmountOnExit
          classNames={fadeTransition}
        >
          <ContactFound />
        </CSSTransition>
        <NameAndNumberForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {contacts.length >= 2 && (
          <FindContacts value={filter} onChange={this.handleFilter} />
        )}
        {contacts.length > 0 && (
          <ContactsList
            arrСontacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
