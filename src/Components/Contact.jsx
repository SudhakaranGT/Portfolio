import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaHome,
} from "react-icons/fa";

const PersonalDetails = () => {
  const personalDetails = {
    name: "Sudhakaran T",
    email: "sudhakarangt@gmail.com",
    phone: "+91 9952655991",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    cv: "/path/to/johndoe-cv.pdf",
    address: "359 Pk Street, C.M.Pudur 604501, Tamil Nadu, India",
    maritalStatus: "Single",
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
          Contact
        </h2>
        <div className="flex flex-col items-center">
          <div className="p-6 sm:p-8 md:p-10 rounded-lg shadow-md mb-8 w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-500 text-center sm:text-left">
              {personalDetails.name}
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-lg sm:text-xl">
                <FaEnvelope className="mr-4 text-blue-500" />
                <a
                  href={`mailto:${personalDetails.email}`}
                  className=" break-words"
                >
                  {personalDetails.email}
                </a>
              </div>
              <div className="flex items-center text-lg sm:text-xl">
                <FaPhone className="mr-4 text-blue-500" />
                <a
                  href={`tel:${personalDetails.phone}`}
                  className=" break-words"
                >
                  {personalDetails.phone}
                </a>
              </div>
              <div className="flex items-center text-lg sm:text-xl">
                <FaLinkedin className="mr-4 text-blue-500" />
                <a
                  href={personalDetails.linkedin}
                  className=" break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center text-lg sm:text-xl">
                <FaGithub className="mr-4 text-blue-500" />
                <a
                  href={personalDetails.github}
                  className=" break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center text-lg sm:text-xl">
                <FaFilePdf className="mr-4 text-blue-500" />
                <a
                  href={personalDetails.cv}
                  className=" break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
