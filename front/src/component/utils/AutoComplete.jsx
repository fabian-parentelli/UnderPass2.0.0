import { Autocomplete, TextField } from '@mui/material';

const AutoComplete = ({ data, handleChange }) => {

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={data}
            onChange={handleChange}
            clearOnBlur={true}
            sx={{
                width: '100%',
                '& .MuiInputBase-input': {
                    fontSize: '12px',
                    height: '100%',
                    borderRadius: '30px',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    paddingLeft: '5px',
                    fontFamily: 'Pangolin, cursive',
                },
            }}
            renderInput={(params) => <TextField {...params} label="Busqueda"
                InputLabelProps={{
                    style: { color: '#fff', fontSize: '13px', fontFamily: 'Pangolin, cursive' }
                }}
            />}
        />
    );
};

export default AutoComplete;