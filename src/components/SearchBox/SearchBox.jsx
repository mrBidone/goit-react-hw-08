import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchInputID = useId();
  const dispatch = useDispatch();

  const filterValue = useSelector((state) => state.filter.name || "");

  const handleFilter = (event) => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <>
      <label className={css.searchLabel} htmlFor={searchInputID}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        id={searchInputID}
        type="text"
        name="searchInput"
        placeholder="Enter contact name"
        value={filterValue}
        onChange={handleFilter}
      />
    </>
  );
};

export default SearchBox;
