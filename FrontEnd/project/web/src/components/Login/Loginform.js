export default function Loginform({
  handleSubmit,
  errormessage,
  setUserName,
  setPassword,
  setLogindisplay,
}) {
  return (
    <div id="main">
      <h2>Log in to Your UChicago Account</h2>
      <form onSubmit={handleSubmit}>
        <div id="alert" aria-atomic="true" role="alert"></div>
        <div class="input-wrapper">
          <input
            id="username"
            name="username"
            type="text"
            class="form-control"
            autocapitalize="off"
            spellcheck="false"
            placeholder="Username"
            autofocus=""
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div class="input-wrapper">
          <input
            id="password"
            name="password"
            type="password"
            class="form-control"
            autocapitalize="off"
            spellcheck="false"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="errormessage">{errormessage}</div>
        <div class="submit-buttons">
          <button
            type="submit"
            id="forgot"
            name="forgot"
            class="forgot"
            onClick={() => setLogindisplay("forgot")}
          >
            Forgot your password?
          </button>
          <button
            type="submit"
            id="signup"
            name="signup"
            class="signup"
            onClick={() => setLogindisplay("newuser")}
          >
            New User
          </button>
          <button type="submit" id="submit" name="submit" class="submit">
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
}
