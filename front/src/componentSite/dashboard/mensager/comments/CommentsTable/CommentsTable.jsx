import './commentsTable.scss';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { Fragment, useState } from 'react';
import CommentsVew from '../CommentsVew/CommentsVew';
import CommentsReport from '../CommentsReport/CommentsReport';
import BigImg from '../../../../../component/utils/BigImg/BigImg';
import ModalCustom from '../../../../../component/utils/ModalCustom/ModalCustom';

const CommentsTable = ({ comments, type, setLoading }) => {

    const [vew, setVew] = useState(null);
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(null);

    const handleVew = (v) => setVew(vew === v ? null : v);
    const closedModal = () => { setOpen(false); setModal(null) };
    const openModal = (id) => { setModal(id); setOpen(true) };

    return (
        <div className='commentsTable'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Comentarios</th>
                        <th>Denuncias</th>
                    </tr>
                </thead>

                <tbody>
                    {comments && comments.map((com, index) => (
                        <Fragment key={index}>
                            <tr>
                                <td>{<BigImg img={com.img} border={false} />}</td>

                                <td className='commentsTableHover'>
                                    <Link
                                        className='commentsTableLink'
                                        to={`/${getType(type).ref}/${com._id}`}
                                    >
                                        <Tooltip title={`Ver ${getType(type).name}`} placement="bottom">
                                            <p>{com.title}</p>
                                        </Tooltip>
                                    </Link>
                                </td>

                                <td>{getType(type).name}</td>

                                <Tooltip title='Ver comentarios'>
                                    <td className='commentsTableHover' onClick={() => handleVew(com._id)}>
                                        {com.comments.length}
                                    </td>
                                </Tooltip>

                                <Tooltip title='Ver denuncias'>
                                    <td className='commentsTableHover'
                                        onClick={com.comments.reduce((total, rep) => total + (rep.report ? rep.report.length : 0), 0) > 0 ? () => openModal(com._id) : null}
                                    >
                                        {com.comments.reduce((total, rep) => total + (rep.report ? rep.report.length : 0), 0)}
                                    </td>
                                </Tooltip>
                            </tr>

                            {vew === com._id &&
                                <tr>
                                    <td colSpan={5}>
                                        <CommentsVew comments={com.comments} />
                                    </td>
                                </tr>
                            }

                            {modal === com._id &&
                                <ModalCustom modalIsOpen={open} closeModal={closedModal}>
                                    <CommentsReport comments={com.comments.filter(rep => rep.report && rep.report.length > 0)} type={type} />
                                </ModalCustom>
                            }

                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CommentsTable;

function getType(types) {
    const setTypes = {
        'news': () => { return { name: 'noticia', ref: 'uniquenews' } },
        'product': () => { return { name: 'noticia', ref: 'product' } },
        'event': () => { return { name: 'evento', ref: 'event' } },
        'site': () => { return { name: 'sitio', ref: 'site' } },
    };
    return (setTypes[types])();
};