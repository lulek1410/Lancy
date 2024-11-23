import React from "react";

import Card from "@/components/molecules/Clients/Card";

import { testCardInfoData } from "./CardTestData";

const ClientsGrid = () => {
  return (
    <div className="3xl:grid-cols-4 grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
      {testCardInfoData.map((cardInfo) => (
        <Card key={cardInfo.id} cardInfo={cardInfo} />
      ))}
    </div>
  );
};

export default ClientsGrid;
