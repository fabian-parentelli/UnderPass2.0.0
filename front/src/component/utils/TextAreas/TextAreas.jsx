import './textAreas.scss';
import { useRef } from 'react';


const TextAreas = ({ placeholder, value, handleChange, name }) => {

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <textarea
            className='textAreas'
            ref={textareaRef}
            onInput={adjustHeight}
            placeholder={placeholder}
            value={value || ''}
            onChange={handleChange}
            name={name}
        >
        </textarea>
    );
};

export default TextAreas;