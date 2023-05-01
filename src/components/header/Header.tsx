export {};

export default function Header() {
  return (
    <header className="relative flex flex-col p-4 h-4/5 pt-10 pb-6 md:mb-40 md:m-4 md:mt-20 md:mt-10 " id="home">
  <div className="relative z-10 flex flex-col justify-start items-start h-full text-left text-white">
    <h2 className="md:text-7xl text-4xl mb-4">Find support and guidance </h2>
    <p className="md:text-3xl text-2xl mb-4">from a community of people who understand</p>
    <p className="md:text-3xl text-2xl mb-8">through a simple chat</p>
    <a href="/signup" className="py-4 px-8 bg-green-500 hover:bg-green-600 rounded-lg text-white text-xl font-bold">Chat Now</a>
  </div>
</header>

  );
}






