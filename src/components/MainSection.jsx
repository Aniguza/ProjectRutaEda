import somos from '../assets/images/imgQuienesSomos.png';

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import img1 from "../assets/integrantes/alessandro.png";
import img2 from "../assets/integrantes/ariana.png";
import img3 from "../assets/integrantes/deysi.png";
import img4 from "../assets/integrantes/elizabeth.png";
import img5 from "../assets/integrantes/karim.png";
import img6 from "../assets/integrantes/katia.png";
import img7 from "../assets/integrantes/moises.png"
    ;
export const MainSection = () => {
    const avatar = {
        img1: img1,
        name1: "Alessandro Juárez Morante",
        img2: img2,
        name2: "Ariana Ato Luna",
        img3: img3,
        name3: "Deysi Suárez Sáenz",
        img4: img4,
        name4: "Elizabeth ⁠Alarcón Riofrio",
        img5: img5,
        name5: "Karim Rodriguez Cerquera",
        img6: img6,
        name6: "Katia Ramos Valle",
        img7: img7,
        name7: "Moises Alvarado Masías"
    };


    return (
        <section className=" mx-auto my-0 lg:py-16   ">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-6 lg:w-90">
                        <div className="flex items-end justify-between lg:items-center space-x-4">
                            <h1 className="text-6xl font-bold text-pastelrojo font-momo">RUTA EDA</h1>
                            <div className="lg:hidden  w-fit px-10 py-7 bg-pastelamarillo/35 rounded-lg align-sub">
                                <h3 className="text-2xl font-bold text-pastelrojo font-momo mb-4">Síguenos en:</h3>
                                <div className="flex  space-x-4 ">
                                    <a href='https://www.facebook.com/share/17K8y3MUMF/?mibextid=wwXIfr' target='_blank' rel="noopener noreferrer"><FaFacebook className='w-10 h-10 text-blue-600' /></a>
                                    <a href='https://www.youtube.com/@RutaEDA' target='_blank' rel="noopener noreferrer"><FaYoutube className='w-10 h-10 text-red-600' /></a>
                                    <a href='https://www.tiktok.com/@laotracara_noticias?_r=1&_t=ZS-91FHrNuUJU8' target='_blank' rel="noopener noreferrer"><FaTiktok className='w-10 h-10 text-black' /></a>
                                </div>
                            </div>
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
                    <div className="hidden lg:flex flex-col space-y-8 h-full gap-20 items-end ">
                        <div className=" w-fit px-10 py-7 bg-pastelamarillo/35 rounded-lg align-sub">
                            <h3 className="text-2xl font-bold text-pastelrojo font-momo mb-4">Síguenos en:</h3>
                            <div className="flex  space-x-4 ">
                                <a href='https://www.facebook.com/share/17K8y3MUMF/?mibextid=wwXIfr' target='_blank' rel="noopener noreferrer"><FaFacebook className='w-10 h-10 text-blue-600' /></a>
                                <a href='https://www.youtube.com/@RutaEDA' target='_blank' rel="noopener noreferrer"><FaYoutube className='w-10 h-10 text-red-600' /></a>
                                <a href='https://www.tiktok.com/@laotracara_noticias?_r=1&_t=ZS-91FHrNuUJU8' target='_blank' rel="noopener noreferrer"><FaTiktok className='w-10 h-10 text-black' /></a>
                            </div>
                        </div>
                        <div className="w-full lg:w-100">
                            <div className=" font-momo mb-10 text-center lg:text-left ">
                                <h3 className="text-5xl font-bold text-pastelrojo pl-2">Conoce</h3>
                                <h4 className="text-4xl text-pastelceleste">Nuestro equipo</h4>
                            </div>

                            {/* Team photos grid */}
                            <div className="flex justify-center">
                                <div className="flex flex-wrap justify-center gap-10 lg:gap-4 lg:max-w-[500px]">
                                    {Array.from({ length: 7 }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`avatar flex-col ${index === 7 ? 'w-full flex  justify-center' : ''}`}
                                        >
                                            <div
                                                className="relative w-30 h-30 rounded-full border-3 border-pastelrojo group cursor-pointer hover:scale-105 transition-transform duration-300"
                                                style={{
                                                    perspective: '1000px',
                                                    transformStyle: 'preserve-3d'
                                                }}
                                            >
                                                {/* Cara frontal - Imagen */}
                                                <div
                                                    className="absolute inset-0 rounded-full overflow-hidden clickable-none"
                                                    style={{
                                                        transform: 'rotateY(0deg)',
                                                        backfaceVisibility: 'hidden',
                                                        transition: 'transform 0.5s ease-in-out'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'rotateY(180deg)';
                                                        e.currentTarget.nextElementSibling.style.transform = 'rotateY(0deg)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'rotateY(0deg)';
                                                        e.currentTarget.nextElementSibling.style.transform = 'rotateY(-180deg)';
                                                    }}
                                                >
                                                    <img
                                                        src={avatar[`img${index + 1}`]}
                                                        alt={`Integrante ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Cara trasera - Nombre */}
                                                <div
                                                    className="absolute inset-0 bg-pastelceleste rounded-full flex items-center justify-center p-1"
                                                    style={{
                                                        transform: 'rotateY(-180deg)',
                                                        backfaceVisibility: 'hidden',
                                                        transition: 'transform 0.8s ease-in-out'
                                                    }}
                                                >
                                                    <p className="text-center text-[15px] text-white font-bold leading-tight text-wrap px-1">
                                                        {avatar[`name${index + 1}`]?.split(' ').slice(0, 3).join(' ')}
                                                    </p>
                                                </div>
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