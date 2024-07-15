import './bigImg.scss';

const BigImg = ({ img, border }) => {

    return (
        <>
            {img &&
                <div className='bigImg'>
                    <img src={img} alt="img" style={border === false ? { borderRadius: '0' } : {}} />
                    <div className='bigImg-cont'>
                        <img src={img} alt="img" style={border === false ? { borderRadius: '0' } : {}} />
                    </div>
                </div>
            }
        </>
    );
};

export default BigImg;