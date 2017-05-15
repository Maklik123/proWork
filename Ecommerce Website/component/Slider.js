import React from "react"
import Sub1 from "./slidercomponents/slidersub_1"
import Sub2 from "./slidercomponents/slidersub_2"
import Heading from "./slidercomponents/heading"
import Para from "./slidercomponents/paragraph"
import Anchor from "./anchor"

export default()=>(
  <div className='slider-area'>
    <div className='zigzag-bottom'></div>
    <div id='slider-list' className='carousel carousel-fade slide' data-ride='carousel'>
      <div className="slide-bulletz">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ol className="carousel-indicators slide-indicators">
                  <Sub1 target1='#slide-list' target2='0' status='actie'></Sub1>
                  <Sub1 target1='#slide-list' target2='1'></Sub1>
                  <Sub1 target1='#slide-list' target2='2'></Sub1>
                    {/* <li data-target="#slide-list" data-slide-to="0" class="active"></li>
                    <li data-target="#slide-list" data-slide-to="1"></li>
                    <li data-target="#slide-list" data-slide-to="2"></li> */}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="single-slide">
                <div className="slide-bg slide-one">
                  <style jsx>{`
                    slide-bg {
                      height : 100%;
                      left : 0;
                      position : absolute;
                      top : 0;
                      width :100%;
                      backgroundPosition : center;
                      backgroundSize : cover;
                    }
                    slide-bg: after{
                      background: none repeat scroll 0 0 #000;
                      content: "";
                      height: 100%;
                      left:0;
                      opacity:0.6;
                      position : absolute;
                      top: 0;
                      width: 100%;
                    }
                    .slide-one{
                      background :url(static/img/slide-1.jpg)
                    }
                  `}</style>
                </div>
                  <Sub2>
                    <Heading>I am awesome</Heading>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorem, excepturi. Dolore aliquam quibusdam ut quae iure vero exercitationem ratione</Para>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ab molestiae minus reiciendis! Pariatur ab rerum, sapiente ex nostrum laudantium.</Para>
                    <Anchor Linkify='#' property='readmore'>Learn more</Anchor>
                    </Sub2>
                </div>
            </div>
            <div className='item'>
              <div className="single-slide">
                <div className="slide-bg slide-two">
                  <style jsx>{`
                    .slide-two{
                      background: url(../static/img/slide-2.jpg)
                    }
                  `}</style>
                </div>
                <Sub2>
                  <Heading>I am great</Heading>
                  <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorem, excepturi. Dolore aliquam quibusdam ut quae iure vero exercitationem ratione</Para>
                  <Anchor Linkify='#' property='readmore'>Learn more</Anchor>
                  </Sub2>
              </div>
            </div>
            <div className='item'>
              <div className="single-slide">
                <div className="slide-bg slide-three">
                  <style jsx>{`
                    .slide-three{
                      background: url(../static/img/slide-3.jpg)
                    }
                  `}</style>
                </div>
                <Sub2>
                  <Heading>I am Superb</Heading>
                  <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorem, excepturi. Dolore aliquam quibusdam ut quae iure vero exercitationem ratione</Para>
                  <Anchor Linkify='#' property='readmore'>Learn more</Anchor>
                </Sub2>
              </div>
            </div>
        </div>
      </div>
    </div>
)
