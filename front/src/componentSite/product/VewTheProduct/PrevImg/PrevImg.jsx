import './prevImg.scss';

const PrevImg = ({ imgs, isImg, setIsImg }) => {

    return (
        <div className='prevImg'>
            {imgs.map((prod, index) => (
                <div key={prod._id} className='prevImgDiv'
                    style={isImg === index ? { borderColor: '#f45c14' } : { borderColor: '#8da4a2' }}
                    onMouseOver={()=> setIsImg(index)}
                >
                    <img src={prod.imgUrl} alt="amigo" />
                </div>
            ))}
        </div>
    );
};

export default PrevImg;