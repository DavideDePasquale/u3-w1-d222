import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
// import BookList from "./components/BookList";
import BookList from "./components/BookList";
import fantasy from "./books/horror.json";

// import AllTheBook from "./components/AllTheBook";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={fantasy} />
      {/* <AllTheBook/>  */}
      <MyFooter />
    </>
  );
}

export default App;
