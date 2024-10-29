import image from "/src/assets/hamriya-high-resolution-logo-transparent.png";

function Navbar() {
  return (
    <div className="bg-purple-500 flex justify-between">
      <img src={image} alt="" className="w-[200px] p-7" />
      <div className="space-x-4 pt-[34px] pr-5">
        <a href="#">help</a>
        <a href="#">contact</a>
        <a href="#">signin/signup</a>
      </div>
    </div>
  );
}

export default Navbar;
