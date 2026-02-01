import { useEffect } from "react"

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
    <div>App</div>
  )
}
export default App
