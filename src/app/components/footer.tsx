import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
            <div className="z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">

      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; Sumra Jabeen Personal Portfolio, 2024</p>

        <div className="flex mt-5 space-x-4 items-center justify-center">
          <a
            href="https://www.facebook.com/simra.jabeen.96?mibextid=ZbWKwL"
            className="text-white hover:text-gray-400 mx-4"
            target="_blank" rel="noopener noreferrer"
          >
            <Image
                    src="/image/facebook.png" 
                    alt="Facebook-Logo" 
                    className="w-5 h-5"
                    width={100}
                    height={100}

                  />
          
          </a>

          <a
            href="https://www.linkedin.com/in/sumra-jabeen-12037a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-white hover:text-gray-400 mx-4"
            target="_blank" rel="noopener noreferrer"
          >
               <Image
                    src="/image/linkedin.png" 
                    alt="linkedin-Logo" 
                    className="w-5 h-5" 
                    width={100}
                    height={100}
                  />
          </a>

          <a
            href="https://www.instagram.com/simra_mumbai/profilecard/?igsh=bTBrYjk2cDBodzB6"
            className="text-white hover:text-gray-400 mx-4"
            target="_blank" rel="noopener noreferrer"
          >
               <Image
                    src="/image/instagram.png" 
                    alt="instagram-Logo" 
                    className="w-5 h-5" 
                    width={100}
                    height={100}
                  />
          
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
