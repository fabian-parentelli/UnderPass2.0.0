import './today.scss';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const Today = ({ date }) => {

    const isData = date ? new Date(date) : new Date();
    const currentDate = format(isData, "eeee d 'de' MMMM 'de' yyyy", { locale: es });

    return (
        <p className={!date ? 'today' : 'noToday'}>
            {currentDate ? currentDate : ''}
        </p>
    );
};

export default Today;