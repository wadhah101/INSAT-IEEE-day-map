import { NextPage } from "next";
import styled from "styled-components";
import MainMap from "../components/MainMap";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 95%;
  padding: 0 1rem;
`;

const index: NextPage = () => {
  return (
    <Container>
      <MainMap />
    </Container>
  );
};

export default index;
