import React from "react";
import { Page, List, ListItem, Text, Button, Box, Icon } from "zmp-ui";
import { useCart } from "../hooks/useCart";
import { formatVND } from "../utils/price";
import CartBar from "../components/CartBar";

const CartPage: React.FC = () => {
  const { cart, changeQty, remove } = useCart();

  return (
    <Page className="p-4 pb-24">
      <Text.Header>Giỏ hàng</Text.Header>
      {cart.length === 0 ? (
        <Text>Giỏ hàng trống.</Text>
      ) : (
        <List>
          {cart.map((i) => (
            <ListItem
              key={i.product.id}
              title={i.product.name}
              subTitle={<span className="text-red-500">{formatVND(i.product.price)}</span>}
              suffix={
                <Box flex align="center" gap="2">
                  <Button size="small" onClick={() => changeQty(i.product.id, i.qty - 1)}>-</Button>
                  <Text>{i.qty}</Text>
                  <Button size="small" onClick={() => changeQty(i.product.id, i.qty + 1)}>+</Button>
                  <Button size="small" variant="tertiary" onClick={() => remove(i.product.id)}>
                    <Icon icon="zi-delete" />
                  </Button>
                </Box>
              }
            />
          ))}
        </List>
      )}
      <CartBar />
    </Page>
  );
};

export default CartPage;