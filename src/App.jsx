import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div className="input-area">
          <div className="box">
            <div className="origin h">
              <span className='label'>Origin</span>
              <input className='originInput' type="text" placeholder='Mumbai' />
            </div>
            <div className="btn-wrapper h">
              <button className='button'>Calculate</button>
            </div>
            <div className="origin h">
              <span className='label'>Destination</span>
              <input className='originInput' type="text" placeholder='Delhi' />
            </div>
            <div className="distance-box h">
              <span className='distance'>Distance</span>
              <span className='distance-no'>1,427 kms</span>
            </div>
            <div className="result h">
              <span className="res">The distance between <b>Mumbai</b> and <b>Delhi</b> is <b>1,427 kms</b>.</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="google-map-view">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
