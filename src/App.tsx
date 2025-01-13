import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoutes from "./components/layout/protectedRoutes";

function App() {
  return (
    <>
      <ProtectedRoutes>
        <MainLayout></MainLayout>
      </ProtectedRoutes>
    </>
  );
}

export default App;
