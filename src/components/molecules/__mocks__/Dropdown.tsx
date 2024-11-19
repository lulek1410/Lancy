import { Props } from "../Dropdown.types";

import "./Dropdown.css";

const Dropdown = jest.fn((props: Props) => (
  <div data-testid="Dropdown">Dropdown</div>
));

export default Dropdown;
