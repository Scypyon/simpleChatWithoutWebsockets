import styled from "styled-components";

export const CommentWrapper = styled.div`
  position: relative;
`;

export const CommentCnt = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10% 10%;
  border-bottom: 1px solid #4caf50;
  p {
    margin: 0;
  }
`;

export const DateCnt = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8em;
  h5 {
    margin: 0;
  }
`;
