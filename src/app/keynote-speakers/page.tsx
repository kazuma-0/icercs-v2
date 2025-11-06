import SpeakerCard from "./SpeakerCard";

export default function KeynoteSpeakers() {
  const speakers = [
    {
      name: "DR. HUI-WEN YANG",
      title: "Assistant Professor",
      university:
        "Department of Biomedical Sciences and Engineering, Tzu-Chi University, Taiwan",
      image: "https://bmse.tcu.edu.tw/wp-content/uploads/2025/03/9.png", // replace with actual image path
    },

    {
      name: "DR. PHAM THI THU THUY",
      title:
        "Dean - Faculty of Information Technology, Nha Trang University, Vietnam",
      university: "",
      image: "https://canbo.ntu.edu.vn/Staff/PersonelImage/305", // replace with actual image path
    },
    {
      name: "DR. HASIAH MOHAMED",
      title:
        "Senior Lecturer, Faculty of Computer and Mathematical Sciences, UiTM Cawangan Terengganu, Malaysia",
      university: "",
      image:
        "https://terengganu.uitm.edu.my/images/FAKULTI/KPPIM/FOTO/HASIAH_MOHAMED__OMAR_Ts_DR.png", // replace with actual image path
    },
    {
      name: "DR. GOH KHANG WEN",
      title:
        "Pro Vice-Chancellor, Global Engagement, INTI International University, Malaysia",
      university: "",
      image:
        "https://i1.rgstatic.net/ii/profile.image/946594400714753-1602697100353_Q512/Khang-Wen-Goh.jpg",
    },
    {
      name: "DR. NORLINA MOHD SABRI",
      title:
        "Senior Lecturer, Faculty of Computer & Mathematical Sciences, UiTM Cawangan Terengganu, Malaysia",
      university: "",
      image:
        "https://terengganu.uitm.edu.my/images/FAKULTI/KPPIM/FOTO/NORLINA_MOHD_SABRI_DR.png",
    },

    {
      name: "DR. CHING-CHUN CHUANG",
      title:
        "Assistant Professor, Department of Electrical Engineering, National Kaohsiung University of Science and Technology, Taiwan",
      university: "",
      image:
        "https://i1.rgstatic.net/ii/profile.image/879169445572609-1586621738654_Q128/Sung-Ching-Chen.jpg",
    },
    {
      name: "DR. TRI BASUKI KURNIAWAN",
      title: "Senior Lecturer, Universiti Kebangsaan Malaysia (UKM)",
      university: "Bangi, Malaysia",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pzjCu2kAAAAJ&citpid=8",
    },

    {
      name: "DR. WEN-REN YANG",
      title:
        "Associate Professor Director of Artificial Intelligence Applications Center National Changhua University of Education Changhua, Taiwan",
      university: "",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQE67ZV5E-Lh6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517446614779?e=1758153600&v=beta&t=aIzh6bMXcH0ZUUMJC75MrF1ooEg_jUSYlMuQqula4Ow", // replace with actual image path
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
      title: "Professor",
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
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}
