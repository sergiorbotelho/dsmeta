import Header from "./components/Header";
import Card from "./components/Card";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
