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
  MDBCardHeader,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';



export function DonorSetup() {

  return (
    <div className="p-4 text-start w-100">
  <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a >Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='/home/donors'>Donors</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Setup Profile</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Setup Donor profile</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

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
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/donors">Close</MDBBtn><MDBBtn className="mx-2  my-5">Add</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
