import './textAreas.scss';
import { useRef, useEffect } from 'react';

const TextAreas = ({ placeholder, value, handleChange, name }) => {

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; 
            textarea.style.height = `${textarea.scrollHeight + 12}px`;
        }
    };

    useEffect(() => { adjustHeight() }, [value]);

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