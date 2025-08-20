import React from "react";
import { Page, Box, Avatar, Text, List, ListItem } from "zmp-ui";
import { useNavigate } from "zmp-ui";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page className="p-4">
      <Box className="rounded-xl p-4 bg-red-600 text-white mb-4">
        <Text size="small">Xin chào,</Text>
        <Text.Title className="text-white">Duc Anh Nguyen</Text.Title>
      </Box>

      <List>
        <ListItem title="Chỉnh sửa thông tin" />
        <ListItem title="Đơn hàng" link="/checkout" />
        <ListItem title="Lịch sử tích điểm" link="/rewards" />
        <ListItem title="Sổ địa chỉ" onClick={() => navigate("/addresses")} />
      </List>

      <Box textAlign="center" mt={8}>
        <Avatar src="https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/avatar.webp" size={72} />
        <Text className="mt-2">Gà Rán FKT</Text>
      </Box>
    </Page>
  );
};

export default ProfilePage;