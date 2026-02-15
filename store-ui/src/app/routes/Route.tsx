import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../../features/home/pages/HomePage";
import CatalogsPage from "../../features/catalogs/pages/CatalogsPage";
import ProductDetailsPage from "../../features/catalogs/pages/ProductDetailsPage";
import OrdersPage from "../../features/orders/pages/OrdersPage";

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/catalogs', element: <CatalogsPage /> },
            { path: '/product/:id', element: <ProductDetailsPage /> },
            { path: '/orders', element: <OrdersPage /> }
        ]
    }
])