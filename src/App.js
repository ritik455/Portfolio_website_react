import NavBar from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './footer/footer';
import Body from './body/body';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
