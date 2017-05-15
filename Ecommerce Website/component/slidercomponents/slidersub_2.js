import React from "react";
import Anchor from "../anchor.js"
import Style from '../stylesheet/style.js'
import cxs from "cxs"

export default({children, heading})=>(
  <div className="slide-text-wrapper" style={Style.a}>
    {/* <style jsx>{`
      height: 700px;
      display : table;
      width: 100%;
    `}</style> */}
    <div className="slide-text">

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-6'>
            <div className='slide-content' style={Style.b}>
              {/* <style jsx>{`
                .slide-content{
                  position: relative;
                  zIndex: 9;
                  padding: 30px;
                }
                .slide-content: before{
                  background : none repeat scroll 0 0 #000;
                  content: "";
                  height: 100%;
                  left: 0;
                  opacity: 0.6;
                  position: absolute;
                  topp:0;
                  width: 100%;
                  zIndex: -1;
                }
              `}</style> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
)
