import CastAll from "./CastAll/CastAll";
import CastOnly from "./CastOnly/CastOnly";

const Cast = ({ formData, values, handleValues }) => {

    return (
        <>
            {values?.category === 'art' &&
                (values?.subCategory === 'musicalGroup' || values?.subCategory === 'play' ||
                    values?.subCategory === 'danceGroup'
                    ? <CastAll formData={formData} values={values} handleValues={handleValues} />
                    : <CastOnly formData={formData} values={values} handleValues={handleValues} />
                )
            }

            {values?.category === 'stream' &&
                (values?.subCategory === 'lives' || values?.subCategory === 'documentals' ||
                    values?.subCategory === 'publications'
                    ? <CastAll formData={formData} values={values} handleValues={handleValues} />
                    : <CastOnly formData={formData} values={values} handleValues={handleValues} />
                )
            }
        </>
    );
};

export default Cast;