import { SyntheticEvent } from "react";
import styled from "styled-components";

const ImageWrap = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  width: 12.5rem;
  height: 12.5rem;
  @media (max-width: 30rem) {
    width: 8.5rem;
    height: 8.5rem;
  }
  @media (max-width: 25rem) {
    width: 6.5rem;
    height: 6.5rem;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  background-color: rgba(255, 255, 255, 0.2);
`;

interface ImageBoxProps {
  url?: string;
}

const ImageBox = ({ url }: ImageBoxProps) => {
  const onLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { currentTarget } = event;
    if (currentTarget.naturalHeight === 114 && currentTarget.naturalWidth === 200) {
      currentTarget.src = "/not_found.png";
    }
  };
  return (
    <ImageWrap>
      <img src={url ? url : `/not_found.png`} alt="" loading="lazy" onLoad={onLoad} />
    </ImageWrap>
  );
};

export default ImageBox;
