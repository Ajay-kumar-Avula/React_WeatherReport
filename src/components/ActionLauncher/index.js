import './index.css'
import {BiSend} from 'react-icons/bi'
import {BsCardImage, BsPinAngle} from 'react-icons/bs'
import {IoMailOutline} from 'react-icons/io5'

const RightPanel = () => (
  <div className="right-panel">
    {/* Ask Catura Section */}
    <div className="ask-catura">
      <div className="ask-catura-btns">
        <h3>Ask Catura</h3>
        <button type="button" className="catura-btn">
          <IoMailOutline /> WhatsApp
        </button>
        <button type="button" className="catura-btn">
          <IoMailOutline /> Greetings
        </button>
      </div>
      <div className="catura-options">
        <a href="https://imgbb.com/">
          <img
            src="https://i.ibb.co/kQRm2qR/Group-1171287145.png"
            alt="Group-1171287145"
            border="0"
          />{' '}
        </a>
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className=""
        id="sendText"
      />
      <BiSend className="send-icon" />

      <div className="catura-actions">
        <button type="button" className="catura-send">
          Copy to Send
        </button>
        <button type="button" className="catura-preview">
          Preview
        </button>
      </div>
    </div>

    {/* Action Launcher Section */}
    <div className="action-launcher">
      <h3>Action Launcher</h3>
      <input
        type="text"
        placeholder="Search actions..."
        className="action-search"
      />
      <button type="button" className="action-btn">
        Add Action
      </button>
      <div className="action-buttons">
        <button type="button" className="action-item">
          Fee Reversal
        </button>
        <button type="button" className="action-item">
          Retail Onboarding
        </button>
        <button type="button" className="action-item">
          Address Update
        </button>
      </div>
    </div>

    {/* Case Favorite Section */}
    <div className="case-favorite">
      <h3>
        {' '}
        <BsPinAngle /> Case Favorite
      </h3>
      <div className="favorite-item">
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className="favorite-item">
        <BsCardImage />
      </div>
      <div className="favorite-item">
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
  </div>
)

export default RightPanel
