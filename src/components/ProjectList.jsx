import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './ProjectCard';
import ProjectCardIMG1 from '../assets/img/projectcard/palm-springs.jpg';
import ProjectCardIMG2 from '../assets/img/projectcard/southern-water.jpg';
import ProjectCardIMG3 from '../assets/img/projectcard/the-rumms.jpg';
import '../assets/style/projectlist.css'

const projects = [
    {
      title: 'Palm Springs',
      type: '2-storey Terrace Homes',
      desc: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry',
      price: 'RM600,000*',
      repayment: 'RM3,XXX',
      description: 'Lorem Ipsum is simply dummy text.',
      img: ProjectCardIMG1
    },
    {
      title: 'Southern Water',
      type: 'Waterfront Bungalow',
      desc: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry',
      price: 'RM2,600,000',
      repayment: 'RM1X,XXX',
      description: 'Lorem Ipsum is simply dummy text.',
      img: ProjectCardIMG2
    },
    {
      title: 'The Ruums',
      type: 'Semi-Detached Homes',
      desc: 'Lorem Ipsum is simply dummy text of theprinting and typesetting industry',
      price: 'RM600,000',
      repayment: 'RM3,XXX',
      description: 'Lorem Ipsum is simply dummy text.',
      img: ProjectCardIMG3
    },
  ];

function ProjectList({isMobile}) {
    // Default no. of project card
    var defaultVisibleCount = 3; 
    if (isMobile) {
      defaultVisibleCount = 2;
    }
    const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);
    
    const handleShowMore = () => {
      setVisibleCount((prevCount) => prevCount + 1); // Show 1 more items
    }
    return (
      <Container fluid className="projectlist text-center" id="project">
        <div className="projectlist-content ">
          <div className="projectlist-title1">Newly Launched Homes</div>
          <hr className="mx-auto projectlist-hr" />
          <div className="projectlist-title2 my-4">Our exclusive range of custom designed homes</div>
          <Row className="mx-4 mt-4 m-0">
            {projects.slice(0, visibleCount).map((project, index) => (
              <Col className="p-0" key={index} sm={12} md={4} lg={4}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
          { /* Only show button when items remained */ }
          {visibleCount < projects.length && ( // Show button only if there are more items to show
          <div className="text-center mt-2">
            <button className="btn primary-btn" onClick={handleShowMore}>
              Show More
            </button>
          </div>
          )}
        </div>  
      </Container>

    );
}
  
export default ProjectList;
