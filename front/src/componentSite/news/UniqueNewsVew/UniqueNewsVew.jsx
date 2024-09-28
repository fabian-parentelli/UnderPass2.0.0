import './uniqueNewsVew.scss';
import Today from '../../../component/utils/Today/Today';

const UniqueNewsVew = ({ news }) => {

    return (
        <div className='uniqueNewsVew'>
            <div className='uniqueNewsVewTop'>
                <Today date={news.date} />
                <p>{news.location.city} - {news.location.province}</p>
            </div>

        </div>
    );
};

export default UniqueNewsVew;

// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 
// Estoy acá terminar de armar la noticia completa 