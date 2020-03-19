import React, { useEffect } from "react";
import { Formik } from "formik";

const Search = ({ updateEvents, initialTerm }) => {
  useEffect(() => {
    updateEvents(initialTerm);
  }, []);

  return (
    <div>
      <Formik initialValues={{ searchTerm: initialTerm }}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchTerm"
              onChange={e => {
                handleChange(e);
                updateEvents(e.target.value);
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
