import React from "react";
import { Col, Row } from "@douyinfe/semi-ui";
import { Form, Toast, Button } from "@douyinfe/semi-ui";

const IndexPage = () => (
  <div
    style={{
      height: "calc( 100vh - 144px )",
    }}
  >
    <Row
      style={{
        height: "100%",
      }}
    >
      <Col
        span={6}
        style={{
          borderRight: "1px solid #ccc",
          height: "100%",
        }}
      >
        <div style={{ marginRight: "6px" }}>
          <Form
            onSubmit={(values) => handleSubmit(values)}
            style={{ width: "100%" }}
          >
            {({ formState, values, formApi }) => (
              <>
                <Form.Select
                  field="flow"
                  placeholder="请选择工作流"
                  style={{ width: "100%" }}
                >
                  <Form.Select.Option value="abc">SD 1.5</Form.Select.Option>
                  <Form.Select.Option value="ulikecam">
                    SDXL Base
                  </Form.Select.Option>
                  <Form.Select.Option value="jianying" disabled>
                    FLUX Base
                  </Form.Select.Option>
                  <Form.Select.Option value="xigua">
                    ControlNet
                  </Form.Select.Option>
                </Form.Select>
                <Form.Slider
                  field="width"
                  label="宽度"
                  showBoundary={true}
                ></Form.Slider>
                <Form.Slider
                  field="height"
                  label="高度"
                  showBoundary={true}
                ></Form.Slider>

                <Form.TextArea field="prompt" label="prompt"></Form.TextArea>

                {/* <Form.Input
                  field="phone"
                  label="PhoneNumber"
                  style={{ width: "100%" }}
                  placeholder="Enter your phone number"
                ></Form.Input>

                
                <Form.Input
                  field="password"
                  label="Password"
                  style={{ width: "100%" }}
                  placeholder="Enter your password"
                ></Form.Input> */}
                {/* <Form.Checkbox field="agree" noLabel>
                  I have read and agree to the terms of service
                </Form.Checkbox> */}
                <Button
                  style={{ width: "100%" }}
                  htmlType="submit"
                  type="primary"
                >
                  生成
                </Button>
              </>
            )}
          </Form>
        </div>
      </Col>
      <Col
        span={18}
        style={{
          background: "#dedede",
          height: "100%",
        }}
      >
        <div className="col-content">col-16</div>
      </Col>
    </Row>
  </div>
);

export default IndexPage;
