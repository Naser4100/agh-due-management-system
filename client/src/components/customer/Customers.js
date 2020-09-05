import React, { useState, useContext, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Table,
  Grid,
  TableHeaderRow,
  TableFilterRow,
  VirtualTable,
  TableColumnResizing,
} from '@devexpress/dx-react-grid-material-ui';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


import Dashboard from '../layout/Dashboard'

import CustomerContext from '../../context/customer/customerContext'

const Customers = () => {
  const customerContext = useContext(CustomerContext);

  const { customers, getCustomers, deleteCustomer } = customerContext;
  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line
  }, []);

  const handleEdit = (_id) => {
    console.log(_id)
  }

  const handleDelete= (_id) => {
    deleteCustomer(_id)
  }

  const [filteringStateColumnExtensions] = useState([
    { columnName: 'action', filteringEnabled: false },
  ]);


  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'fatherName', title: 'Father Name' },
    { name: 'village', title: 'Village' },
    { name: 'totalDue', title: 'Total Due' },
    { name: 'deposited', title: 'Deposited' },
    { name: 'phone', title: 'Phone' },
    { name: 'policeStation', title: 'Police Station' },
    { name: 'district', title: 'District' },
    { name: 'dateAdded', title: 'Date Added' },
    { name: 'action', title: 'Action', columnFilteringEnabled: false },
  ]);

  const data = customers.map(c => {
    return {
      name: c.name,
      fatherName: c.fatherName,
      village: c.village,
      totalDue: c.totalDue,
      deposited: c.deposited,
      phone: c.phone,
      policeStation: c.policeStation,
      district: c.district,
      dateAdded: c.dateAdded,
      action: (<div>
        <IconButton onClick={() => handleEdit(c._id)} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(c._id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>)
    }
  })

  const [defaultColumnWidths] = useState([
    { columnName: 'name', width: 150} ,
    { columnName: 'fatherName', width: 150 },
    { columnName: 'village', width: 150} ,
    { columnName: 'totalDue', width: 100 },
    { columnName: 'deposited', width: 100 },
    { columnName: 'phone', width: 150 },
    { columnName: 'policeStation', width: 150  },
    { columnName: 'district', width: 150  },
    { columnName: 'dateAdded', width: 250  },
    { columnName: 'action', width: 240 },
  ]);


  return (
    <Dashboard>
      <Paper>
        <Grid
          rows={data}
          columns={columns}
        >
          <FilteringState columnExtensions={filteringStateColumnExtensions}/>
          <IntegratedFiltering />
          <Table />
          <VirtualTable height="auto"/>
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          <TableHeaderRow />
          <TableFilterRow />
        </Grid>
      </Paper>
    </Dashboard>
  )
}

export default Customers;