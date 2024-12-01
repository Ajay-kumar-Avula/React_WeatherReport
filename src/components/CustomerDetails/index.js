import './index.css'
import {BiDotsVertical} from 'react-icons/bi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'

const CustomerDetails = () => (
  <div className="customer-details">
    <h2 className="customer-name">
      {' '}
      <span className="C-name-icon">HS</span> Hannibal Smith{' '}
    </h2>
    <p className="customer-address">
      {' '}
      <IoLocationOutline />1 Market Street, San Francisco, CA 94105
    </p>
    <div>
      <div className="details-section">
        <div className="detail">
          <h6>Customer ID</h6> <hr />
          <p>
            12345 <BiDotsVertical />
          </p>
        </div>
        <hr />
        <div className="detail">
          <h6>Email Address</h6> <hr />
          <p>
            rachel@sample.com <BiDotsVertical />
          </p>
        </div>
        <hr />
        <div className="detail">
          <h6>Phone Number</h6> <hr />
          <p>
            8051289085 <BiDotsVertical />
          </p>
        </div>
        <hr />
        <button type="button" className="add-btn">
          <AiOutlinePlusCircle />
          add
        </button>
      </div>

      <div className="details-section">
        <div className="detail">
          <h6>Loyalty Tier</h6>
          <p>
            Silver <BiDotsVertical />
          </p>
        </div>

        <hr />
        <div className="detail">
          <h6>Segment</h6>
          <p>
            Sleepy Customer <BiDotsVertical />
          </p>
        </div>
        <button className="add-btn" type="button">
          {' '}
          <AiOutlinePlusCircle />
          add
        </button>
      </div>

      <div className="details-section">
        <div className="detail">
          <h6>Lifetime Value</h6> <hr />
          <p>
            $1M <BiDotsVertical />
          </p>
        </div>
        <hr />

        <div className="detail">
          <h6>Propensity to Purchase</h6> <hr />
          <p>
            75% <BiDotsVertical />
          </p>
        </div>
        <button className="add-btn" type="button">
          <AiOutlinePlusCircle />
          add
        </button>
      </div>

      <div className="details-section">
        <div className="detail">
          <h6>Engagement Score</h6> <hr />
          <p>
            80% <BiDotsVertical />
          </p>
        </div>
        <hr />
        <button className="add-btn" type="button">
          {' '}
          <AiOutlinePlusCircle />
          add
        </button>
      </div>
    </div>

    <button type="submit" className="assign-agent-btn">
      Assign other Agent
    </button>
    <button type="submit" className="add-widget-btn">
      Add New Widget
    </button>
  </div>
)

export default CustomerDetails
