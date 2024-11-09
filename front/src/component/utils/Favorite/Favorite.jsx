import './favorite.scss';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useLoginContext } from '../../../context/LoginContext';
import { newFavoriteApi } from '../../../helpers/users/newFavorite.api.js';

const Favorite = ({ id }) => {

    const [favorites, setFavorites] = useState([]);
    const { user, current } = useLoginContext();

    useEffect(() => {
        if (user && user.data) {
            const favorite = user.data.favorites.includes(id)
            if (favorite) setFavorites([...favorites, id]);
        };
    }, [user.data]);

    const handleFavorite = async (id) => {
        if (favorites.includes(id)) setFavorites(favorites.filter(fav => fav !== id));
        else setFavorites([...favorites, id]);
        const response = await newFavoriteApi({ favorite: id });
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            current();
        };
    };

    return (
        <div onClick={() => handleFavorite(id)} className='favorite'>
            {user.logged && (favorites.includes(id)
                ? <StarIcon sx={{ color: '#00756F' }} className='star' />
                : <StarBorderIcon sx={{ color: 'gray' }} className='star' />
            )}
        </div>
    );
};

export default Favorite;