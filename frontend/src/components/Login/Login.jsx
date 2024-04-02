import { Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/login';
import { useAlert } from 'react-alert';
import { loginActions } from '../../reducers/login';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShow, setIsPassword] = useState(false);

  const dispatch = useDispatch();
  const alert = useAlert();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const { loading, message, error } = useSelector((state) => state.login);

  const showPassword = (e) => {
    e.preventDefault();
    setIsPassword((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(loginActions.onClearError());
    }
    if (message) {
      alert.success(message);
      dispatch(loginActions.onClearMessage());
    }
  }, [alert, error, message, dispatch]);
  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: '1vmax' }}>N</p>
            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="loginFormInput"
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <input
                type={isPasswordShow ? 'text' : 'password'}
                placeholder="Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginFormInput"
                style={{ flex: '1' }}
              />
              <Button
                type="button"
                onClick={showPassword}
                style={{
                  position: 'absolute',
                  backgroundColor: 'transparent',
                  paddingRight: '1vmax',
                }}
              >
                {isPasswordShow ? (
                  <VisibilityIcon style={{ color: 'inherit' }} />
                ) : (
                  <VisibilityOffIcon style={{ color: 'inherit' }} />
                )}
              </Button>
            </div>
            <Button type="submit" variant="contained" disabled={loading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
