import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";
import { accessControl } from "../resources";

export const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {accessControl.map((partner) => (
          <div key={partner.id} className="p-2 h-40 flex items-center">
            <img
              src={partner.src}
              alt={`Partner ${partner.id}`}
              className="w-full h-full object-contain focus:outline-none focus:border-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
// const Gallery = () => {
//   return (
//     <section className="w-[90%] mx-auto mt-16 lg:mt-24">
//       <Fade bottom>
//         <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl self-start tts pb-2">
//           Our
//           <span className="text-tech-blue relative tts">
//             <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
//             Partners
//           </span>
//         </h2>
//       </Fade>
//       <Fade bottom>
//         <PartnersCarousel />
//       </Fade>
//     </section>
//   );
// };

// export default Gallery;
