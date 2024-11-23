import { Props } from "../Placeholder";

const Placeholder = jest.fn((props: Props) => (
  <div data-testid="Placeholder">Placeholder</div>
));

export default Placeholder;
