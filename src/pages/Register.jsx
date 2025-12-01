import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
        {/* Formulario de Registro */}
      <section className="auth-card">
        <h1 className="auth-title">REGISTRO</h1>

        <form className="auth-form">
          <label className="auth-label">
            Nombre completo
            <input
              type="text"
              name="fullName"
              placeholder="Pedro Pérez"
              className="auth-input"
            />
          </label>

          <label className="auth-label">
            Nombre de usuario
            <input
              type="text"
              name="username"
              placeholder="pedritoperez42"
              className="auth-input"
            />
          </label>

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
            Crear cuenta
          </button>
        </form>
        <nav className='mt-10 flex flex-col'>
                    <Link 
                        className='auth-link-button cursor-pointer'
                        to="/">¿Ya tienes una cuenta? Iniciar Sesion</Link>
                    <Link 
                        className='auth-link-button cursor-pointer'
                        to="/forgot-password">Olvide Contraseña</Link>
        </nav>
      </section>
    </>
  )
}

export default Register