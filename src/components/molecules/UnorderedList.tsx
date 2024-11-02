import ListItem from "../atoms/ListItem";
import { IListItem } from "../atoms/ListItem/index.types";

interface Props {
  items: IListItem[];
  className?: string;
}

const UnorderedList = (props: Props) => {
  const { items, className } = props;
  return (
    <ul className={`${className}`}>
      {items.map((item, index) => (
        <ListItem key={index} content={item.content} />
      ))}
    </ul>
  );
};

export default UnorderedList;
