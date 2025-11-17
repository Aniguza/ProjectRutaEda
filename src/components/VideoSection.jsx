import niño from '../assets/images/imgReportaje.png';
import { useState, useRef } from 'react';

export const VideoSection = () => {


    return (
        <section className="">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Video content */}
                    <div className='w-full lg:w-120'>
                        <h2 className="text-4xl font-momo text-pastelrojo mb-8">Nombre del reportaje</h2>

                        <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                            <div className="aspect-video bg-gray-400 flex items-center justify-center ">
                                <iframe

                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/KDy_6Ey7AYs?si=RylNHS7za5rY9IGV?rel=0&modestbranding=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="flex mt-6 gap-10 text-black text-mb font-lato text-justify lg:pr-25">
                            <p className="w-160 lg:w-full">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className=" hidden md:block lg:hidden w-auto ">
                                <img src={niño} alt="Character Illustration" className="" />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Character illustration */}
                    <div className="hidden lg:flex justify-center lg:justify-end h-100">
                        <div >
                            <img src={niño} alt="Character Illustration" className="w-80 h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
