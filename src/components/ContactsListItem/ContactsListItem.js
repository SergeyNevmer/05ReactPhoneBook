import React from "react";
import PropTypes from "prop-types";
import css from "./ContactsListItem.module.css";

const ContactsListItem = ({ name, number, deleteContact, id }) => (
  <li className={css.container}>
    <div className={css.containerForInfo}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button className={css.btn} onClick={() => deleteContact(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={css.btnClose}
          width="40"
          height="40"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
        </svg>
      </button>
    </div>
  </li>
);

ContactsListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
  id: PropTypes.string,
};

export default ContactsListItem;
