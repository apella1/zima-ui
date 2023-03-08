export default function Navbar() {
  const Menu = () => (
    <>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="/therapist">Therapist</a>
      <a href="/conditions">Conditions</a>
      <a href="/groups">Groups</a>
      <a href="/login">Login</a>
      <a href="/login">Sign Up</a>
      <a href="#faq">FAQ</a>
    </>
  );
  return (
    <nav className="flex items-center justify-between">
      <p className="text-xl">zima</p>
      <div className="flex items-center justify-center space-x-4">
        <Menu />
      </div>
    </nav>
  );
}
