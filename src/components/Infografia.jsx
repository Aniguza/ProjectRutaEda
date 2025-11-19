import React from 'react'
import foto from '../assets/images/niñoinfografia.png';
import { FaRegHandPointRight } from "react-icons/fa";

export const Infografia = () => {
    return (
        <section className="flex flex-col gap-5 items-center ">

            <p className="text-3xl font-momo text-pastelceleste">¿Qué son las EDAS?</p>
            <div className='flex flex-col-reverse lg:grid md:grid-cols-3 justify-center items-center gap-10'>
                <div className='flex justify-center items-center'>
                    <img src={foto} alt="Infografía" width="240px"/>
                </div>
                <div className="bg-pastelamarillo text-black text-mb font-lato text-justify p-8 md:col-span-2 rounded-2xl">
                    <p className=" text-xl">
                        Para nosotros es importante que sepas sobre las Enfermedades Diarreicas Agudas (EDA), ya que son una de las principales causas de morbilidad y mortalidad en niños menores de cinco años en todo el mundo.
                    </p>
                    <p className="text-xl">Por ello hemos preparado para ti una <b>infografía</b>, donde encontrarás lo siguiente:</p>
                    <ul className="list-disc list-inside my-4 pl-5 text-xl ">
                        <li>Causas</li>
                        <li>Prevención</li>
                        <li>Cifras actuales de casos detectados</li>
                    </ul>
                    {/*--------Modal trigger button------*/}
                    <button className="btn bg-pastelrojo border-none text-white text-lg p-6" onClick={() => document.getElementById('my_modal_1').showModal()}> <FaRegHandPointRight />Ver infografía</button>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl pt-10 bg-linear-to-r from-pastelrojo via-pastelceleste to-pastelamarillo" >
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div style={{ width: "100%" }}>
                                <div style={{ position: "relative", paddingBottom: "200%", paddingTop: 0, height: 0 }}>
                                    <iframe
                                        title="Ruta EDA"
                                        frameBorder="0"
                                        width="800px"
                                        height="1600px"
                                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                        src="https://view.genially.com/69156c640af34a09f80b9f33"
                                        type="text/html"
                                        allowFullScreen={true}
                                        scrolling="yes"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {/* End of Modal */}
                </div>
            </div>


        </section>
    )
}
