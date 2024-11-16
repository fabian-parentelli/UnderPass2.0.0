import './sitePageQr.scss';
import QRCode from 'qrcode';
import { useEffect, useState, useRef } from 'react';

const SitePageQr = ({ url, name }) => {

    const [qr, setQr] = useState('');
    const printRef = useRef(null);

    useEffect(() => {
        QRCode.toDataURL(url, { scale: 6 }).then(setQr).catch(err => console.error(err));
    }, [url]);

    const handleDownload = () => {
        const qrImage = document.getElementById('qrImage');
        const url = qrImage.src;
        const a = document.createElement('a');
        a.href = url;
        a.download = name + 'qr';
        a.click();
    };

    const handlePrint = () => {
        const printContent = printRef.current;
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        printWindow.document.open();
        printWindow.document.write(`
            <html>
            <head><title>Imprimir</title></head>
            <body style="text-align: center;">
                ${printContent.outerHTML}
                <script>
                    window.onload = function() {
                        window.print();
                        window.onafterprint = function() {
                            window.close();
                        };
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };

    return (
        <div className='sitePageQr'>

            <div className='sitePageQrPrint' ref={printRef}>
                <h2>{name}</h2>
                {qr && <img src={qr} alt='qrCode' id='qrImage' />}
            </div>

            <div className='sitePageQrBtns'>
                <button className='btn btnUS' onClick={handleDownload}>Descargar</button>
                <button className='btn btnUS' onClick={handlePrint}>Imprimir</button>
            </div>
        </div>
    );
};

export default SitePageQr;
