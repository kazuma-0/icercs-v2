export default function Committee() {
  return (
    <div className="container pt-5">
      <h3 className="text-3xl text-center font-black pb-2 text-gold">
        Committee
      </h3>
      <div className="grid grid-cols-3 gap-6 text-justify">
        <CommitteeSection
          title="International Advisory Committee"
          members={internationalAdvisoryMembers}
        />
        <CommitteeSection
          title="National Advisory Committee"
          members={nationalAdvisoryMembers}
        />
        <CommitteeSection
          title="Technical Advisory Committee"
          members={technicalAdvisoryMembers}
        />
        {/* <div>
          <h3 className="text-2xl font-black pb-2 text-gold">
            Organizing Committee
          </h3>
          <div className="space-y-4">
            {organizingCommitteeMembers.map((group, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-gold">
                  {group.role && `${group.role}:`}
                </h4>
                {group.members.map((member, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="text-base text-white">{member.name}</p>
                    {member.position && (
                      <p className="text-sm text-white">{member.position}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

interface CommitteeSectionProps {
  title: string;
  members: string[];
}

function CommitteeSection({ title, members }: CommitteeSectionProps) {
  return (
    <div>
      <h3 className="text-2xl  pb-2 text-[#FFF627] font-bold">{title}</h3>
      <ul className="text-sm space-y-1 pt-3 text-white">
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

interface OrganizingCommitteeMember {
  name: string;
  position?: string;
}

interface OrganizingCommitteeGroup {
  role: string;
  members: OrganizingCommitteeMember[];
}

const internationalAdvisoryMembers = [
  "Prof. Anand Paul, Kyungpook National University, South Korea",
  "Prof. Dr. Pao - Ann, National Chung Cheng University, Taiwan",
  "Prof. Dr. Ahmed Zobaa, Brunel University, London",
  "Prof. Dr. Ke-Lin Du, Concordia University, Canada",
  "Prof. Joao Manuel R.S Tavares, University do Porto, Portugal",
  "Prof. Dr. Ajay Kumar Jha, North Dakota State University, USA",
  "Prof. Gowtham Reddy Alavalpatti, Fontbonne University, USA",
  "Prof. Dr. Gwangil Jeon, Incheon National University, South Korea",
  "Prof. Dr. Sri Ravana, University of Malaya",
  "Prof. Dr. Cheng Ee Meng, University Malaysia Perlis",
  "Prof. Dr. Brois Tomas, University of Zagreb, Croatia",
  "Prof. Dr. Khaled Kamel, Texas Southern University, USA",
  "Prof. Dr. S. Arockiasamy, University of Nizwa, Sultanate of Oman",
  "Prof. Dr. Seungmin Rho, Chung-Ang University, South Korea",
  "Gloria Jennis Tan, PhD, Universiti Teknologi MARA, Malaysia",
  "Hasiah Binti Mohamed @ Omar, PhD, Universiti Teknologi MARA, Malaysia",
  "Mazidah Binti Puteh, PhD, Universiti Teknologi MARA, Malaysia",
  "Mohd Talmizie Bin Amron, PhD, Universiti Teknologi MARA, Malaysia",
  "Najiahtul Syafiqah Binti Ismail, PhD, Universiti Teknologi MARA, Malaysia",
  "Norlina Binti Mohd Sabri, PhD, Universiti Teknologi MARA, Malaysia",
  "Norulhidayah Binti Isa, PhD, Universiti Teknologi MARA, Malaysia",
  "Rajeswari A/P Raju, PhD, Universiti Teknologi MARA, Malaysia",
  "Wan Safra Diyana Binti Wan Abdul Ghani, PhD, Universiti Teknologi MARA, Malaysia",
  "Fazlin Marini Binti Hussain, Universiti Teknologi MARA, Malaysia",
  "Sharifah Nurulhikmah Binti Syed Yasin, Universiti Teknologi MARA, Malaysia",
  "Siti Nurul Hayatie Binti Ishak, Universiti Teknologi MARA, Malaysia",
  "Zawawi Bin Ismail @ Abdul Wahab, Universiti Teknologi MARA, Malaysia",
];

const nationalAdvisoryMembers = [
  "Prof. Dr. G. Rajesh, MIT Campus, Chennai",
  "Prof. Dr. Subarna Shakya, Tribhuvan University, Nepal",
  "Prof. Dr. Chandrasekar Ravi, National Institute of Technology Puducherry",
  "Prof. Dr. S. Karthik, SNS Institutions, Coimbatore",
  "Prof. Dr. Ajaya Kumar Pani, Birla Institute of Technology, India",
  "Prof. Dr. M. Newlin Rajkumar, Anna University Regional Campus, Coimbatore",
  "Prof. Dr. A. Prathik, Vel Tech R&D Institute of Science and Technology, Chennai",
  "Prof. Dr. A. M. Senthil Kumar, Vellore Institute of Technology, Vellore",
  "Prof. Dr. C. Yogesh, Vellore Institute of Technology, Vellore",
  "Prof. Dr. Sivasundar Manisakar, Amrita Vishwa Vidyapeetham, India",
  "Prof. Dr. Jagadeesan, Vel Tech R&D Institute of Science and Technology, Chennai",
  "Prof. Dr. Chandru Vignesh, Vellore Institute of Technology, Vellore",
];

const technicalAdvisoryMembers = [
  "Dr. P. Sakthivel, Chairman, IEEE Madras Section",
  "Dr. E. Kannan Eswariah, Chairman - IEEE Professional Communication Society",
  "Dr. S. Radha, Secretary, IEEE Madras Section",
  "Dr. S. Brindha, Treasurer, IEEE Madras Section",
  "Dr. V. Nagarajan , Conference Committee Member , IEEE Madras Section",

  "Prof. Dr. Hossein Mousawinezhad, Idaho State University, USA",
  "Prof. Dr. Danilo Pelusi, Università di Teramo, Italy",
  "Prof. Byungchal Tak, Kyungpook National University, South Korea",
  "Prof. Dr. Krishnaveni V, P.S.G. College of Technology, Coimbatore",
  "Prof. Dr. Joy Long Zong Chen, Da-Yeh University",
  "Prof. Dr. Azath Mubarakali, King Khalid University, Saudi Arabia",
  "Prof. Dr. Valentine Emilia Bales, Aurel Vlacia Univ. of Arad, Romani",
  "Dr. Y.C. Jiang, Andes Technology Corporation, Taiwan",
  "Dr. Awais Ahmad, Università degli studi di Milano, Italy",
  "Prof. Dr. N. Krishnaraj, Vellore Institute of Technology, Vellore",
];

const organizingCommitteeMembers: OrganizingCommitteeGroup[] = [
  {
    role: "Patron",
    members: [{ name: "Prof. Dr. B. V. Pradeep", position: "Registrar" }],
  },
  {
    role: "Chief Patron",
    members: [{ name: "Prof. Dr. S. Ravi", position: "Vice-Chancellor" }],
  },
  {
    role: "Conference Chair",
    members: [
      {
        name: "Prof. Dr. V. Parthasarathy",
        position: "Dean (R&D) and Industry Relations",
      },
    ],
  },
  {
    role: "Convenors",
    members: [
      { name: "Dr. A. Amutha", position: "Dean - FOE" },
      { name: "Dr. R. Santhosh", position: "Professor and HoD (CSE)" },
    ],
  },
  {
    role: "Co - Convenors",
    members: [
      { name: "Dr. B. Arun Kumar", position: "Professor and HoD (AI&DS)" },
      { name: "Dr. R. Roopa Chandrika", position: "Professor and HoD (CYBER)" },
    ],
  },
  {
    role: "Technical Program Chair",
    members: [
      { name: "Dr. J. Alfred Daniel" },
      { name: "Dr. K. Vanitha" },
      { name: "Dr. B. Lanitha" },
    ],
  },
  {
    role: "Publication Chair",
    members: [
      { name: "Dr. T. Mohanraj" },
      { name: "Dr. R. Dhanapal" },
      { name: "Dr. Laxmi Raja" },
      { name: "Dr. S. P. Sasirekha" },
    ],
  },
];
