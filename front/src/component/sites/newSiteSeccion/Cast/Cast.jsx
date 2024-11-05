import CastAll from "./CastAll/CastAll";
import CastOnly from "./CastOnly/CastOnly";

const Cast = ({ values, handleValues, setFiles, setValues }) => {

    return (
        <>
            {values?.category === 'art' &&
                (values?.subCategory === 'musicalGroup' || values?.subCategory === 'play' ||
                    values?.subCategory === 'danceGroup'
                    ? <CastAll values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />
                    : <CastOnly values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />
                )
            }

            {values?.category === 'stream' &&
                (values?.subCategory === 'lives' || values?.subCategory === 'documentals' ||
                    values?.subCategory === 'publications'
                    ? <CastAll values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />
                    : <CastOnly values={values} handleValues={handleValues} setFiles={setFiles} setValues={setValues} />
                )
            }
        </>
    );
};

export default Cast;