import React from 'react'
import foto from '../assets/images/leyendo.png';

export const BroteTexto = () => {
    return (

        <section className="my-20">
            <h1 className="text-4xl font-momo text-pastelceleste mb-8 text-center">Brote de deshidratación 
</h1>
            <div className="bg-pastelamarillo text-black text-mb font-lato text-justify p-8 rounded-2xl">
                <p className=" text-xl mb-4">
                    Piura enfrenta un aumento de enfermedades diarreicas agudas (EDA) durante el periodo 2024-2025, según la Vigilancia Epidemiológica Regional, que confirmó además la muerte de un niño menor de cinco años a causa de deshidratación severa. La situación mantiene en alerta a las autoridades sanitarias, debido al impacto que estas afecciones tienen en los menores, considerados la población con mayor vulnerabilidad.<br /> <br />
                    La Coordinación de Epidemiología informó que la mayoría de casos son originados por virus, principalmente rotavirus, y que los contagios se intensifican en verano, cuando las temperaturas sobrepasan los 40 grados y la falta de agua potable se vuelve más crítica. Estas condiciones, sumadas al consumo de alimentos contaminados, elevan el riesgo de cuadros agudos que pueden complicarse en pocas horas si no se recibe atención oportuna.
                </p>
                    
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="text-xl flex-1">
                        <p className="mb-4">
                            Los especialistas explican que las EDA pueden presentarse como diarreas acuosas, disentéricas o persistentes, siendo las acuosas las más frecuentes en la región. El mayor peligro radica en la deshidratación acelerada, que puede llevar al paciente a un estado de shock si no recibe hidratación inmediata mediante sales de rehidratación oral o tratamiento intravenoso en casos severos.
                        </p>
                        <p>
                            El Hospital Santa Rosa reportó cinco casos en la semana 41 de 2025, mientras que en el mismo periodo de 2024 se registraron doce, con una concentración predominante en niños de uno a cuatro años. Estas cifras confirman que los menores continúan siendo el grupo más afectado por estas enfermedades.
                            Las autoridades de salud recomiendan mantener al día la vacunación contra el rotavirus, reforzar la higiene en el hogar y garantizar una adecuada manipulación de alimentos. También insisten en fortalecer la vigilancia epidemiológica y la capacidad de respuesta del primer nivel de atención para prevenir complicaciones y reducir el impacto de una enfermedad que puede controlarse con medidas oportunas.
                        </p>
                    </div>
                    <img src={foto} alt="Leyendo" className="w-44 h-auto rounded-lg" />
                </div>
            </div>
        </section>
    )
}
