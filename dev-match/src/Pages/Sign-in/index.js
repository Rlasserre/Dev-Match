import './styles.css';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className='container__form'>
      <form className='form form__sign-in '>
        <div className='text__center mb__lg'>
          <h1>Entrar</h1>
          <Link to="/sign-up">Cadastre-se</Link>
        </div>
        <div>
          <div className='flex__column'>
            <label htmlFor='email'>E-mail</label>
            <input id='email' type='text' placeholder='Digite seu e-mail' />
          </div>
          <div className='flex__column'>
            <label htmlFor='password'>Senha</label>
            <input id='password' type='password' placeholder='Digite sua senha' />
          </div>
          <button className='btn__dark-blue'>Entrar</button>
          <div>
            <input type='checkbox' value='lembrar-me' name='remember' />
            <span htmlFor='remember'>Lembrar-me</span>
          </div>
        </div>
        <Link to='/recovery-password' className='my-lg'>Esqueceu sua senha?</Link>
        <span className='ligth__label'>©2021 Todos os Direitos Reservados</span>
      </form>

    </div>
  );
}

export default SignIn;
