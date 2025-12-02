import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if([email, password].includes("")) {
          setAlert('Todos los campos son obligatorios')
          return
        }
        setAlert("")
        navigate('/auth')
    }

  return (
    <>
        <section className="auth-card">
        <h1 className="auth-title">LOGIN</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            Email
            <input
              type="email"
              name="email"
              placeholder="ejemplo@mail.com"
              className="auth-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label className="auth-label">
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="********"
              className="auth-input"
              value={password}
              onChange={ e => setPassword(e.target.value)}
            />
          </label>

          { alert &&
            <p className='text-red-600'>{alert}</p>
          }

          <button type="submit" className="auth-button">
            Entrar
          </button>
        </form>

        <nav className='mt-10 flex flex-col'>
                    <Link 
                        className='auth-link-button cursor-pointer'
                        to="/register">¿No tienes una cuenta? Registrate</Link>
                    <Link 
                        className='auth-link-button cursor-pointer'
                        to="/forgot-password">Olvide Contraseña</Link>
        </nav>
      </section>
    </>
  )
}

export default Login