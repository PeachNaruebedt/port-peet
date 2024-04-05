import React from 'react';
import Marquee from 'react-fast-marquee';

const Skills = () => {
  const skillsData = [
    { name: 'HTML', image: '/images/html.svg' },
    { name: 'CSS', image: '/images/css.svg' },
    { name: 'Javascript', image: '/images/javascript.svg' },
    { name: 'Typescript', image: '/images/typescript.svg' },
    { name: 'Next JS', image: '/images/nextjs.svg' },
    { name: 'Tailwind', image: '/images/tailwind.svg' },
    { name: 'MongoDB', image: '/images/mongodb.svg' },
    { name: 'MySQL', image: '/images/mysql.svg' },
    { name: 'Git', image: '/images/git.svg' },
    { name: 'Python', image: '/images/python.svg' },
    { name: 'Pytorch', image: '/images/pytorch.svg' },
    { name: 'Tensorflow', image: '/images/tensorflow.svg' },
    { name: 'Numpy', image: '/images/numpy.svg' },
    { name: 'Opencv', image: '/images/opencv.svg' },
    


  ];

  return (
    <div>
      <section className='text-white'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
            <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
              ABOUT ME
            </span>
            <span className="h-36 w-[2px] bg-[#1a1443]"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="font-medium mb-5 text-[#16f2b3] text-xl lg:text-2xl uppercase">
               Skills
              </p>
              <div className="relative z-50 border-t my-12 lg:my-20 border-[#25213b] ">
                <div className="w-full my-12">
                  <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                  >
                    {skillsData.map((skill, id) => (
                      <div
                        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                        key={id}
                      >
                        <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                          <div className="flex -translate-y-[1px] justify-center">
                            <div className="w-3/4">
                              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center gap-3 p-6">
                            <div className="h-8 sm:h-10">
                              <img
                                src={skill.image} // URL ของรูปภาพที่เกี่ยวข้องกับทักษะ
                                alt={skill.name}
                                width={40}
                                height={40}
                                className="h-full w-auto rounded-lg"
                              />
                            </div>
                            <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;