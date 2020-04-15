import styled from "styled-components";

const StyledHistorySection = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #013c63;
    font-family: Lucida Grande, sans-serif;
  }

  h2 {
    font-family: Lucida, sans-serif;
  }
`;

const StyledIndivHistory = styled.div`
  font-family: Lucida Grande, sans-serif;
  color: #013c63;
  margin: 0% 10%;
`;

const History = () => (
  <StyledHistorySection>
    <h1>History</h1>
    <StyledIndivHistory>
      <h2>Software Engineering Intern - Hy-Vee Inc.</h2>
      <p>
        <i>Current</i>
      </p>
      <p>Created software for millions to use through Next.js and React</p>
      <h2>Scala Software Development Apprenticeship - Banno</h2>
      <p>
        <i>Summer 2019</i>
      </p>
      <p>
        Created and manipulated RESTful microservices using Scala and functional
        programming principles
      </p>
      <h2>Undergraduate Teaching Assistant - Iowa State University</h2>
      <p>
        <i>Fall 2018 – Spring 2019</i>
      </p>
      <p>
        Lead weekly labs and hosted office hours; teaching students the
        fundamentals of Java and Object-oriented programming
      </p>
      <h2>Web Development Internship - Orchard Hill Church</h2>
      <p>
        <i>Summer 2018</i>
      </p>
      <p>Created and customized a website using a content management system</p>
    </StyledIndivHistory>
  </StyledHistorySection>
);

export default History;
