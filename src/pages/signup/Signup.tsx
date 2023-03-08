export default function Signup() {
  return (
    <div className="flex flex-col h-screen p-8 bg-blue-300 space-y-4">
      <h2 className="self-center text-4xl">Sign Up</h2>
      <form
        action=""
        method="post"
        className="flex flex-col self-center w-3/6 space-y-2"
      >
        <label htmlFor="username">Username:</label>
        <input type="text" className="px-4 py-2 rounded-sm" id="username" />
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
          className="px-4 py-2 text-white bg-black rounded-md"
        />
      </form>
      <div className="flex self-center space-x-2">
        <p>Already have an account?</p>
        <a href="/login" className="hover:underline">
          Login
        </a>
      </div>
    </div>
  );
}
