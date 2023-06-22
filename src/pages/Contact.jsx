import styled from "styled-components";
import profile from "../assets/test2.jpg";
import Header from "../components/Header";

const ContactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
 

  .make{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 50px;
  }
  img {
    width: 200px;
  }
`;

const Contact = () => {
  return (
    <>
    <Header/>
            <ContactContainer>
              <div className="make">
              <div className="left">
              <p>hello! welcome to my website<br/>
              i am enthusiastic blah blah promote yourself</p>
              </div>

              <div className="right">
                <img src={profile} alt="" />
                <p>minyeokang</p>
<p>clip img with cute shape haha</p>
                <p>currently working at studio JT</p>
                <p>what i did for this company? a tag </p>
                <p>schema markup posting 
                  albert motion 
                  maintanence webstie 
                  some creation 
                what i learn and stuff 
                be very detail. 
                </p>
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
