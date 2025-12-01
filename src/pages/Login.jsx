import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <section className="auth-card">
        <h1 className="auth-title">LOGIN</h1>

        <form className="auth-form">
          <label className="auth-label">
            Email
            <input
              type="email"
              name="email"
              placeholder="ejemplo@mail.com"
              className="auth-input"
            />
          </label>

          <label className="auth-label">
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="********"
              className="auth-input"
            />
          </label>

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