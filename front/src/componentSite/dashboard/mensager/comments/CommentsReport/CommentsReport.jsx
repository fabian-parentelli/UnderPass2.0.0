import './commentsReport.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { updRejectMessageApi } from '../../../../../helpers/message/updRejectsMessage.api.js';
import { updActiveMessageApi } from '../../../../../helpers/message/updActiveMessage.api.js';

const CommentsReport = ({ comments: data, type }) => {

    const [comments, setComments] = useState(data);
    const [inactive, setInactive] = useState(false);
    const [spinners, setSpinners] = useState(false);

    const hanldeReject = async (id) => {
        setSpinners(true);
        const response = await updRejectMessageApi({ type: type, comment: comments[0]._id, report: id });
        if (response.status === 'success') {
            const data = [...comments];
            data[0].report = data[0].report.filter(rep => rep._id != id);
            setComments(data);
        } else console.error(response.error);
        setSpinners(false);
    };

    const handleActive = async () => {
        setSpinners(true);
        const response = await updActiveMessageApi({ id: comments[0]._id, type: type });
        if (response.status === 'success') setInactive(true);
        else setInactive(false);
        setSpinners(false);
    };

    return (
        <div className='commentsReport'>
            <h2>Mesaje denunciado</h2>

            <div className='messageVewDiv' >
                <img src={comments[0].userId.avatar[0]} alt="img" />
                <div className='messageVewText'>
                    <p>{comments[0].text}</p>
                    <p>{comments[0].userId.name} - {new Date(comments[0].date).toLocaleDateString()}</p>
                </div>
            </div>

            {spinners ?
                <Spinner color={'#f45c14'} />
                : !inactive ?
                    <>
                        <div className='commentsReporters'>
                            {comments[0].report.map((rep) => (
                                <div className='messageVewDiv' key={rep._id} >
                                    <img src={rep.userId.avatar[0]} alt="img" />
                                    <div className='messageVewText'>
                                        <p>{rep.reason}</p>
                                        <p>{rep.userId.name} - {new Date(comments[0].date).toLocaleDateString()}</p>
                                    </div>
                                    <div className='commentsReportDivIcon' onClick={() => hanldeReject(rep._id)}>
                                        <DoDisturbIcon className='commentsReportIcon' />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className='btnCard commentsReportersBtn' onClick={handleActive}>
                            Eliminar
                        </button>
                    </>
                    : <p>El mensaje ya se encuentar desactivado</p>
            }
        </div>
    );
};

export default CommentsReport;