import './drawer.scss';
import Flap from '../Flap/Flap';
import { useState } from 'react';
import DrawerBody from '../DrawerBody/DrawerBody';

const Drawer = () => {

    const [vew, setVew] = useState(false);

    return (
        <div className={`drawer ${vew ? 'open' : ''}`}>
            <div className='drawerIn'>
                <Flap vew={vew} setVew={setVew} />
                <DrawerBody vewDrawer={vew} closed={setVew} />
            </div>
        </div>
    );
};

export default Drawer;