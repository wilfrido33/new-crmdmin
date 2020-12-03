import styled from "styled-components";


const sizes={
    large:34,
    medium:24,
    small:20
};
export const HeadLine = styled.div`
  ${({ size }) => {
    return `
            font-size:${sizes[size || "large"]}px;
            font-family: 'Rubik', sans-serif;
            font-weght:bold;
        `;
  }}
`;