import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Popper } from '@mui/material';
import { IProduct, SearchProductsProps } from '@/utils/types';
import { AutocompleteStyles, PopperStyles } from './ui';

export const SearchProducts: React.FC<SearchProductsProps> = ({ products }) => {
    const [options, setOptions] = React.useState<IProduct[]>(products);

    React.useEffect(() => {
        setOptions(products);
    }, [products, setOptions]);

    return (
        <Autocomplete
            id="search-products"
            options={options}
            groupBy={(option) => option.category}
            disableClearable
            clearOnEscape={false}
            getOptionLabel={(option) => option.title}
            sx={AutocompleteStyles}
            onChange={(_event, value) => value ? window.location.href = `/products/${value.id}` : null}
            renderInput={(params) => <TextField {...params} label="Search for a product" />}
            PopperComponent={(params) => <Popper {...params} sx={PopperStyles} />}
            fullWidth
        />
    )
}

