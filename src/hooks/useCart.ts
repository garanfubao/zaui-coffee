import { useRecoilState } from "recoil";
import { cartState } from "../state";
import type { Product, CartItem } from "../types";

export const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const add = (product: Product, qty = 1, patch?: Partial<CartItem>) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx > -1) {
        const clone = [...prev];
        clone[idx] = { ...clone[idx], qty: clone[idx].qty + qty };
        return clone;
      }
      return [...prev, { product, qty, ...patch }];
    });
  };

  const remove = (productId: number) => setCart((prev) => prev.filter((i) => i.product.id !== productId));

  const changeQty = (productId: number, qty: number) =>
    setCart((prev) => prev.map((i) => (i.product.id === productId ? { ...i, qty: Math.max(1, qty) } : i)));

  const clear = () => setCart([]);

  return { cart, add, remove, changeQty, clear };
};