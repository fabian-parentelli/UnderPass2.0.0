import './backImg.scss';

const BackImg = ({ url, height }) => {

    return (
        <div
        style={{ backgroundImage: `url(${url})`, height: `${height}vh` }}
            className='backImg'
        >
        </div>
    );
};

export default BackImg;