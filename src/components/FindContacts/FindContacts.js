import React from "react";
import css from "./FindContacts.module.css";
import PropTypes from "prop-types";

const FindContacts = ({ value, onChange }) => (
  <div className={css.container}>
    <label className={css.containerForInfo}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

FindContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FindContacts;
