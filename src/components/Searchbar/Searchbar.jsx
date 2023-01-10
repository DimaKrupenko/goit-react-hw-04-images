// import  React  from "react";
import { Formik, Form, Field } from "formik";
import styles from './Searchbar.module.css'
import PropTypes from 'prop-types';


export const Searchbar = ({ onSubmit, value, onChange }) => {
  
  const handleSubmit = (values, actions) => {
    onSubmit(values).then(() => actions.setSubmitting(false))
    actions.resetForm();

  }
  return <div className={styles.Searchbar}><Formik
    
    initialValues={{ imagesSearch: '' }}
    onSubmit={handleSubmit}
  >
    {props => {
      return (
         <Form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton} disabled={props.isSubmitting}>
       <span className={styles.SearchFormButtonLabel}>Search</span>
     </button>
      <Field
        name='imagesSearch'
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={onChange} 

      >
      </Field>
  </Form>
      )
   }}
</Formik></div>
};

Searchbar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};