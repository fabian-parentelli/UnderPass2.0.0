import './messageReport.scss';
import { useState } from 'react';
import Checkboxes from '../../utils/Checkboxes';
import { reportMessageApi } from '../../../helpers/message/reportMessage.api';

const MessageReport = ({ mes, userId, type: isType }) => {

    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        const response = await reportMessageApi({ userId, type: isType, id: mes._id, reason: type })
        if (response.status === 'success') setLoading(true);
        else console.error(response.error);
    };

    return (
        <>
            {loading ? <p>Denuncia exitosa</p> :
                <div className='messageReport'>
                    <h2>Denunciar comentario</h2>
                    <p>Creo que este mensaje no respeta las normas de convivencia.</p>

                    <div className='messageReportCheck'>
                        <Checkboxes labels={["Información errónea", "Dañino o peligroso", "Bulling o acoso", "Abusivo, incita al odio", "Comentario violento", "Comentario sexual", "Lenguaje inapropiado"]} setType={setType} />
                    </div>

                    <button className='btn btnD' onClick={handleSubmit}>Denunciar</button>
                </div >
            }
        </>
    );
};

export default MessageReport;