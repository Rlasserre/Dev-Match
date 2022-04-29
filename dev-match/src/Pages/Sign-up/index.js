import './styles.css';
import { Link } from 'react-router-dom';

function SignUp() {
	return (
		<div className='container__form'>
			<form className='form form__sign-up '>
				<div className='text__center mb__lg'>
					<h1>Cadastre-se</h1>
					<Link to="/sign-in">Entrar</Link>
				</div>
				<div className='body__sing-up'>
					<div>
						<div className='flex__column'>
							<label htmlFor='name'>Nome</label>
							<input
								id='name'
								type='text'
								placeholder='Digite seu nome'
							/>
						</div>
						<div className='flex__column'>
							<label htmlFor='zipCode'>CEP</label>
							<input
								id='zipCode'
								type='password'
								placeholder='Digite seu cep'
							/>
						</div>
						<div className='flex__column'>
							<label htmlFor='password'>Senha</label>
							<input
								id='password'
								type='password'
								placeholder='Digite sua senha'
							/>
						</div>
					</div>
					<div>
						<div className='flex__column'>
							<label htmlFor='email'>E-mail</label>
							<input
								id='email'
								type='text'
								placeholder='Digite seu e-mail'
							/>
						</div>
						<div className='flex__column'>
							<label htmlFor='city'>Cidade</label>
							<input
								id='city'
								type='text'
								placeholder='Digite sua cidade'
							/>
						</div>
						<div className='flex__column'>
							<label htmlFor='confirm-password'>Confirme sua senha</label>
							<input
								id='confirm-password'
								type='password'
								placeholder='Digite sua senha novamente'
							/>
						</div>
					</div>
				</div>
				<button className='btn__dark-blue'>Cadastre-se</button>
				<span className='light__label'>©2021 Todos os Direitos Reservados</span>
			</form>

		</div>
	);
}

export default SignUp;
