import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBCardHeader
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';

import { ChildDetails } from './CustomerSetup';
const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Age',
    selector: row => row.age,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Actions',
    selector: row => row.action,
  },
];

const data = [
  {
    id: 1,
    name: 'Ahmed Hanif',
    age:'22',
    status:'Active',
    action: <MDBBtn href='/home/customer/add' >Add New</MDBBtn>
  },
  {
    id: 2,
    name: 'Syed Abdul Rafay',
    age:'50',
    status:'InActive'
  },
  {
    id: 3,
    name: 'Ashar Ali',
    age:'12',
    status:'Active'
  },
  {
    id: 4,
    name: 'Abdul Samad',
    age:'32',
    status:'Active'
  },
  {
    id: 5,
    name: 'Hunzala Ali',
    age:'10',
    status:'InActive'
  },
  {
    id: 6,
    name: 'Ali',
    age:'29',
    status:'Active'
  },
  {
    id: 7,
    name: 'Maria',
    age:'42',
    status:'InActive'
  },
]
export function CustomerList() {

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Customers List</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/customer/add' >Add New</MDBBtn>
        </div>
        <MDBRow>
          <MDBCardBody>
            <DataTable
              pagination="true"
              columns={columns}
              data={data}
           
            />
          </MDBCardBody>
        </MDBRow>
      </MDBCard>

    </div>
  );
}
