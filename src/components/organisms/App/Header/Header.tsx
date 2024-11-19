import Logo from "@/components/atoms/App/Logo";
import AvatarDropdown from "@/components/molecules/App/AvatarDropdown";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between bg-gradient-to-t from-[hsl(210,89%,26%)] from-10% to-congress-blue-800 to-30% px-10">
      <Logo />
      <AvatarDropdown />
    </header>
  );
};

export default Header;
