/* ts-ignore */
import React, { useState, useRef } from "react";
import { Form, Col, Row, Button, Toast } from "@douyinfe/semi-ui";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import Titilebar from "@/components/Titlebar";
import styles from "./styles.module.less";
import {
  IllustrationConstruction,
  IllustrationSuccess,
  IllustrationFailure,
  IllustrationNoAccess,
  IllustrationNoContent,
  IllustrationNotFound,
  IllustrationNoResult,
} from "@douyinfe/semi-illustrations";
import request from "../../../../lib/request";

const Login = () => {
  // const { Option } = Form.Select;
  const [formVal, setFormVal] = useState({});
  const navigate = useNavigate();
  const ref = useRef();

  const login = async () => {
    const { formApi } = ref.current;
    await formApi.validate();

    // navigate("/home");

    const {
      data: { success, message },
    } = await request({
      url: "http://localhost:8008/api/login",
      method: "post",
      data: formVal,
    });

    if (success) {
      localStorage.setItem("login", "true");
      navigate("/home");
    } else {
      Toast.error(message || "未知错误");
    }
  };

  return (
    <div className={styles.loginWrap}>
      {/* <IllustrationFailure /> */}
      <div className={styles.loginBox}>
        <div style={{ width: 400, margin: "30px auto 20px" }}>
          <div style={{ width: "400px", textAlign: "center" }}>
            <h1>Comfy-workflow-UI</h1>
            {/* <img style={{ width: "100%" }} src="/logo.png" alt="" /> */}
            {/* <IconGithubLogo style={{ fontSize: 100 }} /> */}
          </div>
          {/* <h1 className={styles.brand}>MYJAVLIB</h1> */}
        </div>
        <Form ref={ref} className={styles.noDrag} onValueChange={setFormVal}>
          {/* <Form.Select
              noLabel
              field="Role"
              placeholder="角色"
              style={{ width: "100%" }}
            >
              <Option value="admin">管理员</Option>
              <Option value="user">普通用户</Option>
              <Option value="guest">访客</Option>
            </Form.Select> */}
          <Form.Input
            required
            noLabel
            field="username"
            placeholder="账号"
            rules={[{ required: true, message: "请输入帐号" }]}
          />
          <Form.Input
            required
            type="password"
            noLabel
            field="password"
            placeholder="密码"
            rules={[{ required: true, message: "请输入密码" }]}
          />
          <div className={classNames(styles.loginBtn, styles.noDrag)}>
            <Button onClick={login} theme="solid" type="primary" block>
              登录
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
