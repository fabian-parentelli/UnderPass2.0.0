import './shiftWhatIsHelp.scss';
import TitleHelp from '../../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../../utils/urlImages.utils.js';
import UnderShiftsLog from '../../../../../component/fonts/UnderShiftsLog/UnderShiftsLog';

const ShiftWhatIsHelp = () => {

    return (
        <div id='shiftWhatIsHelp'>
            <TitleHelp
                title='Que es UnderShifts'
                paragraph='Sistema de gestión de turnos'
                goTo='shiftWhatIsHelp'
            />

            <section className='shiftWhatIsHelpA'>
                <h2>¿Qué ofrece UnderShifts?</h2>
                <p>
                    Con UnderShifts tendrás todo lo que necesitas en un solo lugar: un título llamativo,
                    la dirección de tu negocio, tu logo y una descripción que resume lo que ofreces.
                </p>
                <div>
                    <img src={imagesHelp.shiftCards} alt="img1" />
                    <img src={imagesHelp.shiftheaders} alt="img2" />
                </div>
            </section>

            <section className='shiftWhatIsHelpB'>
                <h2>Solicitud de Turnos</h2>
                <p>
                    Solicitar un turno es simple y rápido. Los usuarios pueden elegir días, horarios, salas y secciones preconfiguradas por el administrador.
                    Si ya tienen una cuenta, no necesitan completar datos, en caso contrario, se les solicitará su nombre, correo electrónico y teléfono.
                </p>
                <img src={imagesHelp.shiftCalendar} alt="img3" />
            </section>

            <section className='shiftWhatIsHelpC'>
                <h2>Localización</h2>
                <p>
                    Ubicar tu negocio nunca fue tan fácil. Los usuarios encontrarán nuevamente tu dirección acompañada de un mapa interactivo para guiarse sin complicaciones.
                </p>
                <img src={imagesHelp.shiftlocalization} alt="img4" />
            </section>

            <section className='shiftWhatIsHelpC'>
                <h2>Comentarios de Usuarios</h2>
                <p>
                    Ofrecemos una sección de comentarios donde tus usuarios pueden compartir sus opiniones sobre la atención,
                    las instalaciones o cualquier mensaje que deseen dejar.
                </p>
                <img src={imagesHelp.shiftmessages} alt="img5" />
            </section>

            <section className='shiftWhatIsHelpB'>
                <h2>Beneficios para el Administrador</h2>
                <p>
                    ¿Lo mejor de todo? UnderShifts es completamente gratuito para los administradores. Además de permitirte gestionar turnos,
                    es un poderoso software de gestión para llevar tu negocio al siguiente nivel.
                </p>
                <img src={imagesHelp.shiftAdmin} alt="img6" />
                <p>
                    Para los usuarios, este servicio tiene un costo accesible, garantizando calidad y eficiencia en cada turno.
                    Con UnderShifts, todos ganan.
                </p>
            </section>

            <section className='shiftWhatIsHelpLog'>
                <UnderShiftsLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderShift</span> de <span>UnderPass</span></p>
            </section>
        </div>
    );
};

export default ShiftWhatIsHelp;