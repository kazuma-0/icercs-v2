export default function Committee() {
  return (
    <div className="container pt-5">
      <h3 className="text-3xl text-center font-black pb-2 text-secondary">
        Committee
      </h3>
      <div className="grid grid-cols-4 gap-6 text-justify">
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
        <div>
          <h3 className="text-2xl font-black pb-2 text-primary">
            Organizing Committee
          </h3>
          <div className="space-y-4">
            {organizingCommitteeMembers.map((member, index) => (
              <OrganizingCommittee
                key={index}
                role={member.role}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </div>
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
      <h3 className="text-2xl font-black pb-2 text-primary">{title}</h3>
      <ul className="text-sm space-y-1 pt-3">
        {members.map((member: string, index: number) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

interface OrganizingCommitteeProps {
  role: string;
  name: string;
  position: string;
}

function OrganizingCommittee({
  role,
  name,
  position,
}: OrganizingCommitteeProps) {
  return (
    <div>
      <h4 className="text-lg font-bold text-secondary">{role}</h4>
      <p className="text-base">{name}</p>
      <p className="text-sm text-gray-600">{position}</p>
    </div>
  );
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
  "Dr. N. Kumarappan, Immediate Past Chair, IEEE Madras Section",
  "Prof. Dr. G. Rajesh, MIT Campus, Chennai",
  "Prof. Dr. Subarna Shakya, Tribhuvan University, Nepal",
  "Prof. Dr. Chandrasekar Ravi, National Institute of Technology Puducherry",
  "Prof. Dr. S. Karthik, SNS Institutions, Coimbatore",
  "Prof. Dr. Ajaya Kumar Pani, Birla Institute of Technology, India",
  "Prof. Dr. Rahib H. Adiyev, Near East University, India",
  "Prof. Dr. M. Newlin Rajkumar, Anna University Regional Campus, Coimbatore",
  "Prof. Dr. A. Prathik, Vel Tech R&D Institute of Science and Technology, Chennai",
  "Prof. Dr. A. M. Senthil Kumar, Vellore Institute of Technology, Vellore",
  "Prof. Dr. C. Yogesh, Vellore Institute of Technology, Vellore",
  "Prof. Dr. Sivasundar Manisakar, Amrita Vishwa Vidyapeetham, India",
  "Prof. Dr. Jagadeesan, Vel Tech R&D Institute of Science and Technology, Chennai",
  "Prof. Dr. Chandru Vignesh, Vellore Institute of Technology, Vellore",
];

const technicalAdvisoryMembers = [
  "Dr. K. Porkumaran, Chairman, IEEE Madras Section",
  "Dr. R. Hariprakash, Secretary, IEEE Madras Section",
  "Dr. S. Radha, Treasurer, IEEE Madras Section",
  "Prof. Dr. Hossein Mousavinezhad, Idaho State University, USA",
  "Prof. Dr. Danilo Pelusi, Università di Teramo, Italy",
  "Prof. Byungchul Tak, Kyungpook National University, South Korea",
  "Prof. Dr. Krishnaveni V, P.S.G. College of Technology, Coimbatore",
  "Prof. Dr. Joy Long Zong Chen, Da-Yeh University",
  "Prof. Dr. T. Senthil Kumar, Amrita School of Engineering, Coimbatore",
  "Prof. Dr. Azath Mubarakali, King Khalid University, Saudi Arabia",
  "Prof. Dr. Valentina Emilia Bales, Aurel Vlaicu Univ. of Arad, Romania",
  "Dr. Y. C. Jiang, Andes Technology Corporation, Taiwan",
  "Dr. Awais Ahmad, Università degli Studi di Milano, Italy",
  "Prof. Dr. E. Kannan, Vel Tech R&D Institute of Science and Technology, Chennai",
  "Prof. Dr. N. Krishnaraj, Vellore Institute of Technology, Vellore",
];

const organizingCommitteeMembers = [
  { role: "Patron", name: "Dr.S.Ravi", position: "Registrar" },
  {
    role: "Chief Patron",
    name: "Prof. Dr.B.Venkatachalapathy",
    position: "Vice-Chancellor",
  },
  {
    role: "Conference Chair",
    name: "Prof. Dr.V.Parthasarathy",
    position: "Dean (R&D) and Industry Relations",
  },
  { role: "Convenors", name: "Dr.A.Amutha", position: "Dean - FOE" },
  { role: "", name: "Dr. R. Santhosh", position: "Professor and HoD (CSE)" },
  {
    role: "Co - Convenors",
    name: "Dr.B. Arun Kumar",
    position: "Professor and HoD (AI&DS)",
  },
  {
    role: "",
    name: "Dr.R. Roopa Chandrika",
    position: "Professor and HoD (CYBER)",
  },
  {
    role: "Technical Program Chair",
    name: "Dr. J. Alfred Daniel",
    position: "",
  },
  { role: "", name: "Dr. B. Lanitha", position: "" },
  { role: "", name: "Dr. K. Vanitha", position: "" },
  { role: "Publication Chair", name: "Dr. T. Mohanraj", position: "" },
  { role: "", name: "Dr. R. Dhanapal", position: "" },
  { role: "", name: "Dr. S. P. Sasirekha", position: "" },
  { role: "", name: "Dr. Laxmi Raja", position: "" },
];
