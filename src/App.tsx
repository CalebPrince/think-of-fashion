import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home'
import CategoryPage from '@/pages/CategoryPage'
import ProductCategoryPage from '@/pages/ProductCategoryPage'
import Booking from '@/pages/Booking'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="corporate" element={<CategoryPage />} />
          <Route path="casual" element={<CategoryPage />} />
          <Route path="weddings" element={<CategoryPage />} />
          <Route path="grooming" element={<CategoryPage />} />
          <Route path="suits" element={<ProductCategoryPage />} />
          <Route path="shoes" element={<ProductCategoryPage />} />
          <Route path="sunglasses" element={<ProductCategoryPage />} />
          <Route path="sneakers" element={<ProductCategoryPage />} />
          <Route path="shirts" element={<ProductCategoryPage />} />
          <Route path="watches" element={<ProductCategoryPage />} />
          <Route path="socks" element={<ProductCategoryPage />} />
          <Route path="book" element={<Booking />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
