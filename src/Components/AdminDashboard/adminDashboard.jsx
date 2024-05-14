import React, { useState } from 'react';
import Navigation from '../HeaderFooter/navigation';
import Footer from '../HeaderFooter/footer';
import {
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBRow,
  MDBCol,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBTypography,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
} from 'mdb-react-ui-kit';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navigation />
      <div className="container mb-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <div className="left-panel" style={{ flex: '1', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
          <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', boxSizing: 'border-box' }}>
            <MDBCard alignment='center' className='mb-1 card' style={{ backgroundColor: '#051650', color: 'white', flex: '1 1 calc(50% - 10px)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
              <MDBCardHeader>MEDICINE NAME</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>Description</MDBCardText>
                <MDBCardText>Dosage</MDBCardText>
                <MDBCardText>Uses</MDBCardText>
                <MDBCardText>Side Effects</MDBCardText>
                <MDBCardText>URL</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>

            <MDBCard alignment='center' className='mb-1 card' style={{ backgroundColor: '#051650', color: 'white', flex: '1 1 calc(50% - 10px)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
              <MDBCardHeader>MEDICINE NAME</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>Description</MDBCardText>
                <MDBCardText>Dosage</MDBCardText>
                <MDBCardText>Uses</MDBCardText>
                <MDBCardText>Side Effects</MDBCardText>
                <MDBCardText>URL</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>

            <MDBCard alignment='center' className='mb-1 card' style={{ backgroundColor: '#051650', color: 'white', flex: '1 1 calc(50% - 10px)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
              <MDBCardHeader>MEDICINE NAME</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>Description</MDBCardText>
                <MDBCardText>Dosage</MDBCardText>
                <MDBCardText>Uses</MDBCardText>
                <MDBCardText>Side Effects</MDBCardText>
                <MDBCardText>URL</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>

            <MDBCard alignment='center' className='mb-1 card' style={{ backgroundColor: '#051650', color: 'white', flex: '1 1 calc(50% - 10px)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
              <MDBCardHeader>MEDICINE NAME</MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>Description</MDBCardText>
                <MDBCardText>Dosage</MDBCardText>
                <MDBCardText>Uses</MDBCardText>
                <MDBCardText>Side Effects</MDBCardText>
                <MDBCardText>URL</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <p style={{ fontSize: '20px', marginTop: '20px' }}>Add Medicine:</p>
          <MDBRow tag="form" className='g-3'>
            <MDBCol md="12">
              <MDBInput
                id='validationCustom01'
                required
                label='Medicine Name'
                size='sm'
              />
            </MDBCol>

            <MDBCol md="12">
              <MDBTextArea 
                label="Description" 
                id="textAreaExample" 
                rows={3} 
                size='sm'
              />
            </MDBCol>

            <MDBCol md="12">
              <div className='input-group has-validation'>
                <MDBInput
                  id='validationCustom02'
                  required
                  label='Dosage'
                  size='sm'
                />
                <div className='invalid-feedback'>Please choose a dosage.</div>
              </div>
            </MDBCol>

            <MDBCol md="12">
              <MDBInput
                name='uses'
                id='validationCustom03'
                required
                label='Uses'
                size='sm'
              />
            </MDBCol>

            <MDBCol md="12">
              <MDBInput
                name='sideEffects'
                id='validationCustom05'
                required
                label='Side Effects'
                size='sm'
              />
            </MDBCol>

            <MDBCol md="12">
              <MDBInput
                name='imageUrl'
                id='validationCustom06'
                required
                label='Image URL'
                size='sm'
              />
            </MDBCol>

            <MDBCol size="12">
              <MDBBtn type='submit' size='sm'>Add Medicine</MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>

        <div className="center-panel" style={{ flex: '1', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
          <section>
            <MDBContainer className="py-2">
              <MDBRow className="justify-content-center">
                <MDBCol md="12" lg="10">
                  <MDBCard className="text-dark w-100">

                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h4" className="mb-0">
                        Spam Comments
                      </MDBTypography>
                      <p className="fw-light mb-4 pb-2">
                        Latest Flag Comments by users
                      </p>

                      <div className="d-flex flex-start">
                        <div>
                          <MDBTypography tag="h6" className="fw-bold mb-1">
                            Maggie Marsh
                          </MDBTypography>
                          <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                              March 07, 2021
                            </p>
                          </div>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it.
                          </p>
                        </div>
                      </div>
                    </MDBCardBody>

                    <hr className="my-0" />

                    <MDBCardBody className="p-4">
                      <div className="d-flex flex-start">
                        <div>
                          <MDBTypography tag="h6" className="fw-bold mb-1">
                            Lara Stewart
                          </MDBTypography>
                          <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                              March 15, 2021
                            </p>
                          </div>
                          <p className="mb-0">
                            Contrary to popular belief, Lorem Ipsum is not simply
                            random text. It has roots in a piece of classical Latin
                            literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney
                            College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and
                            going through the cites.
                          </p>
                        </div>
                      </div>
                    </MDBCardBody>

                    <hr className="my-0" />

                    <MDBCardBody className="p-4">
                      <div className="d-flex flex-start">
                        <div>
                          <MDBTypography tag="h6" className="fw-bold mb-1">
                            Alexa Bennett
                          </MDBTypography>
                          <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                              March 24, 2021
                            </p>
                          </div>
                          <p className="mb-0">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in
                            some form, by injected humour, or randomised words which
                            don't look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure.
                          </p>
                        </div>
                      </div>
                    </MDBCardBody>

                    <hr className="my-0" />

                    <MDBCardBody className="p-4">
                      <div className="d-flex flex-start">
                        <div>
                          <MDBTypography tag="h6" className="fw-bold mb-1">
                            Alexa Bennett
                          </MDBTypography>
                          <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                              March 30, 2021
                            </p>
                          </div>
                          <p className="mb-0">
                            It uses a dictionary of over 200 Latin words, combined
                            with a handful of model sentence structures, to generate
                            Lorem Ipsum which looks reasonable. The generated Lorem
                            Ipsum is therefore always free from repetition, injected
                            humour, or non-characteristic words etc.
                          </p>
                        </div>
                      </div>
                    </MDBCardBody>

                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>

        <div className="right-panel" style={{ flex: '1', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <MDBCard style={{ flex: '1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <MDBCardHeader>Medicine Stats</MDBCardHeader>
            <MDBCardBody>
              <MDBCard className='text-center'>
                <MDBCardHeader>
                  <MDBTabs className='card-header-tabs'>
                    <MDBTabsItem>
                      <MDBTabsLink active={activeTab === 'tab1'} onClick={() => handleTabClick('tab1')}>
                        Medicine List
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink active={activeTab === 'tab2'} onClick={() => handleTabClick('tab2')}>
                        Most Liked
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink active={activeTab === 'tab3'} onClick={() => handleTabClick('tab3')}>
                        Most Disliked
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>
                </MDBCardHeader>
                <MDBCardBody>
                  {activeTab === 'tab1' && <MDBCardText>The total number of medicines are 69 nya display guro ang 10 oldest medicine</MDBCardText>}
                  {activeTab === 'tab2' && <MDBCardText>The most liked medicine is Paracetamol nya display guro top 10 liked</MDBCardText>}
                  {activeTab === 'tab3' && <MDBCardText>The most disliked medicine is Antibiotic nya display sd dri ang top 10 disliked</MDBCardText>}
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{ flex: '1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <MDBCardHeader>Review Stats</MDBCardHeader>
            <MDBCardBody>
            <MDBCard>
              <MDBListGroup flush>
                <MDBListGroupItem>Total Reviews: 696969</MDBListGroupItem>
                <MDBListGroupItem>Total Spams: 212121</MDBListGroupItem>
                <MDBListGroupItem>Wanako kbaw say uban ibutang</MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;
