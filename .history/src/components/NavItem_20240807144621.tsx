import { Button } from "./ui/button";


type c

interface NavItemProps {
    category: category
}

const NavItem = ({}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button className="gap-1.5"></Button>
      </div>
    </div>
  );
};

export default NavItem;
