export {};

export default function Login() {
  return (
    <div className="flex flex-col h-screen p-8 bg-blue-300">
      <h2 className="self-center mb-8 text-4xl">Login</h2>
      <form
        action=""
        method="post"
        className="flex flex-col self-center w-3/6 space-y-4"
      >
        <input
          type="text"
          placeholder="Username"
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
          className="px-4 py-2 text-white bg-black rounded-md"
        />
      </form>
      <a href="forgot" className="self-center">
        Forgot password?
      </a>
      <div className="flex self-center p-4 m-4 space-x-2">
        <p>Don't have an accont yet?</p>
        <a href="/signup" className="hover:underline">
          Sign Up
        </a>
      </div>
      <a
        href="/"
        className="self-center px-4 py-2 text-white bg-black rounded-md"
      >
        Back Home
      </a>
    </div>
  );
}
