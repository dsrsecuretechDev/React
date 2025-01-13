
function Home() {

  return (
    <>
      <div className="max-h-screen">


<header className=" text-black h-svh  text-center">
    <h1 className="text-3xl font-bold ">Welcome to Website</h1>

  <main className=" mx-auto ">
    <nav className="flex justify-end mb-4 ">
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2">Home</button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2">Login</button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2">Regi</button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2">About</button>
    </nav>
    <img src="src\Studentweb.jpg" className="h-screen w-screen bg-cover bg-center bg-no-repeat" />
  </main>
  </header>
  {/* <footer className="bg-blue-500 text-white  text-center">
    <p>Our Website</p>
  </footer> */}
  </div>
 
    </>
  );
}

export default Home;

