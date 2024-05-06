import { useGetMovies } from "./hooks/useGetMovies";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./components/Header";
import { Container, PageView } from "./styles";
function App() {
  useGetMovies();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return (
    <Container>
      <Header />
      <PageView>
        <RouterProvider router={router} />
      </PageView>
    </Container>
  );
}

export default App;
