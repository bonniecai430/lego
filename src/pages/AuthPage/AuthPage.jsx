import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.css'


export default function AuthPage({ setUser }) {
    return (
        <main className='Auth'>
            <h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
                 width="60"
                 height="60"
                 className="d-inline-block align-top"
                 alt="React Bootstrap logo"
                />
                &nbsp;&nbsp;
               Account
            </h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    )
}