import './today.scss';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const Today = () => {

    const currentDate = format(new Date(), "eeee d 'de' MMMM 'de' yyyy", { locale: es });

    return (
        <p className='today'>
            {currentDate ? currentDate : ''}
        </p>
    );
};

export default Today;