import styled from "styled-components";
import Header from "../components/Header";
import List from "../components/List";

const ListContainer = styled.div``;
const ListHeader = styled.div`
  margin-bottom: 100px;
`;

const Projects = () => {
  return (
    <>
    <Header />
      <div className="super-container">
        <div className="wrap">
          <ListContainer>
            <ListHeader>
              <h1>Projects</h1>

              <div className="role">
                <p className="design"></p>
                <p className="development"></p>
              </div>
            </ListHeader>

            <List />
          </ListContainer>
        </div>
      </div>
    </>
  );
};

export default Projects;
