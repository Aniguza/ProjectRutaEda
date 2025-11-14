import somos from '../assets/images/imgQuienesSomos.png';

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export const MainSection = () => {
    const avatar = {
        img: "https://img.daisyui.com/images/profile/demo/superperson@192.webp"
    }

    return (
        <section className=" mx-auto my-0 py-16   ">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-6 w-90">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-6xl font-bold text-pastelrojo font-momo">RUTA EDA</h1>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div>
                                    <h3 className="text-2xl  text-pastelceleste mb-2 font-momo">¿Quiénes somos?</h3>
                                    <p className="text-black text-mb font-lato text-justify">
                                        Somos un grupo de estudiantes investigadores comprometidos con la promoción de la salud y la prevención de enfermedades. A través de nuestro proyecto “Ruta EDA”, buscamos informar y concientizar sobre las Enfermedades Diarreicas Agudas (EDAS), que continúan afectando a niños y familias sin acceso a agua potable. Nuestra investigación nos ha permitido comprender la importancia de la higiene, el saneamiento y el consumo de agua segura como medidas preventivas clave.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="justify-center flex">
                            <img src={somos} alt="Quiénes somos" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Right side - Social media and team */}
                    <div className="flex flex-col space-y-8 h-full gap-20 items-end pt-20">
                        <div className=" w-fit px-10 py-7 bg-pastelamarillo/35 rounded-lg align-sub">
                            <h3 className="text-2xl font-bold text-pastelrojo font-momo mb-4">Síguenos en:</h3>
                            <div className="flex  space-x-4 ">
                                <a href=''><FaFacebook className='w-10 h-10 text-blue-600' /></a>
                                <a href=''><FaYoutube className='w-10 h-10 text-red-600' /></a>
                                <a href=''><FaTiktok className='w-10 h-10 text-black' /></a>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className=" font-momo mb-10">
                                <h3 className="text-5xl font-bold text-pastelrojo pl-2">Conoce</h3>
                                <h4 className="text-4xl text-pastelceleste">Nuestro equipo</h4>
                            </div>

                            {/* Team photos grid */}
                            <div className="flex justify-center">
                                <div className="flex flex-wrap justify-center gap-4 max-w-[500px]">
                                    {Array.from({ length: 7 }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`avatar ${index === 7 ? 'w-full flex justify-center' : ''}`}
                                        >
                                            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-600">
                                                <img src={avatar.img} alt={`Team member ${index + 1}`} className="w-full h-full object-cover " />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};