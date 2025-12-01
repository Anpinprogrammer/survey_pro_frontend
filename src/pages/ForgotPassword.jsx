import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <>
        <section className="auth-card">
        <h1 className="auth-title">Recupera tu Cuenta</h1>

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

          <button type="submit" className="auth-button">
            Recuperar Cuenta
          </button>
        </form>

        <nav className='mt-10 flex flex-col'>
                    <Link 
                        className='auth-link-button'
                        to="/register">¿No tienes una cuenta? Registrate</Link>
                    <Link 
                        className='auth-link-button'
                        to="/">¿Ya tienes una cuenta? Iniciar Sesion</Link>
                </nav>
      </section>
    </>
  )
}

export default ForgotPassword