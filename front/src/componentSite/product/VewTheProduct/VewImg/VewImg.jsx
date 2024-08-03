import './vewImg.scss';

const VewImg = ({ img }) => {

    return (
        <div className='vewImg'>
            {img && 
                <div className='vewImgDiv'>
                    <img src={img.imgUrl} alt="" />
                </div>
            }
        </div>
    );
};

export default VewImg;