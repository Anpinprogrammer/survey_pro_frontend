import "./LoginRegisterPage.css";

export default function LoginRegisterPage() {
  return (
    <div className="auth-page">
      {/* Formulario de Login */}
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

          <button type="button" className="auth-link-button">
            ¿Olvidaste contraseña?
          </button>
        </form>
      </section>

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
      </section>
    </div>
  );
}
