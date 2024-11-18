import CastAll from "./CastAll/CastAll";
import CastOnly from "./CastOnly/CastOnly";

const Cast = ({ values, setValues, setFiles }) => {

    return (
        <>
            {values?.category === 'art' &&
                (values?.subCategory === 'musicalGroup' || values?.subCategory === 'play' ||
                    values?.subCategory === 'danceGroup'
                    ? <CastAll values={values} setFiles={setFiles} setValues={setValues} />
                    : <CastOnly values={values} setFiles={setFiles} setValues={setValues} />
                )
            }

            {values?.category === 'stream' &&
                (values?.subCategory === 'lives' || values?.subCategory === 'documentals' ||
                    values?.subCategory === 'publications'
                    ? <CastAll values={values} setFiles={setFiles} setValues={setValues} />
                    : <CastOnly values={values} setFiles={setFiles} setValues={setValues} />
                )
            }
        </>
    );
};

export default Cast;