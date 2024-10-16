export default function KeynoteSpeakers() {
  return (
    <div className="container">
      <h2 className="text-3xl uppercase font-black text-yellow-300 pt-5">
        Keynote Speakers
      </h2>
      <div className="grid md:grid-cols-3 pt-10 gap-10">
        {/* Reusable Speaker Card Component */}
        {[
          {
            imgSrc: "/images/keynote/1.png",
            name: "DR. K. PORKUMARAN",
            title: "Chairman, IEEE Madras",
          },
          {
            imgSrc: "/images/keynote/2.png",
            name: "AWAIS AHMAD",
            title:
              "Professor, Imam Mohammad Ibn Saud Islamic University, Saudi Arabia",
          },
          {
            imgSrc: "/images/keynote/wh.png",
            name: "Dr. E. Kannan Eswariah",
            title:
              "Registrar & Dean, Vel Tech Dr. R & D Institute of Science & Technology, Chennai",
          },
        ].map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-full w-full p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={speaker.imgSrc}
              alt={speaker.name}
              className="w-[160px] h-[160px] object-cover rounded-full"
            />
            <h4 className="text-yellow-300 font-bold text-xl pt-2 text-center">
              {speaker.name}
            </h4>
            <div className="text-center text-gray-400">
              <p>{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 pt-10 gap-10">
        {/* Reusable Speaker Card Component */}
        {[
          {
            imgSrc: "/images/keynote/3.png",
            name: "GOUTHAM REDDY ALAVALAPATI",
            title: "Professor, University of Illinois, USA",
          },
          {
            imgSrc: "/images/keynote/6.png",
            name: "TS DR. MOHD TALMIZIE AMRON",
            title: "Professor, Universiti Teknologi MARA, Malaysia",
          },
        ].map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-full w-full p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={speaker.imgSrc}
              alt={speaker.name}
              className="w-[160px] h-[160px] object-cover rounded-full"
            />
            <h4 className="text-yellow-300 font-bold text-xl pt-2 text-center">
              {speaker.name}
            </h4>
            <div className="text-center text-gray-400">
              <p>{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
