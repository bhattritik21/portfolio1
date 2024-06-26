import styled from "styled-components";

export const Img = styled.img`
  width: 80%;
  height: 35vh;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media screen and (max-width:420px)
  {
    display: contents;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width:420px)
  {
    padding-bottom:1px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: white;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2.2rem" : "1.2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  display: block;
  min-height: 120px;
`;

export const UtilityList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;
export const TagList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1rem;
`;
