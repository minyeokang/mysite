import catImg from "../assets/imgs/768x724_lottie.png";
import ufoImg from "../assets/imgs/768x724_ufo.png";
import cyImg from "../assets/imgs/768x433_cy.jpg";
import bookImg from "../assets/imgs/768x521_book.png";
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
      border-bottom: 1px solid #ccc;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 80px 1fr;
    pointer-events: none;
    .date {
    }
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
      pointer-events: none;
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
    listItem.removeEventListener("mousemove", handleMouseMove);
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
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <a href="https://cy-world.netlify.app/" target="_blank" rel="noreferrer">
              <div className="content">
                <div className="date">2023</div>
                <div>cyworld.com</div>
              </div>
              <div className="content-img">
                <figure className="content-thumb">
                  <img src={cyImg} alt="" />
                </figure>
              </div>
            </a>
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="https://lottie-animal-walking.netlify.app/" target="_blank" rel="noreferrer">
              <div className="content">
                <div>2023</div>
                <div>national dog`s day</div>
              </div>
              <div className="content-img">
                <div>
                  <img src={catImg} alt="" />
                </div>
              </div>
            </a>
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="https://book-review-kakao.netlify.app/" target="_blank" rel="noreferrer">
              <div className="content">
                <div>2022</div>
                <div>book review</div>
              </div>
              <div className="content-img">
                <figure className="content-thumb">
                  <img src={bookImg} alt="" />
                </figure>
              </div>
            </a>
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="https://ufo-gsap.netlify.app/" target="_blank" rel="noreferrer">
              <div className="content">
                <div>2022</div>
                <div>ufo quiz</div>
              </div>
              <div className="content-img">
                <figure className="content-thumb">
                  <img src={ufoImg} alt="" />
                </figure>
              </div>
            </a>
          </li>
        </ul>
      </ListContents>
    </>
  );
};

export default List;
