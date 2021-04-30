import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='navbar'><h1>ETHNES</h1> <button class='shop'>Shop</button></div>
      <svg className='wavy' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FA8072" fill-opacity="1" d="M0,192L48,160C96,128,192,64,288,64C384,64,480,128,576,160C672,192,768,192,864,165.3C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      
      <div className='box'><img src='logo.png' /><p>Happy shopping and selling!</p> <button class='green' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://api.whatsapp.com/send?phone=6287878515818&text=Hi%20sist.%20Mau%20belanja%20dong%20%E2%98%BA&source=&data=';
      }}>WhatsApp</button>
      <button class='green' onClick={(e) => {
      e.preventDefault();
      window.location.href='http://line.me/ti/p/~resya.deng';
      }}>Line</button>
      <button class='orange' onClick={(e) => {
      e.preventDefault();
      window.location.href='http://shopee.co.id/resyadeng';
      }}>Shopee</button>
      <button class='orange' onClick={(e) => {
      e.preventDefault();
      window.location.href='http://lazada.co.id/ethnes';
      }}>Lazada</button>
      <button class='green' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.tokopedia.com/ethnes';
      }}>Tokopedia</button>
      <button class='red' onClick={(e) => {
      e.preventDefault();
      window.location.href='http://bukalapak.com/ethnes';
      }}>Bukalapak</button>
      </div>
    </div>
  );
}

export default App;
