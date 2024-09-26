import { Fragment } from "react";
import { useLoginContext } from "../../../context/LoginContext";

const BookingUserData = ({ book }) => {

    const { user } = useLoginContext();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {book && book.users.map((boo, index) => (
                        boo.active &&
                        <Fragment key={index}>
                            <tr >
                                <td>
                                    <p>{boo.data.name}</p>
                                    <p style={{ fontSize: '12px' }}>{boo.data.email}</p>
                                    {user.data.role !== 'user' && <p style={{ fontSize: '10px' }}>{boo.uid}</p>}
                                </td>
                                <td>{new Date(boo.date).toLocaleDateString()}</td>
                                <td>{getType(boo.type)}</td>
                                <td style={{ color: boo.active ? 'green' : 'red' }}>
                                    {boo.active ? 'SI' : 'NO'}
                                </td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingUserData;

function getType(types) {
    const data = {
        'product': () => { return 'Producto' },
        'event': () => { return 'Evento' },
        'default': () => { return 'otro' }
    };
    return (data[types] || data['default'])();
};