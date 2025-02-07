import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const searchInputID = useId();
  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);

  const handleFilter = (event) => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <label className={css.searchLabel} htmlFor={searchInputID}>
        Find contacts by name or numbers
      </label>
      <input
        className={css.searchInput}
        id={searchInputID}
        type="text"
        name="searchInput"
        placeholder="Enter contact name or numbers"
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
