import React from "react";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className=" body-font">
        <div className="container px-5 my-20 mx-auto flex flex-wrap">
          <div className="flex w-full mb-8 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4">
              Where Fitness Meets Fun and Results Are Achieved
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Include an inspiring image or video that showcases your gym's
              energetic atmosphere, trainers, or members working out.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4">
            <div className=" col-span-1 row-span-1">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
              />
            </div>
            <div className=" col-span-1 row-span-1">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg"
              />
            </div>

            <div className=" col-span-2 row-span-2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://wallpaperaccess.com/full/1087621.jpg"
              />
            </div>
            <div className=" col-span-2 row-span-2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
              />
            </div>
            <div className=" col-span-1 row-span-1">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://wallpapercave.com/wp/wp6331008.jpg"
              />
            </div>
            <div className=" col-span-1 row-span-1">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
