import { Props } from "../Dropdown.types";

import "./Dropdown.css";

const Dropdown = jest.fn((props: Props) => (
  <>
    <div data-testid="Dropdown">Dropdown </div>
    <div data-testid="Dropdown-children">{props.children}</div>
  </>
));

export default Dropdown;
