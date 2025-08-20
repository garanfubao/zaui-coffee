import React from "react";
import { Card, Button, Box, Text, Avatar } from "zmp-ui";
import { useCart } from "../hooks/useCart";
import type { Product } from "../types";
import { formatVND } from "../utils/price";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const { add } = useCart();
  return (
    <Card className="mb-3">
      <Box flex justifyContent="space-between" align="center" gap="4">
        <Box flex align="center" gap="4">
          <Avatar src={product.image} size={56} className="rounded-xl" />
          <Box>
            <Text.Title>{product.name}</Text.Title>
            <Text className="text-red-500">{formatVND(product.price)}</Text>
          </Box>
        </Box>
        <Button size="small" onClick={() => add(product)}>+
        </Button>
      </Box>
    </Card>
  );
};

export default ProductItem;