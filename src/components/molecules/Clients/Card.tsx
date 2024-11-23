import ClientInformation from "@/components/atoms/Clients/ClientInformation";

import LessonsExceptions from "@/components/atoms/Clients/LessonsExceptions";
import { CardInfo } from "@/types/global";

export interface Props {
  cardInfo: CardInfo;
}

const Card = ({ cardInfo }: Props) => {
  const { id, lessonsExceptions, ...clientInformation } = cardInfo;
  return (
    <section
      className="rounded-lg bg-[radial-gradient(circle_at_top_left,#7ec1fb_10%,#badcfd_10%,#badcfd_20%,#e0eefe_20%)] p-3 shadow-md"
      aria-labelledby={`card-title-${cardInfo.name}-${cardInfo.surname}`}
    >
      <ClientInformation {...clientInformation} />
      <LessonsExceptions exceptions={lessonsExceptions} />
    </section>
  );
};

export default Card;
