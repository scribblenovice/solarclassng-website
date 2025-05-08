import { Link } from "react-router-dom";

const GalleryCTA = () => {
  const images = [
    "/images/project-gallery/project1.jpg",
    "/images/project-gallery/project2.jpg",
    "/images/project-gallery/project3.jpg",
    "/images/project-gallery/project4.jpg",
  ];

  return (
    <section className="bg-black bg-opacity-90 text-white py-16 px-6 md:px-12 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-extrabold anta whitespace-nowrap">Discover Our Work</h2>
          <p className="text-white/90 text-base mx-auto siliguri">
            Take a look at some of our completed projects and see why our
            clients trust us to deliver top-quality results.
          </p>
          <Link
            to="/gallery"
            className="inline-block p-2 w-fit bg-white border-2 hover:bg-solar-blue hover:text-white transition-all ease-linear duration-300 border-solar-blue text-center text-lg text-solar-blue font-semibold rounded-md cursor-pointer"
          >
            Visit Gallery
          </Link>
        </div>

        {/* Image Collage */}
        <div className="grid place-items-center opacity-50">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 mx-auto mb-12 w-fit">
              {images.map((el, index) => (
                <div key={index} className="overflow-hidden rounded-xl">
                  <img
                    src={el}
                    alt={`Project ${index + 1}`}
                    className="object-cover h-20 w-20"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
