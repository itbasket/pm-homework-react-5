import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import * as Yup from 'yup';
import { saveForm } from '../../store/ducks/experience/experience';
import selector from './FormStep3.selector';

import styles from './FormStep3.module.scss';

const FormStep3 = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { fields } = useSelector(selector);

  const backHandler = () => {
    history.push('/step2');
  }

  const initialValues = fields

  return (
    <div className={styles.FormStep1}>
      <h1>Work experience</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          places: Yup.array().of(
            Yup.object().shape({
              name: Yup.string()
                .min(3, 'Must be 3 characters or more')
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
              position: Yup.string()
                .min(3, 'Must be 3 characters or more')
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
              startDate: Yup.string()
                .transform((v) => (v === null ? '' : v))
                .required('Required'),
              finishDate: Yup.string()
                .transform((v) => (v === null ? '' : v))
                .required('Required')
            })
          )
        })}
        onSubmit={async (values) => {
          dispatch(saveForm(values))
          history.push('/cv');
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="places">
              {({ remove, push }) => (
                <div>
                  {values.places.length > 0 &&
                  values.places.map((item, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`places.${index}.name`}>Company name</label>
                        <Field
                          name={`places.${index}.name`}
                          placeholder=""
                          type="text"
                        />
                        <ErrorMessage
                          name={`places.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`places.${index}.position`}>Position</label>
                        <Field
                          name={`places.${index}.position`}
                          placeholder=""
                          type="text"
                        />
                        <ErrorMessage
                          name={`places.${index}.position`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`places.${index}.startDate`}>Start date</label>
                        <Field
                          name={`places.${index}.startDate`}
                          placeholder=""
                          type="date"
                        />
                        <ErrorMessage
                          name={`places.${index}.startDate`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`places.${index}.finishDate`}>Finish date</label>
                        <Field
                          name={`places.${index}.finishDate`}
                          placeholder=""
                          type="date"
                        />
                        <ErrorMessage
                          name={`places.${index}.finishDate`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => push({ name: '', position: '', startDate: '', finishDate: '' })}
                  >
                    Add
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
      <button onClick={backHandler}>Back</button>
    </div>
  );

}

export default FormStep3;