import { Button, Divider, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispath } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import PHForm from "../components/form/PhForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();

  const defaultValues = {
    userId: "2026010002",
    password: "student123",
  };

  const [login, { error }] = useLoginMutation();
  console.log(error);

  const onSubmit = async (data: FieldValues) => {
    console.log("data: ", data);
    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(res);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 1000 });

      if (res?.data?.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch {
      toast.error("Something Went Wrong", { id: toastId, duration: 1000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Divider>Please Login Now</Divider>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID"></PHInput>

        <PHInput type="text" name="password" label="Password"></PHInput>

        <Button
          style={{ border: "2px solid purple", margin: "5px" }}
          htmlType="submit"
        >
          Login
        </Button>
      </PHForm>
    </Row>
  );
};

export default Login;
