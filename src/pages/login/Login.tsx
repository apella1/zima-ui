export default function Login() {
  return (
    <div className="flex flex-col p-8">
      <h2>Login</h2>
      <form action="" method="post">
        <input
          type="text"
          placeholder="Email Address"
          className="px-4 py-2 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-sm"
        />
        <input
          type="submit"
          value="Login"
          className="px-4 py-2 bg-black rounded-md"
        />
      </form>
      <a href="forgot">Forgot password?</a>
      <div>
        <p>Don't have an accont yet?</p>
        <a href="/signup" className="hover:underline">
          Sign Up
        </a>
      </div>
    </div>
  );
}
