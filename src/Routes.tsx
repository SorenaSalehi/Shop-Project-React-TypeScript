import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import AccountSettingPage from "./pages/AccountSettingPage";
import DashboardPage from "./pages/Dashboard";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* //*home */}
                <Route path="/" element={<Layout />}>
                    {/* //!home */}
                    <Route index element={<Home />} />

                    {/* //*dashboard */}
                    <Route path="dashboard" element={<DashboardPage />} />

                    {/* //*cart */}
                    <Route path="cart" element={<CartPage />} />

                    {/* //*wishlist */}
                    <Route path="wishlist" element={<WishlistPage />} />

                    {/* //*product details */}
                    <Route
                        path=":product-id"
                        element={<ProductDetailsPage />}
                    />

                    {/* //!user */}
                    {/* //*login */}
                    <Route path="login" element={<LoginPage />} />
                    {/* //*signup */}
                    <Route path="signup" element={<SignupPage />} />
                    {/* //*forgot Password */}
                    <Route
                        path="forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                    {/* //*reset Password */}
                    <Route
                        path="reset-password"
                        element={<ResetPasswordPage />}
                    />

                    {/* //*profile */}
                    <Route path="profile" element={<ProfilePage />}>
                        {/* //*account-setting */}
                        <Route
                            path="account-setting"
                            element={<AccountSettingPage />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
