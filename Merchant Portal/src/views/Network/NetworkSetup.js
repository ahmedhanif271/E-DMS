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



export function NetworkSetup() {

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Setup child profile</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Child Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
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
                      <select className="form-select">
                        <option>Any Disability</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Any Siblings</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Brother" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Sister" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Special Skills" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Aim of life" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Present Address" icon="envelope" group type="text" validate error="wrong"
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
                    <h5>School Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Session" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="Admission Date" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Admission No" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>

                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Select student class</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Monthly Fee" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Select school medium</option>
                        <option value="1">Govt.</option>
                        <option value="2">Private</option>

                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Phone" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Principal/Headmaster name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Principal/Headmaster phone" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Princial/Headmaster is ?</option>
                        <option value="1">Employee</option>
                        <option value="2">Owner</option>

                      </select>
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <h5>School Bank Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="Branch Code" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Account No" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Account Title" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>

                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <h5>Father Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="Date of Death" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Reason of death" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Occupation" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Designation" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>

                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <h5>Mother Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="Date of Death" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Reason of death" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Occupation" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Designation" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Education" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Mobile Number" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Phone Number" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Present Address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Permanent Address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <h5>Gurdian Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Relation with child </option>
                        <option value="1">Mother</option>
                        <option value="2">Paternal Uncle</option>
                        <option value="3">Others</option>
                      </select>
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Occupation" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Designation" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Education" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Mobile Number" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Phone Number" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Present Address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>

                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <h5>Gurdian Bank Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Branch code" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Account No" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Account Title" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>

                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <h5>Documents</h5>
                    <MDBCol lg="4" className="py-1">
                      Child picture: <input type="file" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      Child birth certificate: <input type="file" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      School attendance certificate: <input type="file" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      Father death certificate: <input type="file" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      CNIC father: <input type="file" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      CNIC mother: <input type="file" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      CNIC gurdian: <input type="file" />
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/child">Close</MDBBtn><MDBBtn className="mx-2  my-5">Add</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
