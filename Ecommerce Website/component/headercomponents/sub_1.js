import React from "react";
import cxs from 'cxs';
import Style from '../stylesheet/style.js'
import Nav from "./navitem_1";

// import css from 'next/css';

export default ()=>(
  <div>
    <div className="header-area" style ={{background:' none repeat scroll 0 0 #f4f4f4'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className= "user-menu">
                        <ul  className = {cx1.firstul}>
                          <Nav styleA={cx1.firstli} styleB={cx1.firsta} glypicon={"fa fa-user"} >Account
                            <style jsx>{`
                              fa fa-user{
                                margin : 7;
                              }
                            `}</style>
                          </Nav>
                          <Nav styleA={cx1.firstli} linkify='/wishlist' styleB={cx1.firsta} glypicon={"fa fa-heart"} > WishList
                            <style jsx>{`
                              .fa fa-user{
                                margin : 7;
                              }
                            `}</style>
                          </Nav>
                          <Nav styleA={cx1.firstli} linkify='cart' styleB={cx1.firsta} glypicon={"fa fa-user"} > My Cart
                            <style jsx>{`
                              .fa fa-user{
                                margin : 7;
                              }
                            `}</style>
                          </Nav>
                          <Nav styleA={cx1.firstli} linkify='checkout' styleB={cx1.firsta} glypicon={"fa fa-user"} > Checkout
                            <style jsx>{`
                              .fa fa-user{
                                margin : 7;
                              }
                            `}</style>
                          </Nav>
                          <Nav styleA={cx1.firstli} linkify='login' styleB={cx1.firsta} glypicon={"fa fa-user"} > Login
                            <style jsx>{`
                              .fa fa-user{
                                margin : 7;
                              }
                            `}</style>
                          </Nav>
                          <Nav styleA={cx1.firstli} linkify='signup' styleB={cx1.firsta} glypicon={"fa fa-user"} > Signup
                            <style jsx>{`
                              .fa fa-user{
                                margin : 7;
                              }
                            `}</style>
                          </Nav>
                            {/* <li className ={cx1.firstli} ><a className={cx1.firsta}  href="#"><i className="fa fa-user" style = {{marginRight: 5}}></i> My Account</a></li>
                            <li className ={cx1.firstli} ><a className={cx1.firsta} href="#"><i className="fa fa-heart" style = {{marginRight: 5}}></i> Wishlist</a></li>
                            <li className ={cx1.firstli} ><a className={cx1.firsta} href="cart.html"><i className="fa fa-user" style = {{marginRight: 5}}></i> My Cart</a></li>
                            <li className ={cx1.firstli} ><a className={cx1.firsta} href="checkout.html"><i className="fa fa-user" style = {{marginRight: 5}}></i> Checkout</a></li>
                            <li className ={cx1.firstli} ><a className={cx1.firsta} href="#"><i className="fa fa-user" style = {{marginRight: 5}}></i> Login</a></li> */}

                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="header-right">
                        <ul className="list-unstyled list-inline" style = {Style.headarea1}>
                            <li className="dropdown dropdown-small">
                                <a  data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" style={Style.headarea2} href="#"><span className="key">currency :</span><span className="value">PKR </span><b className="caret"></b></a>
                                <ul className="dropdown-menu" style= {Style.headarea4}>
                                    <li><a href="#" style={Style.headarea3}>USD</a></li>
                                    <li><a href="#" style={Style.headarea3}>INR</a></li>
                                    <li><a href="#" style={Style.headarea3}>GBP</a></li>
                                </ul>
                            </li>

                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle"  href="#"><span className="key">language :</span><span className="value">English </span><b className="caret"></b>
                                <style jsx>{`
                                  a{
                                    fontSize: 20
                                    background : yellow
                                      padding : 15px
                                  }

                                  `}</style>
                              </a>
                                <ul className="dropdown-menu" style= {{border : 'medium none', borderRadius: 0, left : 50+ '%' , marginLeft : -50 +'px', minWidth:100 , textAlign: 'center'}}>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">Urdu</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

const cx1 = {
  firstul: cxs({
    listStyle : 'outside none none',
    margin :0,
    paddingTop :5
  }),
  firstli : cxs({
    display: 'inline-block',
    marginRight: 10
  }),
  firsta : cxs({
    display : 'block',
    fontSize : 13 ,
    marginRight : 5,
    padding: 10,
    color: '#888'
  })

}
