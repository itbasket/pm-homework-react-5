import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './CV.module.scss';

const CV = () => {
  const history = useHistory();
  const { primary, education, experience } = useSelector((state) => state);

  const backHandler = () => {
    history.push('/step3');
  }

  return (
    <div className={styles.CV}>
      <h1>{primary.firstName} {primary.lastName}</h1>
      <h3>{primary.position}</h3>
      <div className={styles.contacts}>
        <p>{primary.phone}</p>
        <p>{primary.email}</p>
      </div>
      <div className={styles.education}>
        <h3>Education</h3>
        {education.places.map(item => {
          return <div key={performance.now()}>
            <h4>{item.name}</h4>
            <p>{item.specialty}</p>
            <p>{item.startDate} - {item.finishDate}</p>
          </div>
        })}
      </div>
      <div className={styles.experience}>
        <h3>Work experience</h3>
        {experience.places.map(item => {
          return <div key={performance.now()}>
            <h4>{item.name}</h4>
            <p>{item.position}</p>
            <p>{item.startDate} - {item.finishDate}</p>
          </div>
        })}
      </div>
      <button onClick={backHandler}>Back</button>
    </div>
  );

}

export default CV;