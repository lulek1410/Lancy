import ClientsGrid from "../organisms/Clients/ClientsGrid";

const ClientsLayout = () => {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-4">
      <div className="w-full bg-fantasy-500">Filters and actions bar</div>
      <ClientsGrid />
    </div>
  );
};

export default ClientsLayout;
