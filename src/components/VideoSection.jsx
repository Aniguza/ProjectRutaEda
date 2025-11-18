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
                                    src="https://www.youtube.com/embed/ErwswPbDm4w"
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
                                Las enfermedades diarreicas agudas (EDA) continúan siendo un serio desafío de salud pública en Piura, evidenciado por el aumento de casos durante el periodo 2024-2025 y por la reciente muerte de un niño menor de cinco años, un hecho que expone la fragilidad de esta población. El riesgo principal se encuentra en la deshidratación acelerada que afectan a los niños pequeños, quienes pueden entrar en estado de shock si no reciben una hidratación inmediata mediante sales de rehidratación oral o, en situaciones más graves, a través de tratamiento intravenoso.
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
