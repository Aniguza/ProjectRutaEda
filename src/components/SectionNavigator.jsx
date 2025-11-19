import { useState, useEffect } from 'react';

const SectionNavigator = () => {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        { id: 'main-section', name: 'Inicio' },
        { id: 'video-section', name: 'Video' },
        { id: 'comic-section', name: 'Cómic' },
        { id: 'infografia-section', name: 'Infografía' },
        { id: 'brote-section', name: 'Brote' },
        { id: 'juego-section', name: 'Juego' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="fixed left-15 top-1/2 -translate-y-2/2 z-50 flex flex-col gap-4">
            {sections.map((section, index) => (
                <div key={section.id} className="relative group">
                    <div className="tooltip tooltip-right" data-tip={section.name}>
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={`w-5 h-5 rounded-full border-3 transition-all duration-300 cursor-pointer ${activeSection === index
                                ? 'bg-pastelrojo border-pastelrojo'
                                : 'bg-fondo border-pastelrojo hover:bg-pastelceleste hover:scale-110' 
                                }`}
                        >
                            <span className="sr-only">{section.name}</span>
                        </button>
                    </div>

                    {/* Línea conectora */}
                    {index < sections.length - 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-5 h-6 w-0.5 bg-pastelrojo"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionNavigator;
