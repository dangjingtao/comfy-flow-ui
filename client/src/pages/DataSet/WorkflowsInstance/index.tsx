import React from "react";
import { Card, Row, Col } from "@douyinfe/semi-ui";

const IndexPage = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--semi-color-fill-0)",
        padding: 20,
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg"
              />
            }
            title="sd1.5基础工作流"
            bordered={false}
          >
            Card Content
          </Card>
        </Col>
        <Col span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg"
              />
            }
            title="sdXL基础工作流"
            bordered={false}
          >
            Card Content
          </Card>
        </Col>
        <Col span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg"
              />
            }
            title="sd1.5基础工作流"
            bordered={false}
          >
            Card Content
          </Card>
        </Col>
        <Col span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg"
              />
            }
            title="sd1.5基础工作流"
            bordered={false}
          >
            Card Content
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="Card Title" bordered={false}>
            Card Content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card Title" bordered={false}>
            Card Content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IndexPage;
