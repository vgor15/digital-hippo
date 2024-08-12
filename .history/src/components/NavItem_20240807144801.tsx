import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";


type category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: category
    handleOpen: ()
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
