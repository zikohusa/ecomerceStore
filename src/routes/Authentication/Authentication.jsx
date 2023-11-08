import SignInForm from '../../components/authentication/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/authentication/sign-up-form/sign-up-form';

import "./Authentication.styles.scss"


const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;