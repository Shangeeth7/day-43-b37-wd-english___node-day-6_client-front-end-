import { Button, Form, Input, PageHeader, Divider } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./pages.css";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import BackgroundAnimate from "../BackgroundAnimate";

function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content24 = (
    <div>
      <p>What actually we do </p>
      <p>Achievements and Awards</p>
    </div>
  );
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        " https://url-shorrtner.herokuapp.com/api/user/login",
        values
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };
  const sendResetPasswordLink = async () => {
    try {
      toast.loading("");
      const response = await axios.post(
        " https://url-shorrtner.herokuapp.com/api/user/send-password-reset-link",
        {
          email,
        }
      );
      toast.dismiss();
      if (response.data.success) {
        toast.success(response.data.message);
        setShowForgotPassword(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="authentication">
        {!showForgotPassword && (
          <div className="authentication-form card p-3">
            <div>
              <h1 className="text-white">
                Welcome <span className="bavckss">Back</span>
              </h1>
            </div>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label={<label style={{ color: "white" }}>E-mail</label>}
                name="email"
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                label={<label style={{ color: "white" }}>Password</label>}
                name="password"
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                  type="password"
                />
              </Form.Item>

              <Button
                className="buttonss my-2 full-width-button"
                htmlType="submit"
              >
                LOGIN
              </Button>
            </Form>
            <div className="link-anchor">
              <Link to="/register" className="anchor">
                New ? <span className="bavckss">REGISTER</span>
              </Link>
              <h6
                className="anchor"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password
              </h6>
            </div>
          </div>
        )}

        {showForgotPassword && (
          <div className="authentication-form card p-3 ">
            <p className="reset-PASSWORDs text-white">
              Enter your <span className="bavckss">E-mail</span>
            </p>
            <br />

            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              className="site-form-item-icon"
              placeholder="e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <div className="buttonnsdiv2">
              <Button
                className="buttonns2 my-2 full-width-button"
                onClick={sendResetPasswordLink}
              >
                Send Re-set password link
              </Button>
            </div>
            <h6 onClick={() => setShowForgotPassword(false)} className="anchor">
              Click Here - <span className="bavckss">LOGIN</span>
            </h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
