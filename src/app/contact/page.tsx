/* eslint-disable @next/next/no-img-element */
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gold mb-10">
        Contact Us
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="col-span-2 space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.604629083579!2d76.9876831!3d10.917622399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85af2d5b63f75%3A0x958123c48e7c849d!2sKarpagam%20Academy%20of%20Higher%20Education!5e0!3m2!1sen!2sin!4v1661835489062!5m2!1sen!2sin"
              className="w-full h-80"
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-primary">
            <h3 className="text-2xl font-bold text-secondary mb-4">Distance</h3>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                From Airport - 21.9Kms (45 Min) Via NH 544
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                From Railway Station - 15.3Kms (41 Min) Via NH 948
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-primary">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg text-primary">Dr. R. Santhosh</h4>
              <p className="text-gray-800">Professor and HoD (Convenor)</p>
              <p className="text-gray-800">
                Department of Computer Science and Engineering
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary">
                Karpagam Academy of Higher Education
              </h4>
              <p className="text-gray-800">(Deemed to be University)</p>
              <p className="text-gray-800">
                Pollachi Main Road, Eachanari Post, Coimbatore, India
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:icercs@kahedu.edu.in"
                  className="text-gold hover:underline"
                >
                  icercs@kahedu.edu.in
                </a>
              </p>
            </div>
            <div>
                <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Help Lines: (+91) 7010027645, 8220261899
                </p>
            </div>
            <div>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
                <a
                  href="https://www.icercs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  www.icercs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
