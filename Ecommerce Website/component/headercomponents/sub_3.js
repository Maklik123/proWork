import React from "react";
import Link from "next/link";
import Nav from "./navitem_2"
import cxs from 'cxs';
import Style from "style-it"

export default ()=>(
  <div>
    <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      {/* <li><Link><a>e<span>Commerce</span></a></Link></li>
                      <li><Link href='/'><a>Home</a></Link></li>
                      <li><Link href='/shoppage'><a>Shop Page</a></Link></li>
                      <li><Link href='/cart'><a>Cart</a></Link></li>
                      <li><Link href='/checkout'><a>Checkout</a></Link></li>
                      <li><Link href='/other'><a>Others</a></Link></li>
                      <li><Link href='/contact'><a>Contact</a></Link></li> */}
                      <Nav linkify='/' status='active'>Home</Nav>
                      <li className='dropdown'>

                        <a href="#"  className='dropdown-toggle' data-toggle='dropdown' >Collections<span className='carert'></span>  </a>
                        <ul role='menu' className='dropdown-menu multi-column columns-3' style={{minWidth: '800px'}}>
                          <li>
                            <ul className='multi-clumnn-dropdown col-sm-4 col-xs-12' style={{listStyle: 'none'}}>
                              <Nav Linkify='#'><span>Mobiles & Tablets</span></Nav>
                              <Nav Linkify='/mobilephones'><span>Mobile Phones</span></Nav>
                                  <Nav Linkify='/samsung' style={cx.a}>Samsung</Nav>
                                  <Nav Linkify='/sony'>Sony</Nav>
                                  <Nav Linkify='/apple'>Apple</Nav>
                                  <Nav Linkify='/htc'>htc</Nav>
                                  <Nav Linkify='/lg'>L.G</Nav>
                                  <Nav Linkify='/qmobile'>Qmobile</Nav>
                                  <Nav Linkify='/nokia'>Nokia</Nav>
                                  <Nav Linkify='/huawei'>Huawei</Nav>
                                  <Nav Linkify='/mobilemore'>More</Nav>
                            </ul>
                            <style jsx>{`
                              .multi-clumnn-dropdown nav: hover{
                                text-decoration: none;
                                color: #262626;
                                background-color: #f5f5f5;
                              }
                            `}</style>
                          </li>
                          <li>
                            <ul className='multi-clumnn-dropdown col-sm-4 col-xs-12'>
                              <Nav Linkify='#'><span>Cameras & Accessories</span></Nav>
                              <Nav Linkify='/videocamera'><span>VideoCamera</span></Nav>
                              <Nav Linkify='/camcoders'>CamCoders</Nav>
                              <Nav Linkify='/actioncam'>ActionCamera</Nav>
                              <Nav Linkify='/musicrecord'>Music Video Recorders</Nav>
                              <Nav Linkify='/proffesionalcam'>Professional CamCoders</Nav>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <Nav>Categories</Nav>
                      <Nav linkify='/shoppage'>Experiences</Nav>
                      <Nav linkify='/retail_serrvice'>Retail & Services</Nav>
                      <Nav linkify='/trending'>Trending</Nav>
                      <Nav linkify='/shopcart'>Shopping Cart</Nav>
                      <Nav linkify='/checkout'>Checkout</Nav>
                      <Nav linkify='/sale'>Sale</Nav>
                      <Nav linkify='/Others'>Others</Nav>
                      <Nav linkify='/contact'>Contact</Nav>
                      <Nav linkify='/about'>About Us</Nav>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
)

var cx={
  a: {
    display: 'block',
    clear : 'both',
    lineHeight: 1.428571429,
    color : '#333',
    whiteSpace: 'normal'
  },
  b: {
    textDecoration : 'none',
    color: '#262626',
    backgroundColor: '#f5f5f5'
  }
}
