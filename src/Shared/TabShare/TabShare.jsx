import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddProductsByAdmin from '../../Components/Dashboard/AddProductsByAdmin/AddProductsByAdmin';
import AddLaptopByAdmin from '../../Components/Dashboard/AddProductsByAdmin/AddLaptopByAdmin';
import AddBluetoothByAdmin from '../../Components/Dashboard/AddProductsByAdmin/AddBluetoothByAdmin';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabShare = () => {

    const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div className='flex justify-center py-10'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Phone's" {...a11yProps(0)} />
              <Tab label="Laptop's" {...a11yProps(1)} />
              <Tab label="Bluetooth's" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div><AddProductsByAdmin /></div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div><AddLaptopByAdmin /></div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div><AddBluetoothByAdmin /></div>
          </CustomTabPanel>
        </Box>
      </div>
    );
};

export default TabShare;