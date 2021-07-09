import './App.css';
import 'antd/dist/antd.css';
import LogModalTable from './components/log-modal'

function App() {
  return (
    <div className="App">
      <LogModalTable 
      isModalVisible
      ></LogModalTable>
    </div>
  );
}

export default App;
