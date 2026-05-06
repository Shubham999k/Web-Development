export const App = () => {
  return (
    <div>
      <div className="bgImg">
        <img src="foodTable.webp" alt="bg" />
      </div>
      <div className="overlayContent">
        <h1>Welcome Back</h1>
        <p>Login to your Cravings account</p>
        <div className="email"><label htmlFor="email">Email</label>
          <input className="inputs" type="text" placeholder="Enter your email" />
        </div>
        <div className="email"><label htmlFor="email">Password</label>
          <input className="inputs" type="text" placeholder="Enter your password" />
        </div>
        <div className="remember">
          <div><input className="checkbox1" type="checkbox" /> <span>Remember me</span></div>
          <div><a className="a1" href="">Forgot Password?</a></div>
        </div>
        <a className="login" href="">Login</a>
        <div className="account"><hr /><div>Don't have an account?</div><hr /></div>
        <a className="createAccount" href="">Create an account</a>
      </div>
    </div>
  )
}


