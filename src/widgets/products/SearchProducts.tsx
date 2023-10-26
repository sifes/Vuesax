import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IProduct } from '@/pages/products';
import { Popper } from '@mui/material';
interface SearchProductsProps {
    products: IProduct[]
}



export const SearchProducts: React.FC<SearchProductsProps> = ({ products }) => {
    const [options, setOptions] = React.useState<IProduct[]>(products);

    React.useEffect(() => {
        setOptions(products);
    }, [products]);


    return (
        <Autocomplete
            id="search-products"
            options={options}
            groupBy={(option) => option.category}
            disableClearable
            clearOnEscape={false}
            getOptionLabel={(option) => option.title}
            sx={{
                bgcolor: 'secondary.main',
                borderRadius: '10px',
                color: '#fff',
                boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
                '.Mui-focused': {
                    color: '#fff',
                    borderRadius: '10px',
                },
            }}
            onChange={(event, value) => value ? window.location.href = `/products/${value.id}` : null}
            renderInput={(params) => <TextField {...params} label="Search for a product" />}
            PopperComponent={(params) => <Popper {...params} sx={{
                '.MuiPaper-root': {
                    bgcolor: 'secondary.main',
                },
                '.MuiAutocomplete-listbox': {
                    bgcolor: 'secondary.main',
                },
                '.MuiAutocomplete-groupLabel': {
                    position: 'relative',
                    bgcolor: 'secondary.main',
                    color: 'text.dark',
                },
            }} />}
            fullWidth
        />
    )
}

