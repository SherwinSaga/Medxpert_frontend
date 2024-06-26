import React, { useState, useEffect} from 'react';
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
  MDBIcon
} from 'mdb-react-ui-kit';
import AdminNav from '../HeaderFooter/adminNav';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('tab1');

  //4 medicines
  const [medicines, setMedicines] = useState([]);

  //add medicine
  const [medicine_Name, setMedicineName] = useState("");
  const [medicine_description, setDescription] = useState("");
  const [medicine_dosage, setDosage] = useState("");
  const [medicine_uses, setUses] = useState("");
  const [medicine_side_effects, setSideEffects] = useState("");
  const [medicine_imgUrl, setImageUrl] = useState("");

  //review stats
  const [reviewCount, setReviewCount] = useState(0);

  //meidince stats
  const [medicineCount, setMedicineCount] = useState(0);

  //positive med
  const [positiveMed, setPositiveMed] = useState([]);

  //negative med
  const [negativeMed, setNegativeMed] = useState([]);

  //reports
  const [reports, setReports] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  //count the review
  useEffect(() => {
    fetch('http://localhost:8080/reviews/countreview')
      .then(response => response.json())
      .then(data => setReviewCount(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  //4 medicine
  useEffect(() => {
    fetch('http://localhost:8080/medicine/last_four_medicines')
      .then(response => response.json())
      .then(data => setMedicines(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //positive meds
  useEffect(() => {
    fetch('http://localhost:8080/reviews/positiveMed')
      .then(response => response.json())
      .then(data => setPositiveMed(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //negative meds
  useEffect(() => {
    fetch('http://localhost:8080/reviews/negativeMed')
      .then(response => response.json())
      .then(data => setNegativeMed(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //medicine count 
  useEffect(() => {
    fetch('http://localhost:8080/medicine/countMeds')
      .then(response => response.json())
      .then(data => setMedicineCount(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  
  //reports
  useEffect(() => {
    fetch('http://localhost:8080/report')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //add medicine 
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newMedicine = {
      medicine_Name,
      medicine_description,
      medicine_dosage,
      medicine_uses,
      medicine_side_effects,
      medicine_imgUrl
    };
  
    fetch('http://localhost:8080/medicine/add_medicine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMedicine)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });


    window.location.reload();
  };

  const handleclickRemove = (reviewID) => {
    fetch(`http://localhost:8080/report/delete_review/${reviewID}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete report');
      }
      
      return response.text();
    })
    .then(() => {
      
      fetchReports();
      console.log('Report deleted successfully');
    })
    .catch(error => {
      console.error('Error deleting report:', error);
    });
  };
  

  const handleclickIgnore = (reportId) => {
    fetch(`http://localhost:8080/report/ignore/${reportId}`, {
      method: 'DELETE'
    })
    .then(response => {
    if (!response.ok) {
      throw new Error('Failed to ignore report');
    }
    console.log('Report ignored successfully');
    })
    .catch(error => {
      console.error('Error ignoring report:', error);
    });

    window.location.reload();
  };

  return (
    <>
      <AdminNav />
      <div className="container mb-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <div className="left-panel" style={{ flex: '1', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
          <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', boxSizing: 'border-box' }}>
          {medicines.map((medicine) => (
            <MDBCard alignment='center' className='mb-1 card' style={{ backgroundColor: '#051650', color: 'white', flex: '1 1 calc(50% - 10px)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
              <MDBCardHeader></MDBCardHeader>
              <MDBCardBody>
              {medicine.medicine_Name}
              </MDBCardBody>
              <MDBCardFooter className='text-muted'></MDBCardFooter>
            </MDBCard>
          ))}
          </div>

          <p style={{ fontSize: '20px', marginTop: '20px' }}>Add Medicine:</p>
          
          <MDBRow tag="form" className='g-3' onSubmit={handleSubmit}>
            <MDBCol md="12">
              <MDBInput
                id='validationCustom01'
                required
                label='Medicine Name'
                size='sm'
                value={medicine_Name}
                onChange={(e) => setMedicineName(e.target.value)}
              />
            </MDBCol>

            <MDBCol md="12">
              <MDBTextArea 
                label="Description" 
                id="textAreaExample" 
                rows={3} 
                size='sm'
                value={medicine_description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </MDBCol>

            <MDBCol md="12">
              <div className='input-group has-validation'>
                <MDBInput
                  id='validationCustom02'
                  required
                  label='Dosage'
                  size='sm'
                  value={medicine_dosage}
                  onChange={(e) => setDosage(e.target.value)}
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
                value={medicine_uses}
                onChange={(e) => setUses(e.target.value)}
              />
            </MDBCol>

            <MDBCol md="12">
              <MDBInput
                name='sideEffects'
                id='validationCustom05'
                required
                label='Side Effects'
                size='sm'
                value={medicine_side_effects}
                onChange={(e) => setSideEffects(e.target.value)}
              />
            </MDBCol>

            <MDBCol md="12">
              <MDBInput
                name='imageUrl'
                id='validationCustom06'
                required
                label='Image URL'
                size='sm'
                value={medicine_imgUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </MDBCol>

            <MDBCol size="12">
              <MDBBtn type='submit' size='sm'>Add Medicine</MDBBtn>
            </MDBCol>
          </MDBRow>
          
        </div>


        <div className="center-panel" style={{ flex: '1', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
        <MDBTypography tag="h4" className="mb-0">Reviews reported by users<br/></MDBTypography>
          <section>
            <MDBContainer className="py-2">
              <MDBRow className="justify-content-center">
                {reports.map((report, index) => (
                 <MDBCol key={index} md="12" lg="10">
                  <MDBCard className="text-dark w-100">
                    <MDBCardBody className="p-4">
                      <div className="d-flex flex-start">
                        <div>
                          <MDBTypography tag="h6" className="fw-bold mb-1">
                            {report.reportedReviewID.user_id.usersname}
                          </MDBTypography>
                          <div className="d-flex align-items-center mb-3">
                          <span className="badge bg-primary mr-2" onClick={() => handleclickIgnore(report.reportID) }>Ignore</span>
                          <span className="badge bg-danger"  onClick={() => handleclickRemove(report.reportedReviewID.review_ID)}>Remove</span>
                    </div>
                          <p>{report.reportedReviewID.medicine_id.medicine_Name}</p>
                          <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">
                            {report.reportedReviewID.reviewdate}
                            </p>
                          </div>
                          <p className="mb-0">
                            {report.reportedReviewID.feedback}
                          </p>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                ))}
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
                        Positive
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink active={activeTab === 'tab3'} onClick={() => handleTabClick('tab3')}>
                        Negative
                      </MDBTabsLink>
                    </MDBTabsItem>
                  </MDBTabs>
                </MDBCardHeader>
                <MDBCardBody>
                  {activeTab === 'tab1' && <MDBCardText>The total number of medicines are {medicineCount}</MDBCardText>}
                  {activeTab === 'tab2' && <MDBCardText>The medicine with the most positive feedback is/are <br/><br/> {positiveMed.map(med => med.medicine_Name).join(', ')}</MDBCardText>}
                  {activeTab === 'tab3' && <MDBCardText>The medicine with the most negative feedback is/are <br/><br/> {negativeMed.map(med => med.medicine_Name).join(', ')}</MDBCardText>}
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{ flex: '1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <MDBCardHeader>Review Stats</MDBCardHeader>
            <MDBCardBody>
            <MDBCard>
              <MDBListGroup flush>
                <MDBListGroupItem>Total Reviews: {reviewCount}</MDBListGroupItem>
                
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
