import React from 'react';
import Image from 'next/image';

const About = () => {
  const skills = [`HTML,CSS,Typescript`, `Next.Js,Tailwind Css`, `Problem Solving, Leadership`, `Team management`, `Creativity, Artistic`];
  const qualification = [`Governor Initiative and Cloud Computing (Web Developer)`, `Bachelors in BBA (Human Resources)`, `Internships (Efu life insurance)`, `Internships (Youth Awareness)`];

  return (
    <div id="About">
      <div className="relative z-0 w-full overflow-hidden bg-opacity-0 bg-[url('/image/technical.jpg')] bg-cover">
        <div className="absolute inset-0 w-full h-full -z-50 bg-white bg-opacity-85"></div>

        <div className="p-8 max-w-3xl mx-auto overflow-hidden">
          <h1 className="text-4xl font-semibold text-center text-[#EA1D5D] mb-4">About Us</h1>
          <p className="text-lg mb-6 text-[#21243D] font-bold justify-center">
            Welcome to my website! I am working on myself to gain more expertise in the following skills. 
            I am passionate about becoming a better developer and continually improving my knowledge in 
            the latest technologies and frameworks. Stay tuned for more updates as I grow!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-2xl shadow-black animate-fadeIn">
              <Image
                src="/image/html-css.jpg"
                alt="HTML-CSS"
                width={500} 
                height={300} 
                style={{ objectFit: 'cover' }}
                className="rounded-lg"/>
              
            </div>

            <div className="relative w-full h-40 rounded-lg overflow-hidden animate-fadeIn shadow-2xl shadow-black">
              <Image
                src="/image/ts-js.jpeg"
                alt="Typescript"
                width={500} 
                height={300} 
                style={{ objectFit: 'cover' }}
                className="rounded-lg"/>
              
            </div>

            <div className="relative w-full h-40 rounded-lg overflow-hidden animate-fadeIn shadow-2xl shadow-black">
              <Image
                src="/image/nextjs.jpeg"
                alt="Nextjs"
                width={500} 
                height={300} 
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>

            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-2xl shadow-black animate-fadeIn">
              <Image
                src="/image/team.jpeg"
                alt="Team"
                width={500} 
                height={300} 
                style={{ objectFit: 'cover' }}
                className="rounded-lg"/>
              
            </div>

            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-2xl shadow-black animate-fadeIn">
              <Image
                src="/image/leadership.jpeg"
                alt="Leadership"
                width={500} 
                height={300} 
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>

            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-2xl shadow-black animate-fadeIn">
              <Image
                src="/image/ts-js.jpeg" 
                width={500} 
                height={300} 
                style={{ objectFit: 'cover' }} 
                alt="Image description" />
            
            </div>
          </div>

          <div className="flex justify-between space-x-10">
            <div>
              <h2 className="text-2xl font-semibold text-[#EA1D5D] mb-4">My Skills</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg font-bold font-poppins text-[#21243D]">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#EA1D5D] mb-4">My Qualifications and Experiences</h2>
  <ul className="list-disc pl-6 sm:pl-8 md:pl-10 lg:pl-12 space-y-2 text-base sm:text-lg md:text-xl font-bold font-poppins text-[#21243D]">
    {qualification.map((qualification, index) => (
      <li key={index}>{qualification}</li>
    ))}
  </ul>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
