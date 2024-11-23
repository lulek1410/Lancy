import React from "react";
import Card from "../molecules/Card";
import { testCardInfoData } from "./CardTestData";

const ClientsLayout = () => {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-4">
      <div className="w-full bg-fantasy-500">Filters and actions bar</div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
        {testCardInfoData.map((cardInfo) => (
          <Card key={cardInfo.id} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
};

export default ClientsLayout;
