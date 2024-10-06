import './publicityTable.scss';
import { Fragment, useState } from 'react';
import { restDays } from 'faradayfunctions';
import BigImg from '../../../utils/BigImg/BigImg';
import WantToFront from '../WantToFront/WantToFront.jsx';
import ModalCustom from '../../../utils/ModalCustom/ModalCustom.jsx';
import { updPublicityApi } from '../../../../helpers/publicity/updPublicity.api.js';
import MoreTimeBuy from '../MoreTimeBuy/MoreTimeBuy.jsx';

const PublicityTable = ({ publicity, setLoading }) => {

    const [values, setValues] = useState({});
    const [inPortal, setInPortal] = useState({ open: false, vew: null });
    const [moreTime, setMoreTime] = useState({ open: false, vew: null });

    const handleChange = (e, id) => setValues(prevValues => ({ ...prevValues, [id]: { links: e.target.value } }));
    const handleClosed = () => setInPortal({ open: false, vew: null });
    const handleOpen = (id) => setInPortal({ open: true, vew: id });
    const handleMoreTClosed = () => setMoreTime({ open: false, vew: null });
    const handleMoreTOpen = (id) => setMoreTime({ open: true, vew: id });

    const handleBlur = async (id) => {
        setLoading(true);
        const response = await updPublicityApi(values[id], id);
        if (response.status === 'success') setLoading(false);
        else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='publicityTables'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Portal</th>
                        <th>Links</th>
                        <th>Cierre</th>
                        <th>+Tiempo</th>
                    </tr>
                </thead>

                <tbody>
                    {publicity && publicity.map((pub) => (
                        <Fragment key={pub._id}>
                            <tr>
                                <td><BigImg img={pub.imgUrl[0]} border={false} /></td>
                                <td>{pub.title}</td>
                                <td>{pub.type}</td>

                                <td
                                    className='publicityTablesBG'
                                    style={{ color: pub.inPortal ? 'green' : 'red' }}
                                    onClick={() => handleOpen(pub._id)}
                                >
                                    {pub.inPortal ? 'SI' : 'NO'}
                                </td>

                                <td>
                                    <input
                                        type="text"
                                        value={values[pub._id]?.links || pub.links}
                                        onChange={(e) => handleChange(e, pub._id)}
                                        onBlur={() => handleBlur(pub._id)}
                                        style={{ width: '130px' }}
                                    />
                                </td>
                                <td>
                                    {new Date(pub.end).toLocaleDateString()}
                                    {restDays(new Date(pub.end)) > 0 &&
                                        <p>{restDays(new Date(pub.end))} días restantes</p>
                                    }
                                </td>
                                <td
                                    onClick={() => handleMoreTOpen(pub._id)}
                                    className='publicityTablesBG'
                                >
                                    Solicitar
                                </td>
                            </tr>

                            {inPortal.vew === pub._id &&
                                <ModalCustom modalIsOpen={inPortal.open} closeModal={handleClosed}>
                                    <WantToFront data={pub} setInPortal={setInPortal} />
                                </ModalCustom>
                            }

                            {moreTime.vew === pub._id &&
                                <ModalCustom modalIsOpen={moreTime.open} closeModal={handleMoreTClosed}>
                                    <MoreTimeBuy data={pub} setMoreTime={setMoreTime} />
                                </ModalCustom>
                            }

                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default PublicityTable;