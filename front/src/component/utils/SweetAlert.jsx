import Swal from 'sweetalert2';
import { useEffect } from 'react';

const SweetAlert = ({ onClose, message, icon = 'success' }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onClose]);

    Swal.fire({
        title: message,
        icon: icon,
        position: 'bottom-end',
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        timer: 2000
    });

    return null;
};

export default SweetAlert;