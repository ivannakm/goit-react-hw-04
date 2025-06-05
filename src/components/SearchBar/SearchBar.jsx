import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return toast.error("Please enter a search term!");
    }

    onSubmit(value);
    setValue(""); // очищення поля
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={handleChange}
          />
          <FiSearch className={css.icon} size="16px" />
        </div>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
