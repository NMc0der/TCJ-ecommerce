import Image1 from "../assets/speaker.png";
import Image2 from "../assets/gaming.png";
import Image3 from "../assets/vr.png";
import Button from "./Button";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* third col  */}
          <div
            className=" col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10 ">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
                  Consoles
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[320px] absolute bottom-0 -right-0"
            />
          </div>
          {/* first col */}

          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
                  VR
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div>
            </div>
            <img src={Image3} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90
          text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
                  Speakers
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[220px] absolute bottom-0 right-0 lg:top-[40px] h-[220px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
