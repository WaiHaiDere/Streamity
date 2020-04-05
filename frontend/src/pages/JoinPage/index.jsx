import React from "react";
import JoinPageContainer from "../../containers/JoinPageContainer";

import JoinPage from "./JoinPage";
import UsernamePage from "./UsernamePage";

export default () => {
  return (
    <JoinPageContainer>
      <JoinPage />
      <UsernamePage />
    </JoinPageContainer>
  );
};
