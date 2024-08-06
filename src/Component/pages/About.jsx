import React from 'react';
import banner from '../../../public/images/banner.png';
import Footer from '../Homepage/footer';

const About = () => {
  return (

    <div className="w-screen flex flex-col items-center bg-slate-100">
      <div className="w-full max-w-screen-lg px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center mt-28 h-96 my-12 bg-slate-100">
          <div className="md:w-1/2 h-96 text-left md:pr-10">
            <h2 className="text-2xl font-bold mb-4">Rastriya Secondary School</h2>
            <p className="text-md mb-4">
              Rastriya Secondary School, one of the oldest and pioneer schools in Nepal, was first founded as co-educational school at Narayansthan, Nadipur, Pokhara-3 on 
              <strong>20th Mangshir, 2006 (5th December, 1949)</strong>. Now it is located in a peaceful location at Pokhara-1, Purano Tundikhel with extended classes under the affiliation of National Education Board (10+2) in Science, Management, Humanities and Education Streams since 2054 B.S.
              The school Premises extends in an open area of 72 ropanies of land. The school is easily accessible from any part(s) of valley.
              <strong>Rastriya Secondary School</strong> is an institution with a glorified heritage, excellent programmes and distinguished faculty members. Since its establishment, it has been giving best to be an academic institution for all the students of different economic backgrounds.
            </p>
          </div>
          <div className="md:w-1/2 h-96 flex  justify-center">
            <img src={banner} alt="Rastriya Secondary School" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center py-10">
          <div className="md:w-1/2 h-96 flex justify-center mb-10 md:mb-0">
            <img src={banner} alt="Rastriya Secondary School" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 h-96 flex flex-col items-center justify-center text-left md:pl-10">
            <p className="text-md mb-4">
              By providing quality education at free of cost up-to class 10 and at nominal fees for 10+2, it has been growing its name and fame all over the nation. 
              The school is highly dedicated to impart quality education to its students and to enable them to shape their future independently. 
              Rastriya Secondary School combines intimacy with a strong academic work and mutual support. 
              It is a non-profit academic institution with broad objectives of supporting the development of skilled and dynamic human resources to meet the challenges of education in the 21st century in various sectors. 
              The Rastriya Secondary School body is strongly committed to develop this school into the center of excellence supported latest resources and technology to help students meet their education goal.
            </p>
          </div>
        </div>

        <div className="text-black p-4">
          <h1 className="text-2xl text-center font-bold">The Belief</h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center py-10">
          <div className="md:w-1/2 text-left md:pr-10">
            <p className="text-md mb-4">
              Quality education is such that it contributes significantly not only to acquiring certificates but also to producing efficient human power. Private educational institutes often charge high fees, which are unaffordable for students from low economic backgrounds. Rastriya Secondary School believes that education must be provided at nominal fees so that no one is deprived of their fundamental right to acquire education.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={banner} alt="Rastriya Secondary School" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
        
        <div className="text-black p-4 text-center">
          <h1 className="text-2xl font-bold">Special features</h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center py-10">
          <div className="md:w-1/2 text-left md:pr-10">
            <p className="text-md mb-4">
              Beside employing highly qualified, experienced teachers and equally efficient non-teaching staff, Rastriya Secondary School has developed the following physical and organizational infrastructures for effective academic operation:
            </p>
            <ul className="list-disc text-md pl-6">
              <li>Well-furnished, spacious classrooms.</li>
              <li>Well-managed resourceful E-library.</li>
              <li>Well-equipped laboratories for science disciplines.</li>
              <li>Impressive conference hall and auditorium.</li>
              <li>Peaceful premises with a beautiful garden.</li>
              <li>Abundance of sports materials and a magnificent sports facility.</li>
              <li>Psychological support based on students' behavior.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={banner} alt="Rastriya Secondary School" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
        
        <div className="text-black p-4 text-center">
          <h1 className="text-2xl font-bold">Courses Offered</h1>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Rastriya Secondary School</h1>
          <p className="text-lg text-gray-700">
            Offers varieties of courses under National Education Board (NEB). At present, the school is running different courses under the disciplines viz. Science, Management, Humanities, and Education.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="overflow-x-auto">
            <table className="border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Science</th>
                  <th className="border border-gray-300 px-4 py-2">Management</th>
                  <th className="border border-gray-300 px-4 py-2">Humanities</th>
                  <th className="border border-gray-300 px-4 py-2">Education</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">C. English</td>
                  <td className="border border-gray-300 px-4 py-2">C. English</td>
                  <td className="border border-gray-300 px-4 py-2">C. English</td>
                  <td className="border border-gray-300 px-4 py-2">C. English</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">C. Nepali</td>
                  <td className="border border-gray-300 px-4 py-2">C. Nepali</td>
                  <td className="border border-gray-300 px-4 py-2">C. Nepali</td>
                  <td className="border border-gray-300 px-4 py-2">C. Nepali</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Physics</td>
                  <td className="border border-gray-300 px-4 py-2">Accountancy</td>
                  <td className="border border-gray-300 px-4 py-2">Sociology</td>
                  <td className="border border-gray-300 px-4 py-2">Edu. Pedagogy</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                  <td className="border border-gray-300 px-4 py-2">Economics</td>
                  <td className="border border-gray-300 px-4 py-2">Population</td>
                  <td className="border border-gray-300 px-4 py-2">Introduction to Education</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Biology</td>
                  <td className="border border-gray-300 px-4 py-2">Business Studies</td>
                  <td className="border border-gray-300 px-4 py-2">English Instructional Evaluation</td>
                  <td className="border border-gray-300 px-4 py-2">Maths</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">Marketing</td>
                  <td className="border border-gray-300 px-4 py-2">English Business Maths</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">Civics</td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center py-10">
          <div className="md:w-1/2 text-left md:pr-10">
            <h2 className="text-2xl font-bold mb-4">Rules and Regulations</h2>
            <ul className="list-disc pl-6">
              <li>Punctuality and regular attendance are mandatory.</li>
              <li>Adhere to the prescribed uniform and dress code.</li>
              <li>Respect teachers, staff, and fellow students.</li>
              <li>Maintain academic integrity with no cheating or plagiarism.</li>
              <li>Use school facilities responsibly and seek permission when necessary.</li>
              <li>Follow safety protocols and emergency procedures.</li>
              <li>Use electronic devices and internet responsibly.</li>
              <li>Maintain personal hygiene and follow health-related policies.</li>
              <li>Participate in extracurricular activities according to guidelines.</li>
              <li>Engage parents/guardians in school activities and maintain communication.</li>
              <li>Consequences for rule violations may include warnings, detentions, or other disciplinary actions.</li>
              <li>Follow all school rules and regulations to uphold a positive school environment.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={banner} alt="Rastriya Secondary School" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>  
  );
};

export default About;
