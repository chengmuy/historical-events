import React from "react";
import { Formik } from "formik";

const Search = ({ handleSearch = searchTerm => console.log(searchTerm) }) => {
  return (
    <div>
      <Formik initialValues={{ searchTerm: "" }}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchTerm"
              onChange={e => {
                handleChange(e);
                handleSearch(e.target.value);
              }}
              value={values.searchTerm}
              onBlur={handleBlur}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Search;
