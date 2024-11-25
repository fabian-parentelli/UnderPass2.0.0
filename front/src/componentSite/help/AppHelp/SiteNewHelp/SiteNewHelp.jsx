import './siteNewHelp.scss';
import TitleHelp from '../../TitleHelp/TitleHelp';
import { imagesHelp } from '../../../../utils/urlImages.utils';
import UnderSiteLog from '../../../../component/fonts/UnderSiteLog/UnderSiteLog';

const SiteNewHelp = () => {

    return (
        <div id='siteNewHelp'>
            <TitleHelp
                title='Crear tu sitio web'
                paragraph='Cómo crear tu sitio en UnderPass'
                goTo='siteNewHelp'
            />

            <p className='siteNewHelpPara'>En esta guía, te explicamos paso a paso cómo puedes crear y personalizar tu propio sitio dentro de la plataforma UnderPass, ya sea para proyectos artísticos o negocios relacionados con el ámbito artístico.</p>

            <section className='siteNewHelpA'>
                <h3>Accede a tu gestor de sitio</h3>
                <p>En el menú de navegación, despliega la opción Plataforma y haz clic en Tu página.<br />
                    Serás redirigido a tu gestor de sitio, donde podrás visualizar los sitios que ya has creado.<br />
                    Para comenzar uno nuevo, haz clic en el botón Nuevo sitio.</p>
                <img src={imagesHelp.siteManager} alt="img" className='siteManager' />
            </section>

            <section className='siteNewHelpA'>
                <h3>Secciones para configurar tu sitio</h3>
                <h4>Portada</h4>
                <p>Sube dos imágenes: una para el banner y otra para el logo. Ambas se pueden ajustar con un selector.
                    Completa los siguientes campos:
                    Nombre del proyecto (banda, obra, artista o local).
                    Categoría y subcategoría: Esto determinará qué secciones adicionales estarán disponibles (ejemplo: músicos tendrán una sección de discografía).
                    Ciudad y provincia.</p>
                <img src={imagesHelp.sitePortal} alt="img" />
            </section>

            <section className='siteNewHelpB'>
                <h4>Eventos</h4>
                <div>
                    <p>Relaciona los eventos que ya hayas creado para que las entradas aparezcan en tu sitio.
                        Usa el switch para decidir si deseas mostrar los eventos o no.</p>
                    <img src={imagesHelp.siteEvent} alt="img" />
                </div>
            </section>

            <section className='siteNewHelpA'>
                <h4>Descripción</h4>
                <p style={{ width: '80%', margin: '1rem auto' }}>Agrega una descripción principal sobre tu proyecto.
                    Sube una imagen relacionada.
                    Si necesitas, incluye un segundo texto opcional para más detalles.</p>
                <img src={imagesHelp.siteDescription} alt="img" />
            </section>

            <section className='siteNewHelpA'>
                <h4>Redes sociales</h4>
                <p style={{ width: '80%', margin: 'auto' }}>Escribe las URL de tus redes sociales para que los visitantes puedan acceder fácilmente a tus perfiles.
                    Deja en blanco las redes que no tengas (por ejemplo, Spotify).</p>
                <img src={imagesHelp.siteSocial} alt="img" className='siteSocial' />
            </section>

            <section className='siteNewHelpA'>
                <h4>Elenco o Artista</h4>
                <p>Si es un proyecto en grupo, completa el nombre, sube una imagen y agrega una descripción para cada miembro del elenco.
                    Si eres solista, aprovecha para detallar tu trayectoria o información relevante sobre ti.
                    Puedes añadir más personas haciendo clic en Agregar Elenco.</p>
                <img src={imagesHelp.siteCast} alt="img" className='siteSocial' />
            </section>

            <section className='siteNewHelpA'>
                <h4>Discografía (Solo para músicos o bandas)</h4>
                <p>Sube el nombre del CD/EP.
                    Agrega la imagen de portada del álbum.<br />
                    Completa los inputs con las URL de tus canciones en Spotify.<br />
                    Incluye más canciones o proyectos utilizando el botón Agregar.<br />
                    Tip: Hay un video explicativo que te ayudará a enlazar correctamente las canciones.</p>
                <img src={imagesHelp.siteDiscography} alt="img" />
            </section>

            <section className='siteNewHelpB'>
                <h4>Productos</h4>
                <div>
                    <p style={{ lineHeight: '2.4' }}>Relaciona productos como merchandising para que se muestren en tu sitio.<br />
                        Usa el switch para decidir si los productos estarán visibles.<br />
                        (Nota: Actualmente, los restaurantes no pueden subir cartas. Esto estará disponible próximamente).</p>
                    <img src={imagesHelp.siteProducts} alt="img" />
                </div>
            </section>

            <section className='siteNewHelpA'>
                <h4>Galería</h4>
                <p>Activa o desactiva la galería de imágenes con el switch.<br />
                    Puedes subir hasta 7 imágenes y posicionarlas como prefieras.</p>
                <img src={imagesHelp.siteGalery} alt="img" />
            </section>

            <section className='siteNewHelpA'>
                <h4>Videos</h4>
                <p>Agrega URL de videos de YouTube para mostrarlos en tu sitio.<br />
                    (Nota: Hay una guía para aprender a copiar las URL correctamente).</p>
                <img src={imagesHelp.siteVideo} alt="img" />
            </section>

            <section className='siteNewHelpA'>
                <h3>Guarda los cambios</h3>
                <p>Una vez que completes una sección, haz clic en el botón Actualizar para guardar los cambios.<br />
                    Si en algún momento necesitas modificar algo (como una imagen o descripción), realiza los cambios y presiona nuevamente Actualizar.</p>
            </section>

            <section className='siteNewHelpLog'>
                <UnderSiteLog size={3} />
                <p>Gracias por utilizar el módulo <span>UnderSite</span> de <span>UnderPass</span></p>
            </section>

        </div>
    );
};

export default SiteNewHelp;