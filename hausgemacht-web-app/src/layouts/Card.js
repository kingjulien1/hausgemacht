import React from "react";
import { Row, Col } from "antd";

export const CardLayout = ({ children }) => {
  return (
    <Col span={8} style={{ padding: "10px" }}>
      {children}
    </Col>
  );
};

export const CardsLayout = ({ children }) => {
  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={16}>{children}</Row>
    </div>
  );
};
