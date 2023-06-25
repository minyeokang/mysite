import miffy from "../assets/react.svg";
import styled from "styled-components";
const ListContents = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    li {
      position: relative;
      cursor: pointer;
      padding: 10px 0;
      border-bottom: 1px solid #999;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 80px 1fr;
    pointer-events: none;
  }
  
  .content > div {
    padding: 10px 0;
  }

  .content-img {
    position: absolute;
    opacity: 0;
    max-width: 200px;
    min-width: 200px;
    top: 60%;
    left: 40%;
    pointer-events: none;
    z-index: 1;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;

const List = () => {
  const handleMouseMove = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");

    const center_x = listItem.offsetLeft + thumb.offsetWidth / 2;
    const center_y = listItem.offsetTop + thumb.offsetHeight / 2;
    const tween_x = e.clientX - center_x;
    const tween_y = e.clientY - center_y;

    thumb.style.left = `${tween_x}px`;
    thumb.style.top = `${tween_y}px`;
  };

  const handleMouseLeave = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");

    if (!thumb) {
      return;
    }

    thumb.style.opacity = "0";
    listItem.pxoveEventListener("mousemove", handleMouseMove);
  };

  const handleMouseEnter = (e) => {
    const listItem = e.currentTarget;
    const thumb = listItem.querySelector(".content-img");

    if (!thumb) {
      return;
    }

    thumb.style.opacity = "1";

    listItem.addEventListener("mousemove", handleMouseMove);
  };

  return (
    <>
      <ListContents>
        <ul>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="content">
              <div>2023</div>
              <div><a href="cyworld.netlify.app">cyworld.com</a></div>
            </div>
            <div className="content-img">
              <figure className="content-thumb">
                <img src={miffy} alt="" />
              </figure>
            </div>
          </li>
          <li>
            <div className="content">
              <div>2023</div>
              <div><a href="lottie.netlify.app">national dog`s day</a></div>
            </div>
            <div className="content-img">
              <div>
                <img src={miffy} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div>2022</div>
              <div><a href="book.netlify.app">book review</a></div>
            </div>
            <div className="content-img">
              <figure className="content-thumb">
                <img src={miffy} alt="" />
              </figure>
            </div>
          </li>
          <li>
            <div className="content">
              <div>2022</div>
              <div><a href="ufo.netlify.app">ufo quiz</a></div>
            </div>
            <div className="content-img">
              <figure className="content-thumb">
                <img src={miffy} alt="" />
              </figure>
            </div>
          </li>
        </ul>
      </ListContents>
    </>
  );
};

export default List;
