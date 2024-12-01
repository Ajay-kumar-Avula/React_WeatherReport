import './index.css'
import {AiOutlineFileSearch, AiOutlineLink} from 'react-icons/ai'
import {
  BsFileEarmarkCheck,
  BsPerson,
  BsBox,
  BsHddNetworkFill,
} from 'react-icons/bs'
import {IoPeopleOutline, IoSettingsOutline} from 'react-icons/io5'

const Sidebar = () => (
  <div className="sidebar">
    <a href="https://ibb.co/Dth3jV8">
      <img
        src="https://i.ibb.co/SPbqZsd/rishi-Hawk.webp"
        alt="rishi-Hawk"
        border="0"
        className="logo-image"
      />
    </a>
    <ul>
      <li>
        {' '}
        <AiOutlineFileSearch /> Internal Audit
      </li>

      <li>
        {' '}
        <BsFileEarmarkCheck />
        UAT Testing
      </li>
      <li>
        {' '}
        <AiOutlineLink />
        Interact
      </li>
      <li>
        {' '}
        <IoPeopleOutline />
        Queue
      </li>
      <li>
        {' '}
        <BsHddNetworkFill />
        Workflow
      </li>
      <li>
        {' '}
        <BsPerson />
        Admin
      </li>
      <li>
        {' '}
        <BsBox />
        Asset
      </li>
      <li>
        {' '}
        <IoSettingsOutline />
        All Accessories
      </li>
    </ul>
  </div>
)

export default Sidebar
