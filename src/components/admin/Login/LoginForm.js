import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledFormLogin, StyledFormGroup, ButtonsLogin } from './StyledLogin';
import googleLogo from '../../../assets/images/googleLogo.png';
import { USER } from '../../../constants/validation';
import { getJwt } from '../../../utils/jwt';
import { postLoginUser, logOut } from '../../../redux/actions/userAction';

function LoginForm() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const { EMAIL, PASSWORD } = USER;

  const onSubmit = async (data) => {
    if (getJwt()) {
      dispatch(logOut());
    }
    try {
      await dispatch(postLoginUser(data));
      navigate('/admin/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <StyledFormGroup>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="form-control form-control-solid"
          type="email"
          name="email"
          ref={register({ ...EMAIL })}
          autoComplete="off"
        />
        {/* {errors.email && errors.email.type === "required" && (
          <p className="errorMsg">Email is required.</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="errorMsg">Email is not valid.</p>
        )} */}
      </StyledFormGroup>
      <StyledFormGroup>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="form-control form-control-solid"
          name="password"
          type="password"
          ref={register({ ...PASSWORD })}
          autoComplete="off"
        />
        <a id="forgot-password">Forgot Password ?</a>
      </StyledFormGroup>
      <ButtonsLogin>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        <button id="sign-in-gg" className="btn btn-light-primary">
          <img className="logo" src={googleLogo} />
          Sign in with Google
        </button>
      </ButtonsLogin>
    </StyledFormLogin>
  );
}

export default LoginForm;
