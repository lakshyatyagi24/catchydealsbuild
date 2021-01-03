import React from "react";
// import Logo from "./../assets/logo/logo.svg";
// import Logo from "./../assets/images/logo2.png";

const Footer = () => {
  return (
    <>
      <div className="section has-background-white mt-6">
        <div className="is-size-7 has-text-weight-medium has-text-grey">
          <h1 className="title">
          Catchy Deals
            {/* <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/e/ef/Zomato-flat-logo.png"
              }
              width="140px"
            /> */}
          </h1>
          <br />
          {/* <div className="">
            Let me ask this straight. Before you buy anything online, do you
            spend days thinking about questions like "which website to buy
            from?" or "will the price go up/down if I wait?" ? If yes, then you
            are not alone. It is natural to be apprehensive about such issues
            when you are spending your hard-earned money. Plus, we are Indians.
            And frankly, we all hate to see someone else buy the same product at
            a lower cost. It is THE worst feeling for us. At 7Coupons.IN, we
            have seen the length and breadth of E-Commerce in India. With over
            5,00,000 units of sales attributed to us - from top websites to new
            brands, we have the experience it takes to guide you in your
            purchases. And so, we can give you a Personal Money Saving
            Assistant! Just tell your Money Saving Assistant what product or
            category you are looking to purchase, and he/she will start sending
            you the best buy options on email. Your assistant will get you the
            season's best deals and inform you of any upcoming coupons or flash
            sales. That's like knowing when the surprise test is going to happen
            - you get a big advantage! Once you are done with the purchase, you
            simply switch to the next thing on your wishlist.
          </div> */}
        </div>
        {/* <hr className="has-background-grey-light" /> */}
        <div className="container"></div>
        {/* Lower */}
        <div className="columns is-gapless is-multiline is-mobile">
          {/* 1 */}
          {/* <div className="column is-6-mobile mt-5">
            <div className="field">
              <div className="subtitle control has-text-weight-bold is-size-7 has-text-dark">
                HomeLane
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Contact Us
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Team
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Join Us
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Contact Us
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Team
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Join Us
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Contact Us
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Team
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Join Us
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Contact Us
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Team
              </div>
              <div className="control has-text-weight-medium is-size-7 has-text-grey py-1">
                Join Us
              </div>
            </div>
          </div> */}

          
        </div>

        <hr className="has-background-grey-light" />
        {/* Lower Footer */}
        <div className="columns">
          <div className="column is-size-7 has-text-weight-semibold has-text-dark is-4">
            Made by Program Warehouse © 2020
          </div>
          <div
            className="column has-text-centered is-4 py-3"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {/* 1 */}
            <div className="mx-3">
              <i className="fab fa-facebook-f c-red"></i>
            </div>
            {/* 1 */}
            <div className="mx-3">
              <i className="fab fa-twitter c-red"></i>
            </div>
            {/* 1 */}
            <div className="mx-3">
              <i className="fab fa-youtube c-red"></i>
            </div>
            {/* 1 */}
            <div className="mx-3">
              <i className="fab fa-linkedin-in c-red"></i>
            </div>
            <div className="mx-3">
              <i className="fab fa-pinterest-p c-red"></i>
            </div>
          </div>
          <div className="column is-4">
            <div className="container has-text-right">
              <div className="is-size-7">
                <div className="">catchydeals2020@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
