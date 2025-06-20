import Button from "../utils/Button";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <div className="bg-radial-[at_50%_75%] from-[#bc9a71] via-[#3b270c] to-[#211b14] to-90% min-h-64 max-sm:min-h-80 bg-blend-lighten md:bg-blend-darken">
      <TopNavbar className="h-10" />

      <div className="flex flex-col justify-between w-[80%] max-sm:w-[100%] max-md:py-6 pt-14 justify-self-center  ">
        <div className="flex flex-col gap-2 w-full items-center text-xs min-h-48 ">
          <h1 className="text-white text-3xl lg:text-4xl max-sm:text-xl ">
            Find Your Dream Car
          </h1>

            <div className="flex px-3 w-full min-xl:w-[80%] max-md:flex-col max-sm:w-[full]">
              <input
                className="flex-1 max-sm:w-full bg-white h-10 outline-0 text-black border max-sm:border-r min-md:rounded-l-lg max-md:rounded-tl-lg md:rounded-none px-3 py-3"
                placeholder="Car Make, Model, Milage"
                type="text"
              />
              <input
                className="flex-1 bg-white outline-0 text-black h-10 border px-3 py-2 "
                placeholder="Location"
                type="text"
              />
              <input
                className="flex-1 bg-white outline-0 text-black h-10 border px-3 py-2"
                placeholder="Showroom name"
                type="text"
              />
              <input
                className="flex-1 bg-white outline-0 text-black h-10 border px-3 py-2"
                placeholder="Car price"
                type="number"
              />
              <Button
                className="flex-1 p-3 flex justify-center overflow-none h-10 xs:px-4 max-md:px-7 items-center min-lg:rounded-r-lg  max-md:rounded-br-lg  text-white"
                name="Find"
              />
            </div>
          </div>
        </div>
    </div>

  );
};

export default Navbar;
