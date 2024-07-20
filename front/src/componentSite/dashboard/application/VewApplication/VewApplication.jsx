import './vewApplication.scss';
import { useEffect } from 'react';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Title from '../../../../component/dashboard/Title/Title';
import TableVewApplication from './TableVewApplication/TableVewApplication';
import { getAllApplicationApi } from '../../../../helpers/applications/getAllApplicatiosn.api.js';

const VewApplication = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllApplicationApi({});




        }; fetchData();
    }, []);

    return (
        <div className='vewApplication'>
            <Title Icon={AccessibilityIcon} name='Ver Solicitudes' />

            <TableVewApplication />
        </div>
    );
};

export default VewApplication;