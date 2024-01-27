import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./layout/Layout";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<p>Tidak ditemukan</p>}>
      <Route path="login" element={<p>Login</p>} />
      <Route path="register" element={<p>Register</p>} />
      <Route element={<RequireAuth />}>
        <Route index element={<p>Ini homepage threads</p>}/>
        <Route path="threads/:id" element={<p>Ini thread</p>}/>
        <Route path="leaderboards" element={<p>Leaderboards</p>}/>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
