import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import Reviews from "./pages/Reviews";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import { NewsletterProvider } from "./contexts/NewsletterContext.jsx";

function App() {
  return (
    <NewsletterProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="chi-siamo" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NewsletterProvider>
  );
}
export default App;
