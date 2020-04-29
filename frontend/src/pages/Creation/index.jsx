import React from "react";
import MediaSelectionPageContainer from "../../containers/MediaSelectionPageContainer";

import MediaSelectionPage from "./MediaSelectionPage";
import PinPage from "./PinPage";
import UsernamePage from "../../components/UsernamePage/UsernamePage";
import BufferPage from "../BufferPage/BufferPage"

export default () => {
  return (
    <MediaSelectionPageContainer>
      <MediaSelectionPage />
      <UsernamePage />
      <PinPage />
      <BufferPage />
    </MediaSelectionPageContainer>
  );
};
