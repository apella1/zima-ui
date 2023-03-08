export default function Signup() {
  return (
    <div className="flex flex-col p-8">
      <h2>Sign Up</h2>
      <form action="" method="post" className="flex flex-col space-y-1">
        <label htmlFor="username">Username:</label>

        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" className="px-4 py-2 rounded-sm" />
        <label htmlFor="username">Confirm Email:</label>
        <input id="email" type="email" className="px-4 py-2 rounded-sm" />

        <label htmlFor="pass1">Password:</label>
        <input id="pass1" type="password" className="px-4 py-2 rounded-sm" />
        <label htmlFor="pass2">Confirm Password:</label>
        <input id="pass2" type="password" className="px-4 py-2 rounded-sm" />

        <input
          type="submit"
          value="Sign Up"
          className="px-4 py-2 bg-black rounded-md"
        />
      </form>
      <div>
        <p>Already have an account?</p>
        <a href="/login" className="hover:underline">
          Login
        </a>
      </div>
    </div>
  );
}
