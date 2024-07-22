import SnackbarAlert from './SnackbarAlert';
import React, { useState, useEffect } from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const Copy = ({ values }) => {
    const [open, setOpen] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(values)
            .then(() => setOpen(true))
            .catch(err => console.error('Error al copiar el ID:', err));
    };

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => { setOpen(false) }, 3000);
            return () => clearTimeout(timer);
        };
    }, [open]);

    return (
        <>
            <FileCopyIcon onClick={copyToClipboard} style={{ fontSize: '16px', cursor: 'pointer' }} />
            <SnackbarAlert message={{ status: 'success', mess: 'Copiado' }} open={open} />
        </>
    );
};

export default Copy;
