import styled from "styled-components";
import profile from "../assets/profile.jpg";

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  color: var(--baige);
  .contact-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 50px;
    height: 100%;
    align-content: center;
    align-items: center;
  }
  
  p {
    line-height: 1.3;
  }
  p.recoleta{margin-bottom: 30px; color: var(--green)}

  .clip-img {
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    img {
      max-width: 200px; 
    }
  }
  
  .right {  
    text-align: center;
  }
  .right ul {
    margin-top: 20px;
  }
  .right ul li {
    display: inline-block;
    padding-right: 20px;
    position: relative;
  }
  .right ul li:after {
    content:'';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background: #ccc;
    margin-right: 10px;
  }
  .right ul li:last-of-type:after{
    display:none;
  }
  .origin {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <div className="contact-wrap">
          <div className="left">
            <p className="recoleta">Welcome!</p>
            <p>hello! welcome to my website</p>

            <p>currently working at studio-jt as front-end junior developer</p>
            <p>I am passionate about making...</p>
            <p>I am specializing in...</p>
          </div>

          <div className="right">
            <div className="clip-img">
              <img src={profile} alt="" />
            </div>
            <ul>
              <li>Minyeo kang</li>
              <li><a href="https://github.com/minyeokang">Github</a></li>
              <li>Email</li>
            </ul>
          </div>
        </div>

        {/* <div className="origin">
          <p>Code by Minyeo</p>
          <p>Most of the layout is inspired from selfaware.com </p>
        </div> */}
      </ContactContainer>
    </>
  );
};

export default Contact;
