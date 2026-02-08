import { useEffect } from "react"
import Header from "./components/Header";
import NavigationTabs from "./components/NavigationTabs";
import Dashboard from "./features/dashboard/Dashboard";

const App = () => {
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://localhost:5001/api/products");
      const data = await response.json();
      console.log(data);

    }

    fetchProducts();

  }, [])

  return (
    <div className="container  mx-auto">
      <Header />
      <NavigationTabs />
      <section className="mt-5">
        {/* <Dashboard /> */}
      </section>
    </div>
  )
}
export default App


