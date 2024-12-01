import {MdOutlineLogout} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'
import {IoSettingsOutline} from 'react-icons/io5'
import './index.css'

const Header = () => (
  <>
    <div className="header">
      <h1 className="chat-head">Chat / Feed Chat</h1>
      <div className="user-info">
        <AiOutlineHome />
        <p>Process Owner HOD</p>
        <a href="https://imgbb.com/">
          <img
            src="https://i.ibb.co/CKRYmJd/profile-assignment.jpg"
            alt="profile-assignment"
            border="0"
            className="profile"
          />
        </a>
        <p>Admin</p>
        <IoSettingsOutline />
        <MdOutlineLogout />
        <p>Logout</p>
      </div>
    </div>
    <div className="names">
      <div className="names">
        <span className="name-icon"> JH</span>
        <h4>Jonathan Higgins </h4>{' '}
      </div>
      <div className="names">
        <span className="name-icon"> JH</span>
        <h4>Jonathan Higgins </h4>{' '}
      </div>
      <div className="names">
        <span className="name-icon"> HS</span>
        <h4>Hannibal Smith </h4>{' '}
      </div>
      <div className="names">
        <span className="name-icon"> JH</span>
        <h4>Jonathan Higgins </h4>{' '}
      </div>
      <div className="names">
        <span className="name-icon"> JH</span>
        <h4>Jonathan Higgins </h4>{' '}
      </div>
      <div className="names">
        <h4 className="msg">
          <BiMessageRoundedDetail /> Messaging
        </h4>{' '}
      </div>
    </div>
  </>
)

export default Header
