import { useState } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {ButtonContainer, SignInContainer} from './sign-in-form.style';

import {
  signInWithEmailAndPasswordAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const initialFormValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { email, password } = formValues;

  const resetFormFields = () => {
    setFormValues(initialFormValues);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPasswordAuth(email, password);
      resetFormFields();
    } catch (err) {
      console.error(err);
      switch(err.code){
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log('Failed logging in', err);
      }
    }
  };

  const logInGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput label="email" name="email" type="email" value={email} onChange={onChangeHandler} required />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={onChangeHandler}
          required
        />
        <ButtonContainer>
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logInGoogleUser}>
            GOOGLE SIGN IN
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
