import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
//import AppNavbar from '../../components/AppNavBar/AppNavBar';
//import AppSidebar from '../../components/AppSideBar/AppSideBar';
import styles from './dashboard.module.scss';
import Cards from '../../components/Card/Cards';
import Layout from '../../Layout/Layout';
const CompanyhrDashboard = () => {
  const role = 'companyhr';

  return (

    <Layout role={role}>

  
      <Container fluid className={styles.dashboardContent}> 
        <Row> 
          <Col xs={12} md={6} lg={4} className="mb-4"> 
            <Cards title="Internship Details" description="View internship details" link="/internship-details" />

          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Cards title="Interview Details" description="Review interview details" link="/interview-details" />

          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Cards title="Practice Sessions" description="practice sessions" link="/manage-practice-sessions" />

          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4"> 
            <Cards title="Active Interns" description="Track intern progress" link="/active-interns-status" />

          </Col>
	        <Col xs={12} md={6} lg={4} className="mb-4"> 
            <Cards title="Profile Settings" description=" Student Profile Settings" link="/profile-settings"  />
          </Col>

        </Row>
      </Container>
      </Layout>
);
};

export default CompanyhrDashboard;
