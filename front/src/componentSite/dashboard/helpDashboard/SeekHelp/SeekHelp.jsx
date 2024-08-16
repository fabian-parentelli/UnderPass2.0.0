import './seekHelp.scss';
import { useNavigate } from 'react-router-dom';
import AutoComplete from '../../../../component/utils/AutoComplete';

const SeekHelp = () => {

    const navigate = useNavigate();
    const handleChange = (e, newValue) => {
        if (newValue) navigate(`/dashboard/helpdas#${newValue.data}`);
    };

    return (
        <div className='seekHelp'>
            <AutoComplete data={data} handleChange={handleChange} />
        </div>
    );
};

export default SeekHelp;

const data = [
    { label: 'Imágenes', data: 'images' },
    { label: 'Avatares', data: 'avataresHelpDas' },
    { label: 'Ver Avatares', data: 'avataresHelpVew' },
    { label: 'Crear Avatares', data: 'avataresHelpCreate' },
    { label: 'Eventos - preSet', data: 'newEventHelpDas' },
    { label: 'Video tutoriales', data: 'videoTutHelpDas' },
    { label: 'Ver video tutoriales', data: 'videoTutHelpDasVew' },
    { label: 'Crear video tutoriales', data: 'videoTutHelpDasCreate' },
    { label: 'Usuarios', data: 'userHelpsDas' },
    { label: 'Ver usuarios', data: 'VewUserHelpDas' },
];