import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ number }) => {
    const [timeLeft, setTimeLeft] = useState(number * 60); // 10 minutos en segundos

    useEffect(() => {
        if (timeLeft === 0) {
            console.log('¡El tiempo se ha agotado!');
            return;
        };
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < number ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <p>
            {formatTime(timeLeft)}
        </p>
    );
};

export default CountdownTimer;
