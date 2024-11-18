import './imgUpload.scss';
import { useState, useRef } from 'react';

const ImgUpload = ({ width, height, name, radius, setFiles, img, setValues }) => {

    const fileInputRef = useRef(null);
    const [image, setImage] = useState(img?.url ? img?.url : null);
    const [position, setPosition] = useState(img?.position || 'center');

    const handleImgChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const renamedFiles = selectedFiles.map((file) => {
            const newName = name;
            return new File([file], newName, { type: file.type });
        });
        setFiles((prevFiles) => [...prevFiles, ...renamedFiles]);
        if (renamedFiles.length > 0) {
            const file = renamedFiles[0];
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        };
    };

    const handleClick = () => fileInputRef.current.click();
    const handleChangue = (e) => {
        setPosition(e.target.value);
        setValues((prevValues) => ({ ...prevValues, [`position_${name}`]: e.target.value }));
    };

    return (
        <div className='imgUploadTop' style={{ width, height }}>

            <div
                className='imgUpload'
                style={{ width: '100%', height: '100%', borderRadius: radius }}
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
                    <img
                        src={image}
                        alt="Selected"
                        className='imgUploadImg'
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius, objectPosition: position }}
                    />
                ) : (
                    <p>Haz clic para subir una imagen</p>
                )}
            </div>

            <select name="position" onChange={handleChangue} defaultValue={position}>
                <option value="top">Arriba</option>
                <option value="center">Centro</option>
                <option value="bottom">Abajo</option>
                <option value="left">Izquierda</option>
                <option value="right">Derecha</option>
            </select>

        </div>
    );
};

export default ImgUpload;