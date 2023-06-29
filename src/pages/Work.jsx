import styled from "styled-components";
import List from "../components/List";

const ListContainer = styled.div`
  overflow: hidden;
  background: var(--baige);
  height: 100%;
  padding: 0 20px;
`;
const ListHeader = styled.div`
  margin: 90px 0 50px;
  p.recoleta{color:var(--newBlue);}
`;

const Work = () => {
  return (
    <>
      <ListContainer>
        <ListHeader>
          <p className="recoleta">Experience</p>
        </ListHeader>

        <div>
          bio. make simple story about work but long enough for scroll Motion
          i will also add some svg on the background flowing around 
        </div>


        <ListHeader>
          <p className="recoleta">Projects</p>
        </ListHeader>

        <List />
      </ListContainer>
    </>
  );
};

export default Work;
