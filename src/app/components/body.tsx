import React from 'react';
import Image from 'next/image'; 

const Body = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden bg-opacity-75 bg-white bg-cover">

      <div className="w-full h-auto absolute inset-0 bg-transparent opacity-30"></div> 
      
      <div className="z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">

        <div className="w-full pt-5 h-fit md:w-1/2 md:py-10 text-center">
          <h1 className="whitespace-nowrap text-[1rem] font-normal leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl font-pacifico text-[#21243D] animate-fadeIn">
            Hello, I&apos;m Sumra Jabeen
          </h1>
          <p className="my-5 w-full text-center text-[1.25rem] tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left font-poppins text-[#EA1D5D] font-bold animate-fadeIn justify-items-center">
            Step into my digital world! Here, you&apos;ll find a collection of projects that fuse design, code, and functionality.
            <span><br /> Whether you&apos;re here to explore or be inspired, I invite you to dive into the work that drives my passion.</span>
          </p>
        </div>
        
        <div className="relative flex items-end w-full mt-7 md:m-auto justify-end">
          <Image
            alt="Simra"
            loading="lazy"
            width={200}
            height={200}
            decoding="async"
            className="h-auto w-[200px] md:w-[250px] lg:w-[300px]"
            style={{ color: `transparent` }}
            src="/image/simra.png"

            />
          
        </div>
      </div>
    </div>
  );
};

export default Body;
