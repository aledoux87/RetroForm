import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../redux/user';

function Listing() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const resetForm = () => {
    dispatch(resetUser());
    history.push('/login');
  };

  return (
    <div className="retro-form">
      <h2>Listing</h2>
      <ul>
        {Object.entries(user).map(([key, val], idx) => (
          <li key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ textDecoration: 'underline' }}>{key} :</span> {val}
          </li>
        ))}
      </ul>
      <button className="retro-button" onClick={resetForm}>
        RESET
      </button>
    </div>
  );
}

export default Listing;
