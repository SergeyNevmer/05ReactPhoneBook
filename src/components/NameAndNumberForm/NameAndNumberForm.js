import React from "react";
import css from "./NameAndNumberForm.module.css";
import PropTypes from "prop-types";

const NameAndNumberForm = ({ name, number, onChange, onSubmit }) => (
  <form className={css.container} onSubmit={onSubmit}>
    <div className={css.containerForInput}>
      <label className={css.input}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={onChange}
        />
      </label>
      <label className={css.input}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={onChange}
        />
      </label>
    </div>
    <button type="submit" className={css.btn}>
      Add contact
    </button>
  </form>
);

NameAndNumberForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NameAndNumberForm;
