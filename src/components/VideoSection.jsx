import niño from '../assets/images/imgReportaje.png';
import { useState, useRef } from 'react';

export const VideoSection = () => {
    

    return (
        <section className="">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Video content */}
                    <div className='w-120'>
                        <h2 className="text-4xl font-momo text-pastelrojo mb-8">Nombre del reportaje</h2>

                        <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                            <div className="aspect-video bg-gray-400 flex items-center justify-center relative">
                                <iframe
                                  
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/KDy_6Ey7AYs?si=RylNHS7za5rY9IGV"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="mt-6 text-black text-mb font-lato text-justify pr-25">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Character illustration */}
                    <div className="flex justify-center lg:justify-end h-200">
                        <div className="">
                            <img src={niño} alt="Character Illustration" className="w-80 h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
