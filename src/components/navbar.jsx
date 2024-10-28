import image from "/src/assets/hamriya-high-resolution-logo-transparent.png";

function Navbar() {
  return (
    <div className="bg-purple-500">
      <img src={image} alt="" className="w-[200px] p-7" />
      <a href="#">need help?</a>
      <a href="#">login</a>
    </div>
  );
}

export default Navbar;
