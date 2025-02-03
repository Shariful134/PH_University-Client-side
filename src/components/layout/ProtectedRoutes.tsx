import { ReactNode } from "react";
import { useAppDispath, useAppSelector } from "../../redux/hooks";
import {
  logout,
  selectCurrentUser,
  TUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router";
import { verifyToken } from "../../utils/verifyToken";

type Tprotected = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoutes = ({ children, role }: Tprotected) => {
  const token = useAppSelector(useCurrentToken);

  const dispatch = useAppDispath();
  let user;
  if (token) {
    user = verifyToken(token);
  }
  console.log(user);

  if (role != undefined && role != (user as TUser)?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
