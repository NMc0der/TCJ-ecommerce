import Image1 from "../assets/earphone.png";
import Image2 from "../assets/smartwatch2-removebg-preview.png";
import Image3 from "../assets/macbook.png";
import Button from "./Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}

          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphones
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/90
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
                  Watches
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandYellow"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[220px] absolute -right-1 lg:top-[40px] h-[220px] "
            />
          </div>
          {/* third col  */}
          <div
            className=" col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/90
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10 ">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Laptops
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[320px] absolute bottom-0 -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
