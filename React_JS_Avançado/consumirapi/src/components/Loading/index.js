import React from "react";
import PropTypes from "prop-types";
import { Container, Loader } from "./styled";

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    < Container >
      <div>
        <Loader />
        <span>Loading...</span>
      </div>
    </ Container >
  );
}

Loading.defaulProps = {
  isLoading: false,
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
}
