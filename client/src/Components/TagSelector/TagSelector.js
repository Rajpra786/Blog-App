import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Chip} from '@mui/material';
import Categories from '../../Categories';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '80vw',
    },
  },
};


function getStyles(tag, categoryName, theme) {
  return {
    fontWeight:
      categoryName.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const TagSelector = (props) => {
  const theme = useTheme();
  const [categoryName, setCategoryName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    props.setTags(typeof value === 'string' ? value.split(',') : value);
    setCategoryName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '80vw',mt:'1vh'}}>
        <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={categoryName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {Categories.map((tag) => (
            <MenuItem
              key={tag.category}
              value={tag.tagName}
              style={getStyles(tag.category, categoryName, theme)}
            >
              {tag.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default TagSelector;