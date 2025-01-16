import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispath } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const [login, { error }] = useLoginMutation();
  console.log(error);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 1000 });
      navigate(`/${user.role}/dashboard`);
    } catch {
      toast.error("Something Went Wrong", { id: toastId, duration: 1000 });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>

        <input type="text" id="password" {...register("password")} />
      </div>
      <Button
        style={{ border: "2px solid purple", margin: "5px" }}
        htmlType="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
