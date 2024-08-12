import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";


type category = typeof PRODUCT_CATEGORIES

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
