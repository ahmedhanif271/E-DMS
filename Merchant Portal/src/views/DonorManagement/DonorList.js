import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GridButton } from '../../CustomComponents/GridButton';

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
  MDBCardHeader,
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';


const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Child Adopted',
    selector: row => row.childCount,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Payment Status',
    selector: row => row.paymentStatus,
  },
  {
    name: 'Actions',
    selector: row => row.action,
  },
];

const data = [
  {
    id: 1,
    name: 'Ashar Ali',
    childCount: '3',
    status: 'Active',
    paymentStatus: <MDBBadge className='mx-2' color='danger'>
      Not Paid
    </MDBBadge>,
    action: <GridButton iconName="edit" color="green" />
  }
]
export function DonorList() {

  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Donors</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> Donor Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/donors/add' >Add New</MDBBtn>
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
