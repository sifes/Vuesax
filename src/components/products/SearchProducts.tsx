import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
interface Film {
    title: string;
    year: number;
}


export function SearchProducts() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<readonly Film[]>([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            if (active) {
                setOptions([...[]]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="search-products"
            sx={{
                width: '100%',
                bgcolor: '#0F1642',
                borderRadius: '8px',
                boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
            }}
            filterOptions={(x) => x}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.title}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <>
                    {/* Box sx={{ display: 'flex', justifyContent: 'space-between' }} */}
                    <TextField
                        {...params}
                        placeholder='Search here'
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    <SearchIcon sx={{ margin: '0 -20px 0 0 ' }}></SearchIcon>
                                </>
                            ),
                        }}
                    />
                </>
            )}
        />
    );
}


