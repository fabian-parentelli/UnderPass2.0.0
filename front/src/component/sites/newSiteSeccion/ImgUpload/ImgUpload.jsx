import './imgUpload.scss';
import { useState, useRef } from 'react';

const ImgUpload = ({ width, height, name, radius, formData }) => {

    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [position, setPosition] = useState('center');

    const handleImgChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setImage(URL.createObjectURL(selectedFile));
            formData.append(`name_${name}`, selectedFile);
            formData.append(`position_${name}`, position);
        };
    };

    const handleClick = () => fileInputRef.current.click();
    const handleChangue = (e) => setPosition(e.target.value);

    return (
        <div className='imgUploadTop'>

            <div
                className='imgUpload'
                style={{ width: width, height: height, borderRadius: radius }}
                onClick={handleClick}
            >
                <input
                    type="file"
                    name={name}
                    accept='image/*'
                    hidden
                    onChange={handleImgChange}
                    ref={fileInputRef}
                />

                {image ? (
                    <img src={image} alt="Selected"
                        className='imgUploadImg'
                        style={{ width: '100%', height: '100%', objectPosition: position, borderRadius: radius }} />
                ) : (
                    <p>Haz clic para subir una imagen</p>
                )}
            </div>

            <select name="position" onChange={handleChangue} defaultValue={position}>
                <option value="top">Arriba</option>
                <option value="center">Centro</option>
                <option value="bottom">Abajo</option>
            </select>

        </div>
    );
};

export default ImgUpload;