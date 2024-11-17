const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-12 sm:px-32 h-20 shadow-lg">
      <a className="uppercase text-3xl font-bold" href="#">
        Volikin.uz<span className="text-red-500">.</span>
      </a>
      <div>
        <i className='bx bx-menu text-4xl block sm:hidden'></i>
      </div>
      <div className="hidden sm:flex gap-5 text-xxl font-semibold uppercase">
        <a className="hover:text-red-600" href="#home">Home</a>
        <a className="hover:text-red-600" href="#classes">Classes</a>
        <a className="hover:text-red-600" href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Topbar;
