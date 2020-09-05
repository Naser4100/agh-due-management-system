import React, { useState, useContext } from 'react'
import {FormControl, InputLabel, FormHelperText, Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import TextBox from '../common/TextBox'
import Dashboard from '../layout/Dashboard';

import CustomerContext from '../../context/customer/customerContext'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const AddCustomer = () => {
  const customerContext = useContext(CustomerContext);
  const { addCustomer } = customerContext

  const classes = useStyles();

  const [name, setName] = useState('');
  const [deposited, setDeposited] = useState('');
  const [totalDue, setTotalDue] = useState('');
  const [phone, setPhone] = useState('');
  const [policeStation, setPoliceStation] = useState('');
  const [village, setVillage] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [district, setDistrict] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addCustomer({name, deposited, totalDue, phone, policeStation, village, fatherName, district})
    console.log(name, deposited);
  }

  return (
    <Dashboard>
      <form className={classes.root} onSubmit={onSubmit}>
        <div>
          <TextBox
            label='Name'
            setter = {(e) => setName(e.target.value)}
            value={name}
          />

          <TextBox
            label='Father Name'
            value={fatherName}
            setter = {(e) => setFatherName(e.target.value)}
          />
        </div>

        <div>
          <TextBox
            label='Village'
            value={village}
            setter = {(e) => setVillage(e.target.value)}
          />

          <TextBox
            label='Total Due'
            value={totalDue}
            setter = {(e) => setTotalDue(e.target.value)}
          />
        </div>

        <div>
          <TextBox
            label='Deposited'
            value={deposited}
            setter = {(e) => setDeposited(e.target.value)}
            />

          <TextBox
            label='Phone'
            value={phone}
            setter = {(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <TextBox
            label='Police Station'
            value={policeStation}
            setter = {(e) => setPoliceStation(e.target.value)}
          />

          <TextBox
            label='District'
            value={district}
            setter = {(e) => setDistrict(e.target.value)}
          />
        </div>
      <Button type='submit' variant='contained' color='primary'>Save</Button>
      </form>
    </Dashboard>
  )
}
export default AddCustomer;