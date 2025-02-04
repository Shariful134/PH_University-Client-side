/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider, Row } from "antd";

import PHInput from "../components/form/PHInput";
import PHForm from "../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/auth/authApi";
import { TResponse } from "../constant/global";
import { useNavigate } from "react-router";
import { useAppDispath } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  const [changePassword] = useChangePasswordMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = (await changePassword(data)) as TResponse<any>;
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };
  return (
    <div>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Please Change Your Password for your security issue</Divider>
          <PHInput type="text" name="oldPassword" label="OldPassword"></PHInput>

          <PHInput type="text" name="newPassword" label="NewPassword"></PHInput>

          <Button
            style={{ border: "2px solid purple", margin: "5px" }}
            htmlType="submit"
          >
            Login
          </Button>
        </PHForm>
      </Row>
    </div>
  );
};

export default ChangePassword;
