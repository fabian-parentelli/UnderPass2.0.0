const VideoTutHelpDas = () => {

    return (
        <div style={{ marginTop: '1rem' }} id='videoTutHelpDas'>
            <h4>Vidos Tutoriales</h4>
            <p>En este punto, puedes trabjar sobre los videos tutoriales que creamos para brindarle una ayuda de forma visual a los usuarios, sobre el funcionamiento de nuestra plataforma.</p>

            <p style={{ marginTop: '8px' }} id="videoTutHelpDasVew"><strong>Ver Videos:</strong>Al abrir el input de "Videos tutoriales" lo primero que vas a ver es una lista de los videos ya disponibles. En ellos encontraras la miniatura del video, el título, el nombre del identificador que sirve para trasladar al usuario hacia el video. Y por ultimo activo o inactivo. Esto te indica el estado del video y al hacer click en el estado puedes activar o descativar el video, ten en cuenta que si desactivas un video el usuario no podrá verlo.</p>

            <p style={{ marginTop: '8px' }} id="videoTutHelpDasCreate"><strong>Crear Videos:</strong>Sobre la lista de videos existe un boton "Video nuevo", haz click en el para poder crear un video nuevo.</p>
            <p>Aquí vamos a enocontrar tres campos:</p>
            <ul style={{ marginLeft: '1.2rem' }}>
                <li><strong style={{ color: '#f45c14' }}>Titulo:</strong>Aqui pondras el título del video, ten en cuenta que el nombre tiene que ser indicativo de lo que esta presentando. Ejemplo: 'Crear un evento'</li>
                <li><strong style={{ color: '#f45c14' }}>Name:</strong>En name tienes que colocar la dirección url ejemplo: "newEvent".</li>
                <li><strong style={{ color: '#f45c14' }}>URL:</strong>En la url tienes que registrar la dirección url del video que se enuentra alojado en You Tube, ej: "https://www.youtube.com/watch?v=d6RfiS15s3U".</li>
            </ul>
        </div>
    );
};

export default VideoTutHelpDas;