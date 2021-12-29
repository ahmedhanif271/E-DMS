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
  MDBCardHeader

} from 'mdb-react-ui-kit';
import DataTable from 'react-data-table-component';
const childColumns = [
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

const childData = [
  {
    id: 1,
    name: 'Ashar Ali',
    age: '12',
    status: 'Active',
    action: <GridButton iconName="user-times" color="red" />
  },
  {
    id: 1,
    name: 'Ashar Ali',
    age: '12',
    status: 'Active',
    action: <GridButton iconName="user-times" color="red" />
  },
  {
    id: 1,
    name: 'Ashar Ali',
    age: '12',
    status: 'Active',
    action: <GridButton iconName="user-times" color="red" />
  },
]

export function DonorSubProfile() {

  return (
    <div className="p-4 text-start w-100">

      <form>

        <div className="grey-text text-start">

          <MDBRow>
            <h5>Donor Information</h5>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>

            <MDBCol lg="4" className="py-1">
              <MDBInput label="Phone" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Email" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Whatsapp" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">

              <MDBInput label="Date of Birth" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Care of" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>

          </MDBRow>
          <hr />
          <MDBRow className="mt-3">
            <h5>Basic Information</h5>

            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select City</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select Region</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select Disctrict</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select Tehsil</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Town/Village" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Zone/Circle" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="UC" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>

          </MDBRow>

          <hr />
          <MDBRow>
            <h5>Documents</h5>
            <MDBCol lg="4" className="py-1">
              Donor picture: <input type="file" />
            </MDBCol>

            <MDBCol lg="4" className="py-1">
              Donor CNIC: <input type="file" />
            </MDBCol>

          </MDBRow>
        </div>

      </form>


    </div>
  );
}

export function DonorSubStatus() {

  return (
    <div className="p-4 text-start w-100">

      <form>
        <MDBRow>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Child adopted" type="text" value={"3"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Amount payable" type="text" value={"0"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Amount paid (Current Month)" type="text" value={"30000"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Total amount paid" type="text" value={"30000"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
        </MDBRow>
      </form>


    </div>
  );
}

export function DonorSubChild() {

  return (
    <div className="p-4 text-start w-100">
      <div className="w-100 d-flex p-4 justify-content-end" >
        <MDBBtn href='/home/donors/add' >Add Child</MDBBtn>
      </div>
      <DataTable
        pagination="true"
        columns={childColumns}
        data={childData}

      />

    </div>
  );
}