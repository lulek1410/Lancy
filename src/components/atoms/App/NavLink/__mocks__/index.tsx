import { Props } from "../index.types";

const NavLink = jest.fn((props: Props) => (
  <div data-testid="NavLink">NavLink</div>
));

export default NavLink;
