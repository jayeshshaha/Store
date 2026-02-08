
import { TabItem, Tabs } from "flowbite-react";
import { HiShoppingCart, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Dashboard from "../features/dashboard/Dashboard";
import Product from "../features/products/Product";


export default function NavigationTabs() {
    return (
        <div className="overflow-x-auto">
            <Tabs aria-label="Full width tabs" variant="fullWidth">
                <TabItem title="Dashboard" icon={MdDashboard}>
                    <Dashboard />
                </TabItem>
                <TabItem title="Products" >
                    <Product />
                </TabItem>
                <TabItem title="Cart" icon={HiShoppingCart}>
                    This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </TabItem>
                <TabItem title="Orders" icon={HiClipboardList}>
                    This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </TabItem>

            </Tabs>
        </div>
    );
}
