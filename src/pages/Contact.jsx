import styled from "styled-components";
const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position:fixed; 
  top: 0;
  left: 0;
  .make{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 50rem;
  }
`;

const Contact = () => {
  return (
    <>
            <ContactContainer>
              <div className="make">
              <div className="left">
              <p>hello! welcome to my website<br/>
              i am enthusiastic blah blah promote yourself</p>
              </div>

              <div className="right">
                <img src="" alt="" />
                <p>minyeokang</p>
                <p>currently working at studio JT</p>
                <p>github, email,</p>
                <p>code by minyeo</p>
                <p>most of the layout is inspired from selfaware.com </p>
              </div>
              </div>
              
              
            </ContactContainer>
    </>
  );
};

export default Contact;
