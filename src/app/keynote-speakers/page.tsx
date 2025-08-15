export default function KeynoteSpeakers() {
  const speakers = [
    {
      name: "DR. HUI-WEN YANG",
      title: "Assistant Professor",
      university: "Department of Biomedical Sciences and Engineering, Tzu-Chi University, Taiwan",
      image: "https://bmse.tcu.edu.tw/wp-content/uploads/2025/03/9.png", // replace with actual image path
    },

  
    {
      name: "DR. PHAM THI THU THUY",
      title: "Dean - Faculty of Information Technology, Nha Trang University, Vietnam",
      university: "",
      image: "https://canbo.ntu.edu.vn/Staff/PersonelImage/305", // replace with actual image path
    },
    {
      name: "DR. HASIAH MOHAMED",
      title: "Senior Lecturer, Faculty of Computer and Mathematical Sciences, UiTM Cawangan Terengganu, Malaysia",
      university: "",
      image: "https://terengganu.uitm.edu.my/images/FAKULTI/KPPIM/FOTO/HASIAH_MOHAMED__OMAR_Ts_DR.png", // replace with actual image path
    },
    {
      name: "DR. WEN-REN YANG",
      title: "Associate Professor Director of Artificial Intelligence Applications Center National Changhua University of Education Changhua, Taiwan",
      university: "",
      image: "https://media.licdn.com/dms/image/v2/C5603AQE67ZV5E-Lh6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517446614779?e=1758153600&v=beta&t=aIzh6bMXcH0ZUUMJC75MrF1ooEg_jUSYlMuQqula4Ow", // replace with actual image path
    },
    {
      name: "PROF. DR. FADI AL-TURJMAN",
      title: "Dean-AI and Informatics",
      university: "Near East University, Turkey",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=5G0uavwAAAAJ&citpid=2",
    },
    {
      name: "DR. DESHINTA ARROVA DEWI",
      title: "Associate Professor",
      university:
        "Faculty of Data Sciences and Information Technology, INTI International University, Malaysia",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=16XPxHUAAAAJ&citpid=22",
    },
  ];

  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-3xl uppercase font-black text-yellow-300 mb-12">
        Keynote Speakers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold uppercase text-white">
              {speaker.name}
            </h3>
            <p className="text-sm mt-1 text-gray-300">{speaker.title}</p>
            <p className="text-sm max-w-xs text-gray-300">
              {speaker.university}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
