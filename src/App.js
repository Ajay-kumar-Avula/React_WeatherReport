import Sidebar from './components/SideBar'
import Header from './components/Header'
import ChatWindow from './components/ChatWindow'
import CustomerDetails from './components/CustomerDetails'
import RightPanel from './components/ActionLauncher'
import './App.css'

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main">
      <Header />
      <div className="content">
        <CustomerDetails />
        <ChatWindow />
        <RightPanel />
      </div>
    </div>
  </div>
)

export default App
