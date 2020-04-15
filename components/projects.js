import styled from "styled-components";
import Link from "next/link";

const StyledProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #013c63;
    font-family: Lucida Grande, sans-serif;
  }

  h2 {
    font-family: Lucida, sans-serif;
  }

  a:link {
    color: #013c63;
    text-decoration: none;
  }

  a:visited {
    color: #013c63;
    text-decoration: none;
  }
`;

const StyledIndivProject = styled.div`
  font-family: Lucida Grande, sans-serif;
  color: #013c63;
  margin: 0% 10%;
`;

const Projects = () => (
  <StyledProjectsSection>
    <h1>Personal Projects</h1>
    <StyledIndivProject>
      <Link href="https://github.com/EthanVDub/moodpoll">
        <a>
          <h2>moodpoll</h2>
        </a>
      </Link>
      <p>
        A simple personal mood poll that tracks logs responses -
        <a href="https://moodpoll.now.sh"> moodpoll.now.sh</a>
      </p>
      <Link href="https://github.com/EthanVDub/votit">
        <a>
          <h2>votit</h2>
        </a>
      </Link>
      <p>
        A platform for voting and polling on current affairs, sports, opinions,
        etc - <a href="https://votit.now.sh"> votit.now.sh</a>
      </p>
      <Link href="https://github.com/EthanVDub/evdub">
        <a>
          <h2>dev site</h2>
        </a>
      </Link>
      <p>My Personal Site - you're on it</p>
    </StyledIndivProject>
  </StyledProjectsSection>
);

export default Projects;
