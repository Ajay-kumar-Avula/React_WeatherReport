import './index.css'
import {useState} from 'react'

const ChatWindow = () => {
  const [activeTab, setActiveTab] = useState('Conversation')

  const handleTabClick = tabName => {
    setActiveTab(tabName)
  }

  return (
    <div className="chat-window">
      <div className="tabs">
        <button
          type="submit"
          className={`tab ${activeTab === 'Conversation' ? 'active' : ''}`}
          onClick={() => handleTabClick('Conversation')}
        >
          Conversation
        </button>
        <button
          type="submit"
          className={`tab ${activeTab === 'Address Update' ? 'active' : ''}`}
          onClick={() => handleTabClick('Address Update')}
        >
          Address Update
        </button>
        <button
          type="submit"
          className={`tab ${activeTab === 'Fee Reversal' ? 'active' : ''}`}
          onClick={() => handleTabClick('Fee Reversal')}
        >
          Fee Reversal
        </button>
        <button type="submit" className="escalate-btn">
          Escalate
        </button>
      </div>

      <div className="chat-box">
        {activeTab === 'Conversation' && (
          <div className="chat-content">
            <div className="message received">
              <p>
                <strong>Rachel Adams</strong>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="message sent">
              <p>
                <strong>You</strong>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        )}

        {activeTab !== 'Conversation' && (
          <div className="tab-content">
            <p>{activeTab} content goes here...</p>
          </div>
        )}
        <div className="check-List">
          <input type="checkbox" checked /> <button type="button"> SMS</button>
          <input type="checkbox" /> <button type="button"> WHATS APP</button>
          <input type="checkbox" checked /> <button type="button">EMAIL</button>
        </div>

        <div className="input-area">
          <input type="text" placeholder="Type a message..." />
          <button type="submit" className="send-btn">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
