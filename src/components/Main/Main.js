import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard';
import MySwitch from '../Switch/MySwitch';
import Block from '../Block/Block';
import Footer from '../Footer/Footer';
import PriceCard from '../PriceCard/PriceCard';
import { userNumbers, priceList } from '../../users';
import './Main.css';
import globe from './../../images/globe.png';
import BG from './../../images/BG.png';
import Group6 from './../../images/Group 6.png';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      numberOfUsers: 25,
      numberOfMonths: 1
    };
  }

  onChangingNumberOfUsers=(users) => {
    this.setState({
      numberOfUsers: users
    })
  }

  onChangingNumberOfMonths=(calculateMonthly) => {
    this.setState({
      numberOfMonths: calculateMonthly ? 12 : 1
    })
  }

  render() {
    return (
      <div>
        <div className="top-div">
          <div className="looking-for-a-lollip left-div">
            <p>Looking for a</p>
            <p>lollipop alternative?</p>
            <p className="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button className="button-cta cta-text">Primary CTA</button>
            <button className="outline-button cta-text">Secondary CTA</button>
          </div>

          <div className="right-div">
            <img src={globe} alt="globe" className="ref-image" />
          </div>
        </div>

        <div>
          <div className="mid-div">
            <img src={BG} alt="BG"  className="bg" />
          </div>
          <div className="pricing-chart">
            <p className="this-is-a-heading-i">
              This is a heading in
              two lines
            </p>
            <img src={Group6} alt="Rectangle"  className="rectangle"></img>
          </div>
        </div>
        <div>
          <p className="compare-pricing-today">Compare pricing today!</p>
          <p className="lorem-ipsum-is-simple">Lorem Ipsum is simply dummy text of the printing and <span className="text-link">typesetting</span>.</p>
          <div className="no-of-users">
            {
              userNumbers.map((num, i) => {
                return <UserCard key={i} userNumber={num} changeNumberOfUsers={this.onChangingNumberOfUsers} currentNumberOfUsers={this.state.numberOfUsers}/>
              })
            }
            <MySwitch changePricingPeriod={this.onChangingNumberOfMonths}/>
          </div>
          <div className="price-list-card">
            {
              priceList.map((companyInfo, i) => {
                return <PriceCard key={i} companyName={companyInfo.companyName} price={companyInfo.price} savingsCard={companyInfo.savingsCard} numberOfUsers={this.state.numberOfUsers} numberOfMonths={this.state.numberOfMonths}/>
              })
            }
          </div>
        </div>
        <div className="customer-feed">
          <p className="customer-feed-header">Here's what our customers have to say</p>
          <Block />
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Main;