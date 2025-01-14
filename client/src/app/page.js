"use clients";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('/veg.jpg')", // Replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to CloudKitchen
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            Delicious food delivered to your doorstep.
          </p>
          <div className="mt-6 space-x-4">
            <Link href="/login">
              <button className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-600">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
