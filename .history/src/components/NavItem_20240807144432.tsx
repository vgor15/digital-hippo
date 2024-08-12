import { Button } from "./ui/button";

const NavItem = () => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button className="gap-1">Home</Button>
      </div>
    </div>
  );
};

export default NavItem;
