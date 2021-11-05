import '../App.css';
import ClipLoader from "react-spinners/ClipLoader";
import GiftCards from './GiftCards/GiftCards';
import Form from './Form/Form';
function App() {
  return (
    <div className={'content'}>
    {/* <ClipLoader color={'#F37A24'}  size={50} /> */}
      <GiftCards />
      <Form/>
    </div>
  );
}

export default App;
