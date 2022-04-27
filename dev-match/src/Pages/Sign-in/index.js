import './styles.css';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className='container__form'>
      <form className='form__sign-in'>
        <div className='text-center mb-lg'>
          <h1>Entrar</h1>
          <Link to="/sign-up">Cadastre-se</Link>
        </div>
        <div>
          <div>
            <label>E-mail</label>
            <input id='email' type='text' placeholder='Digite seu e-mail' />
          </div>
          <div>
            <label>Senha</label>
            <input id='password' type='text' placeholder='Digite sua senha' />
          </div>
          <button className='btn__dark-blue'></button>
        </div>
      </form>

    </div>
  );
}

export default SignIn;
