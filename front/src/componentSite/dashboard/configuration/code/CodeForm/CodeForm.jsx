import './codeForm.scss';
import TextAreas from '../../../../../component/utils/TextAreas/TextAreas';

const CodeForm = ({ values, handleCodeChange, handleSubmit }) => {

    return (
        <form className='codeForm' onSubmit={handleSubmit}>
            <h2>Agregar código</h2>

            <section>

                <div>
                    <label>Nombre</label>
                    <input type="text" name='name' onChange={handleCodeChange} value={values.name} />
                </div>

                <div>
                    <label>Ruta</label>
                    <input type="text" name='route' onChange={handleCodeChange} value={values.route} />
                </div>

                <section className='codeNewShort'>

                    <div>
                        <label>Tipo</label>
                        <select name="type" onChange={handleCodeChange} value={values.type}>
                            <option value="">Elegir</option>
                            <option value="front">Font</option>
                            <option value="back">Back</option>
                        </select>
                    </div>

                    <div>
                        <label>Versión</label>
                        <input type="text" name='version' onChange={handleCodeChange} value={values.version} />
                    </div>

                </section>

                <div>
                    <label htmlFor="code">Código</label>
                    <TextAreas
                        placeholder='Código'
                        value={values.code}
                        handleChange={handleCodeChange}
                        name='code'
                    />
                </div>

                <div>
                    <label htmlFor="code">Descripción</label>
                    <TextAreas
                        placeholder='Descripción del código'
                        value={values.description}
                        handleChange={handleCodeChange}
                        name='description'
                    />
                </div>

            </section>

            <button className='btn btnA'>Agregar</button>
        </form>
    );
};

export default CodeForm;