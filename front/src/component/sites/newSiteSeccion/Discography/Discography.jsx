import './discography.scss';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ImgUpload from '../ImgUpload/ImgUpload';
import CharacterCounter from '../../../utils/CharacterCounter';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Discography = ({ values, setFiles, setValues }) => {

    const [discs, setDiscs] = useState(values.discography.length > 0 ? values.discography : [{}]);
    const [deleteSong, setDeleteSong] = useState({ disc: false, song: false });

    const addDisc = () => setDiscs([...discs, { songs: ['', '', '', ''] }]);

    const addInput = (index) => {
        const updatedDiscs = [...discs];
        updatedDiscs[index].songs.push('');
        setDiscs(updatedDiscs);
        setValues({ ...values, discography: updatedDiscs });
    };

    const handleDiscography = (e) => setValues({ ...values, isDiscography: e.target.checked });

    const handleValues = (e, index) => {
        const updatedDiscs = [...discs];
        updatedDiscs[index] = { ...updatedDiscs[index], [e.target.name]: e.target.value };
        setDiscs(updatedDiscs);
        setValues({ ...values, discography: updatedDiscs });
    };

    const handleSings = (e, index, ind) => {
        const updatedDiscs = [...discs];
        updatedDiscs[index].songs[ind] = e.target.value;
        setDiscs(updatedDiscs);
        setValues({ ...values, discography: updatedDiscs });
    };

    useEffect(() => {
        localStorage.setItem('to', 'products');
        setValues({ ...values, post: 'discography' })
    }, []);

    const handleDeleteSong = (index, ind) => {
        const val = { ...values };
        const disc = val.discography[index];
        disc.songs.splice(ind, 1);
        setValues({ ...values, discography: [...val.discography] });
        setDeleteSong({ ...deleteSong, song: true });
    };

    const handleDeleteDisc = (index) => {
        const val = { ...values };
        val.discography.splice(index, 1);
        setValues({ ...values, discography: val.discography });
        setDiscs(val.discography);
        setDeleteSong({ ...deleteSong, disc: true });
    };

    return (
        <div className='discography'>
            <h6>Discografía.</h6>
            <section className='discographySwitchSect'>
                <div className='discographySwitch'>
                    <p>NO</p>
                    <Switch checked={values.isDiscography} onChange={handleDiscography} />
                    <p>SI</p>
                </div>
                <p className='discographypHelp'>Habilita material de Spotify</p>
            </section>

            {values.isDiscography && (
                <>
                    <Link to='/help#spotifyHelp' className='discographyPHelp'>Ayuda con la url de Spotify</Link>
                    <section>
                        {discs.map((disc, index) => (
                            <div key={index}>
                                <div className='discographyDiv'>
                                    {disc.title ?
                                        <ImgUpload
                                            width={'300px'}
                                            height={'300px'}
                                            name={disc.title}
                                            setFiles={setFiles}
                                            img={disc.img}
                                            setValues={setValues}
                                        />
                                        : <div className='discographyText'>
                                            <p>Debes ingresar el titulo antes de subir la imágen.</p>
                                        </div>
                                    }
                                    <div className='discographyInputs'>
                                        <div className='discographyTitleDiv'>
                                            <input
                                                type="text"
                                                name='title'
                                                placeholder='Título del album/ep'
                                                onChange={(e) => handleValues(e, index)}
                                                value={disc.title || ''}
                                                style={{ marginBottom: '1rem' }}
                                                required
                                            />
                                            <Tooltip title='Eliminar disco' placement='top'>
                                                <DeleteForeverIcon
                                                    className='discographyIcon'
                                                    onClick={() => handleDeleteDisc(index)}
                                                />
                                            </Tooltip>
                                        </div>

                                        <div className='discographyInputsDiv'>
                                            {disc.songs.map((song, ind) => (
                                                <div key={ind} className='discographyUrl'>
                                                    <input
                                                        type="text"
                                                        placeholder='Url de spotify'
                                                        name='songs'
                                                        onChange={(e) => handleSings(e, index, ind)}
                                                        value={song || ''}
                                                    />
                                                    <Tooltip title='Eliminar canción' placement='right'>
                                                        <DeleteForeverIcon
                                                            className='discographyIcon'
                                                            onClick={() => handleDeleteSong(index, ind)}
                                                        />
                                                    </Tooltip>
                                                </div>
                                            ))}
                                        </div>
                                        <p className='btn btnUS' onClick={() => addInput(index)}>Agregar tema</p>
                                    </div>
                                </div>
                                {(deleteSong.song || deleteSong.disc) &&
                                    <p className='discographyAlert'>Debes confirmar la eliminación
                                        {deleteSong.song ? ' de la canción ' : ' del disco '}
                                        con el botón actualizar
                                    </p>
                                }
                                <textarea
                                    name='text'
                                    placeholder='Información sobre este material'
                                    onChange={(e) => handleValues(e, index)}
                                    className='discographyTextArea'
                                    value={disc.text || ''}
                                ></textarea>
                                <CharacterCounter min={800} max={900} text={disc.text || 0} />
                            </div>
                        ))}
                    </section>
                    <p className='btn btnUS btnDiscography' onClick={addDisc}>Agregar disco</p>
                    <div className='line discographyLine'></div>
                </>
            )}
        </div>
    );
};

export default Discography;