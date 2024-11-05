import './shiftSities.scss';

const ShiftSities = ({ values }) => {

    return (
        <div className='shiftSities'>
            {values.category === 'premises' &&
                <>
                    <h6>Sistema de turnos</h6>


                </>
            }
        </div>
    );
};

export default ShiftSities;