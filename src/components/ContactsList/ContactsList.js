import React from "react";
import ContactsListItem from "../ContactsListItem/ContactsListItem";
import PropTypes from "prop-types";
import css from "./ContactsList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import popTransition from "../transitions/pop.module.css";

const ContactsList = ({ arrСontacts, deleteContact }) => (
  <TransitionGroup className={css.container} component="ul">
    {arrСontacts.map((item) => (
      <CSSTransition
        key={item.id}
        timeout={200}
        unmountOnExit
        classNames={popTransition}
      >
        <ContactsListItem
          name={item.name}
          number={item.number}
          deleteContact={deleteContact}
          id={item.id}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactsList.propTypes = {
  arrСontacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactsList;
