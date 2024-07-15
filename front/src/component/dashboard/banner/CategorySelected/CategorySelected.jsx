const CategorySelected = ({ handleChange, isRequired = true }) => {

    return (
        <>
            <label>Categotía</label>
            <select name="category" onChange={handleChange} required={isRequired}>
                <option value=""></option>
                <option value="us">Nosotros</option>
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