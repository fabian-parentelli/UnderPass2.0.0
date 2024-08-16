
const VewUserHelpDas = () => {

    return (
        <div style={{ marginTop: '1rem' }} id='VewUserHelpDas'>
            <h4>Ver usuarios</h4>
            <p>En este item vas a poder visualizar todos los usuarios. A primera vista vas a ver el avatar del usuario, el nombre, el n° identificador, el email, el país, provincia/departamento, ciudad y si está activo.</p>
            <p style={{ marginTop: '8px' }}>Haz click en el nombre del usuario para poder ver información extra del usuario: Cumpleaños, DNI/CI, identificador de datos financieros, teléfono, codigo postal, y la fecha que se unió a nuestra plataforma.</p>
            <p>En este punto también encontrarás un boton Mensaje, que sirve para poder chatear con el usuario.</p>
            <p>En donde dice activo: puedes desactivar al usuario. Ten presente que si haces esto el usuario queda inhabilitado y no podra interactuar con la plataforma.</p>
        </div>
    );
};

export default VewUserHelpDas;