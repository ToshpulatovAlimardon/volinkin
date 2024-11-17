const Header = () => {
  return (
    <div>
      <div className="bg-[url('/header.jpg')] bg-cover bg-top h-screen">
        <div className="flex justify-center items-center h-screen flex-col text-white">
          <div className="text-center p-6 sm:p-10 bg-black/50 rounded-lg backdrop-blur-lg">
            <h1 className="text-4xl sm:text-6xl uppercase font-bold mb-4">volinkin</h1>
            <p className="text-xxl sm:text-xl mb-6 sm:mb-8">
              Volinkin.uz platformasiga xush kelibsiz
            </p>
            <button className="border-2 px-6 py-2 rounded-md text-xxl uppercase font-bold duration-300 hover:bg-white hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
