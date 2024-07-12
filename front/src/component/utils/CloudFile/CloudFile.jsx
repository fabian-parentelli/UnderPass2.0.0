import './cloudFile.scss';
import { useState, useRef } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CloudFile = ({ onChange, folderName, contClass }) => {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);

    const handleImgChange = (e) => {
        const files = e.target.files;
        const imageArray = [];
        for (let i = 0; i < files.length; i++) {
            imageArray.push(URL.createObjectURL(files[i]));
        };
        setImages(imageArray);
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        };
        formData.append('folderName', folderName);
        onChange(formData);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={`cloudFile ${contClass}`} onClick={handleClick}>
            <input
                type="file"
                name='files'
                accept='image/*'
                className='file-inside'
                hidden
                ref={fileInputRef}
                multiple
                onChange={handleImgChange}
            />

            {images.length > 0 ? (
                <div className='image-container'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={images.length === 1 ? 'imgFile' : 'thumbnail'}
                            alt={`preview-${index}`}
                        />
                    ))}
                </div>
            ) : (
                <CloudUploadIcon style={{ fontSize: 90 }} className='cloudUploadIcon' />
            )}
        </div>
    );
};

export default CloudFile;

// cfRect cfCircle