import './cloudFile.scss';
import { useState, useRef } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CloudFile = ({ onChange, folderName, contClass, id }) => {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);

    const handleImgChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const newFiles = [...files, ...selectedFiles];
        newFiles.sort((a, b) => a.name.localeCompare(b.name));
        setFiles(newFiles);
        const imageArray = newFiles.map(file => URL.createObjectURL(file));
        setImages(imageArray);
        const formData = new FormData();
        newFiles.forEach(file => {
            formData.append('files', file);
        });
        formData.append('folderName', folderName);
        if (id) formData.append('pid', id);
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

// cfRect - cfCircle