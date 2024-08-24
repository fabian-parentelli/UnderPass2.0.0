import numbers from "numeros_a_palabras";

const NumToString = ({ number }) => {

    numbers.numero2word().Config._setCentsPlural("CENTAVOS");

    const numToReturn = numbers.numero2word(number).toString();

    return <p style={{ fontSize: '12px', marginTop: '12px' }}>
        {numToReturn}
    </p>;
};

export default NumToString;