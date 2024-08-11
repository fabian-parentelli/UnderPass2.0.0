import './vewPublicityProfil.scss';
import { Fragment, useEffect, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg';
import { updPublicityApi } from '../../../helpers/publicity/updPublicity.api.js';
import { getPublicityByUserIdApi } from '../../../helpers/publicity/getPublicityByUserId.api.js';
import WantFrontPage from '../WantFrontPage/WantFrontPage.jsx';

const VewPublicityProfil = ({ userId, setLoading }) => {

    const [publicity, setPublicity] = useState([]);
    const [values, setValues] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPublicityByUserIdApi(userId);
            if (response.status === 'success') setPublicity(response.result);
            else console.log('error:', response);
            setLoading(false);
        }; userId && fetchData();
    }, []);

    const handleChange = (e, id) => {
        setValues(prevValues => ({ ...prevValues, [id]: { links: e.target.value } }))
    };

    const handleBlur = async (id) => {
        setLoading(true);
        const response = await updPublicityApi(values[id], id);
        if (response.status === 'success') {
            setLoading(false)
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='vewPublicityProfil'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Portal</th>
                        <th>Links</th>
                        <th>Ciere</th>
                        <th>+Tiempo</th>
                    </tr>
                </thead>

                <tbody>
                    {publicity && publicity.map((pub) => (
                        <Fragment key={pub._id}>
                            <tr >
                                <td> <BigImg img={pub.imgUrl[0]} border={false} /> </td>
                                <td>{pub.title}</td>
                                <td>{pub.type}</td>

                                <td
                                    style={{ color: pub.inPortal ? 'green' : 'red' }}
                                    className='vewPublicityProfilBack'
                                    onClick={openModal}
                                >
                                    {pub.inPortal ? 'SI' : 'NO'}
                                </td>

                                <td >
                                    <input
                                        type="text"
                                        value={values[pub._id]?.links || pub.links}
                                        onChange={(e) => handleChange(e, pub._id)}
                                        onBlur={() => handleBlur(pub._id)}
                                        style={{ width: '130px' }}
                                    />
                                </td>

                                <td>
                                    <p>{new Date(pub.end).toLocaleDateString()}</p>
                                    <p>{Math.ceil((new Date(pub.end) - new Date()) / (1000 * 60 * 60 * 24))} días restantes</p>
                                </td>
                                <td className='vewPublicityProfilBack'>Solicitar</td>
                            </tr>
                            {modalIsOpen && <WantFrontPage modalIsOpen={modalIsOpen} closeModal={closeModal} data={pub} />}
                        </Fragment>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default VewPublicityProfil;