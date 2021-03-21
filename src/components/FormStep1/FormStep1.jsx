import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { saveForm } from '../../store/ducks/primary/primary';
import selector from './FormStep1.selector';

import styles from './FormStep1.module.scss';
import * as Yup from 'yup';

const FormStep1 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { fields } = useSelector(selector);

  const initialValues = fields

  return (
    <div className={styles.FormStep1}>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          position: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          phone: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .max(12, 'Must be 12 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        })}
        onSubmit={async (values) => {
          dispatch(saveForm(values))
          history.push('/step2');
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <div className="row">
                <div className="col">
                  <label htmlFor={`firstName`}>First name</label>
                  <Field
                    name={`firstName`}
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name={`firstName`}
                    component="div"
                    className="field-error"
                  />
                </div>
                <div className="col">
                  <label htmlFor={`lastName`}>Last name</label>
                  <Field
                    name={`lastName`}
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name={`lastName`}
                    component="div"
                    className="field-error"
                  />
                </div>
                <div className="col">
                  <label htmlFor={`position`}>Position</label>
                  <Field
                    name={`position`}
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name={`position`}
                    component="div"
                    className="field-error"
                  />
                </div>
                <div className="col">
                  <label htmlFor={`phone`}>Phone number</label>
                  <Field
                    name={`phone`}
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name={`phone`}
                    component="div"
                    className="field-error"
                  />
                </div>
                <div className="col">
                  <label htmlFor={`email`}>Email</label>
                  <Field
                    name={`email`}
                    placeholder=""
                    type="email"
                  />
                  <ErrorMessage
                    name={`email`}
                    component="div"
                    className="field-error"
                  />
                </div>
                <div className="col">
                </div>
              </div>
            </div>
            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    </div>
  );

}

export default FormStep1;