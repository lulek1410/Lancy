import { IListItem } from "./index.types";

interface Props extends IListItem {
  className?: string;
}

const ListItem = (props: Props) => {
  const { content, className } = props;

  return <li className={`${className}`}>{content}</li>;
};

export default ListItem;
