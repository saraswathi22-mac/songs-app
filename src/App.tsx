import Sidebar from "./components/Sidebar/Sidebar.js";
import AppRoutes from "./routes/appRoutes.js";

const App = () => {
  return (
    <section className="flex gap-6">
      <Sidebar />
      <AppRoutes />
    </section>
  );
};

export default App;
