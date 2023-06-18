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
      padding: 10rem 0;
      border-bottom: 1rem solid #999;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 10% 15% minmax(150px, 25%) 25% 25%;
    pointer-events: none;
  }
  
  .content > div {
    padding: 10rem 0;
  }

  .icon-wrap {
    display: flex;
    align-items: center;

    div {
      width: 20rem;
      height: 20rem;
    }
  }

  .icon1 svg path {
    fill: #999;
  }

  .icon2 {
    margin-left: -11px;
    z-index: -1;
    svg path {
      fill: white;
    }
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
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="content">
              <div className="icon-wrap">
                <div className="icon1">
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_116_153)">
                      <path
                        d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                        fill="url(#paint0_linear_116_153)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_116_153"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DF99F7" />
                        <stop offset="1" stopColor="#FFDBB0" />
                      </linearGradient>
                      <clipPath id="clip0_116_153">
                        <rect width="200" height="200" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="icon2">
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_116_153)">
                      <path
                        d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                        fill="url(#paint0_linear_116_153)"
                      />
                    </g>
                    <defs>
                      <stop stopColor="#DF99F7" />
                      <stop offset="1" stopColor="#FFDBB0" />
                      <clipPath id="clip0_116_153">
                        <rect width="200" height="200" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>date</div>
              <div>url</div>
              <div>role</div>
              <div>date</div>
            </div>
            <div className="content-img">
              <figure className="content-thumb">
                <img src={miffy} alt="" />
              </figure>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="icon-wrap">
                <div className="icon1">
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_116_153)">
                      <path
                        d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                        fill="url(#paint0_linear_116_153)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_116_153"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DF99F7" />
                        <stop offset="1" stopColor="#FFDBB0" />
                      </linearGradient>
                      <clipPath id="clip0_116_153">
                        <rect width="200" height="200" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="icon2"></div>
              </div>
              <div>date</div>
              <div>url</div>
              <div>role</div>
              <div>date</div>
            </div>
            <div className="content-img">
              <div>
                <img src={miffy} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="icon-wrap">
                <div className="icon1"></div>
                <div className="icon2"></div>
              </div>
              <div>date</div>
              <div>url</div>
              <div>role</div>
              <div>date</div>
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
