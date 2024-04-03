import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactUser } from '../../actions/updateUser.js';
import { updateUserAction } from '../../reducers/updateUser';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import './Contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const alert = useAlert();
  const {
    loading,
    message: alertMessage,
    error,
  } = useSelector((state) => state.update);
  const contactFormHandler = (event) => {
    event.preventDefault();
    dispatch(ContactUser(name, email, message));
  };

  useEffect(() => {
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch(updateUserAction.onClearMessage());
    }
    if (error) {
      alert.error(error);
      dispatch(updateUserAction.onClearError());
    }
  }, [alert, alertMessage, error, dispatch]);
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? 'Please Wait While Send...' : 'Send'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
