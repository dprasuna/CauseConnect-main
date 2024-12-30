import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{
        height: "calc(100vh - 4rem)",
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740")',
        }}
      ></div>
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="relative z-10 max-w-3xl px-4 py-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6  text-blue-900 rounded-full p-3">
          Welcome to CauseConnect
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-blue-800">
          Connect with local NGOs and initiatives to make a positive impact in
          your community.
        </p>
        <Link to="/signup">
          <button className="bg-yellow-400 text-blue-900 font-bold text-lg sm:text-xl py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  )
}