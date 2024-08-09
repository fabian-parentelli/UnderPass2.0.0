import { useLoginContext } from "../../../context/LoginContext";

const CategorySelected = ({ handleChange, isRequired = true }) => {

    const { user } = useLoginContext();

    return (
        <>
            <label>Categotía</label>
            <select name="category" onChange={handleChange} required={isRequired}>
                <option value=""></option>
                {user && user.data && user.data.role !== 'user' && <option value="us">Nosotros</option>}
                <option value="advertising">Publicidad</option>
                <option value="events">Eventos</option>
                <option value="sites">Sitios</option>
                <option value="products">Productos</option>
                <option value="news">Noticias</option>
            </select>
        </>
    );
};

export default CategorySelected;