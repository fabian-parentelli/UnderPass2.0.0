import './shiftClosedInfo.scss';

const ShiftClosedInfo = () => {

    return (
        <div className='shiftClosedInfo'>
            <p className='pgray'>Hay dos opciones posibles:</p>
            <p className='pgray'><span className='colSH'>Cerrar:</span> lo que haces es desactivar los turnos, dejara de estar visible en el acceso en la portada de <span className='colUP'>UnderPass</span>, en el módulo <span className='colSH'>UnderShift</span> y si tienes un sitio <span className='colUS'>UnderSite</span>, este no mostrar el sistema de turnos.</p>
            <p className='pgray'>Ten en cuenta que esto no suspende los turnos ya otorgados.</p>
            <p className='pgray'><span className='colSH'>Vacaciones:</span> Este formato lo que hace es mostrar tu sistema de turnos pero los usuarios, no podrán agendar y les aparacecerá un aviso de cerrado por vacaciones.</p>
        </div>
    );
};

export default ShiftClosedInfo;