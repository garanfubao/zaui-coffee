import React from "react";
import { Page, Box, Text, Button } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, cartTotalSelector, defaultAddressSelector, pointsState } from "../state/index";
import type { CartItem, Address } from "../types";
import { formatVND } from "../utils/price";
import { useNavigate } from "zmp-ui";

const CheckoutPage: React.FC = () => {
  const total = useRecoilValue<number>(cartTotalSelector);
  const address = useRecoilValue<Address | null>(defaultAddressSelector);
  const setPoints = useSetRecoilState(pointsState);
  const navigate = useNavigate();
  const cart = useRecoilValue<CartItem[]>(cartState);

  const onPay = () => {
    const earned = Math.floor(total / 10000) * 10;
    setPoints((p) => p + earned);
    navigate("/");
  };

  return (
    <Page className="p-4 pb-20">
      <Text.Header>Trang thanh toán</Text.Header>

      <Box className="mb-3 p-4 rounded-xl bg-white">
        {!address ? (
          <Box flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text className="text-gray-500">Bạn chưa có địa chỉ</Text>
              <Text size="small">Vui lòng thêm địa chỉ để giao hàng</Text>
            </Box>
            <Button onClick={() => navigate("/address/new")}>Thêm</Button>
          </Box>
        ) : (
          <Box>
            <Text.Title>Địa chỉ giao hàng</Text.Title>
            <Text>{address.fullname} | {address.phone}</Text>
            <Text size="small">{address.detail}, {address.ward}, {address.district}, {address.province}</Text>
          </Box>
        )}
      </Box>

      <Box className="mb-3 p-4 rounded-xl bg-white">
        <Text.Title>Sản phẩm đã chọn ({cart.length})</Text.Title>
        {cart.map((i) => (
          <Box key={i.product.id} className="py-2 flex justify-between">
            <Text>{i.product.name} x{i.qty}</Text>
            <Text className="text-red-500">{formatVND(i.product.price * i.qty)}</Text>
          </Box>
        ))}
      </Box>

      <Box className="p-4 rounded-xl bg-white">
        <Text.Title>Tạm tính: {formatVND(total)}</Text.Title>
        <Button className="mt-3" disabled={total <= 0 || !address} onClick={onPay}>Thanh toán</Button>
      </Box>
    </Page>
  );
};

export default CheckoutPage;
