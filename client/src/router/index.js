import Auth from "../pages/Auth";
import Home from "../pages/Home";

export const privateRoutes = [{ path: "/home", component: Home }];

export const publicRoutes = [{ path: "/auth", component: Auth }];
