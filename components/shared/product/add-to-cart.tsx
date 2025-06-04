"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
//import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  //const { toast } = useToast();

  const handleAddToCart = async ()=> {
    const res = await addItemToCart(item);

    if(!res.success) {
        toast.error(res.message)
        return;
    }

    toast(`${item.name} added to the cart`, {
        action: {
            label: <span style={{ color: 'white', fontWeight: 'bold' }}>Go to cart</span>,
            onClick: () => router.push('/cart')
        },
        style: { backgroundColor: 'black', color: 'white' }
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
