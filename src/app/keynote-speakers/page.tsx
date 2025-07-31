export default function KeynoteSpeakers() {
  const speakers = [
    {
      name: "PROF. DR. FADI AL-TURJMAN",
      title: "Dean-AI and Informatics",
      university: "Near East University, Turkey",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=5G0uavwAAAAJ&citpid=2", // replace with actual image path
    },
    {
      name: "DR. DESHINTA ARROVA DEWI",
      title: "Associate Professor",
      university:
        "Faculty of Data Sciences and Information Technology, INTI International University, Malaysia",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=16XPxHUAAAAJ&citpid=22", // replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-3xl uppercase font-black text-yellow-300 mb-12">
        Keynote Speakers
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold uppercase text-white">{speaker.name}</h3>
            <p className="text-sm font-semibold mt-1 text-gray-300">{speaker.title}</p>
            <p className="text-sm max-w-xs text-gray-300">{speaker.university}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
