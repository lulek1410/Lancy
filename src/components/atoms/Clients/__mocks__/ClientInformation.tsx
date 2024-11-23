import React from "react";

import { Props } from "../ClientInformation";

const ClientInformation = jest.fn((props: Props) => {
  return <div data-testid="ClientInformation">ClientInformation</div>;
});

export default ClientInformation;
