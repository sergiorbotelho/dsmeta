import Header from "./components/Header";
import NotificationButton from "./components/NotoficationButton";
import Card from "./components/Card";

function App() {
  return (
    <>
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
