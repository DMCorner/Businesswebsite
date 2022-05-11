import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Slider from 'react-slick';
import emailjs from '@emailjs/browser';
import { withTheme } from 'styled-components';
import { initializedState } from 'react-slick/lib/utils/innerSliderUtils';
import { findRenderedComponentWithType } from 'react-dom/test-utils';



const MainCode = () => {
    let settings = {
        dots: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };

    
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('hidden', 'hidden', e.target, 'hidden')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };    


const [showHome,setShowHome] = useState(true)
const [showGallery,setShowGallery] = useState(false)
const [showQuote,setShowQuote] = useState(false)


const onlyHome = () => {
    setShowHome(true);
    setShowGallery(false);
    setShowQuote(false);
};

const onlyHomeStart = () => {
    setShowGallery(false)
    setShowQuote(false)
}

const onlyGallery = () => {
    setShowGallery(true);
    setShowHome(false);
    setShowQuote(false);
}

const onlyQuote = () =>{
    setShowQuote(true);
    setShowHome(false);
    setShowGallery(false);
} 


return (
    <body>
    <meta name="viewport" content="width=device-width, initial-scale=1.00, maximum-scale=2.00, minimum-scale=1.00"></meta>
    <div id="banner_1" >
        <div class="banner_1_child_1"><h1><p id="change">Company</p></h1>Company Business Things</div>
        <div class="banner_1_child_2"></div>
        <div class="banner_1_child_3"></div>
        <div class="banner_1_child_4"><h3>Telephone: 123 456 7890<br></br>Moblie: 123 456 7890<br></br>
        Email: example@email.com<br></br>Address: 1 Street Road OB1 KNB</h3></div>
    </div>

    <div id="banner_dark_gray" >
    </div>

    <div id="banner_dark_blue" >
    </div>

    <div id="banner_light_blue" >
    </div>


    <div className='portrait_pictures_container'>
    <div className='portrait_pictures'>
    <img  src={require("./ramin_vent_pics/portvent1.jpg")} width="33%" class='portrait'></img>
    <img  src={require("./ramin_vent_pics/portvent6.jfif")} width="33%" class='portrait'></img>
    <img  src={require("./ramin_vent_pics/portvent4.jfif")} width="33%" class='portrait'></img>
    </div>
    </div>

    <div id="banner_light_blue" >
    </div>

    <div id="banner_dark_gray">
    </div>

    <div id="banner_dark_blue" >
    </div>

    <div id="banner_parent_2" >
        <button className='button-44' role='button' onClick={onlyHome} >Home</button>
        <button className='button-44' role='button' onClick={onlyGallery} >Gallery</button>
        <button className='button-44' role='button' onClick={onlyQuote} >Quote</button>
    </div>

    <div className='main_content'>
    {showHome?<div class="home" >
        <div id="banner_dark_gray">
        </div>
        <h1>Home</h1>
    <div class="leftcolumn">
    <div class="card">
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      <h5></h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br></br>
        <br></br>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>
    </div>
    </div>:null}

    {showGallery?<div className='gallery'>
    <div id="banner_dark_gray">
    </div>
        <h1>Gallery</h1>
        <div><h2>View Examples of Our Previous Work</h2></div>
        <Carousel_2 {...settings}>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent1.jfif')}  alt="" />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent2.jfif')} alt ='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent3.jfif')} alt ='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent4.jfif')} alt ='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent5.jfif')}  alt="" />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent6.jfif')} alt ='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent7.jfif')} alt ='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent8.jfif')} alt ='' />
            </a>
        </Wrap>
                <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent9.jfif')}  alt='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent10.jfif')} alt ='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent11.jfif')} alt ='' />
            </a>
        </Wrap>

        <Wrap>
            <a>
                <img src={require('./ramin_vent_pics/landvent12.jfif')} alt ='' />
            </a>
        </Wrap>
        
        </Carousel_2>
        </div>:null}

    {showQuote?<div className='quote'>
        <div id="banner_dark_gray">
    </div>
        <h1>Quote</h1><div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<br></br></div>
<br></br>
    <form onSubmit={sendEmail} className='resizedTextBox'>
      <label>Full Name: </label> <br></br>
      <input type="name" name="subject" /><br></br>
      <label>Phone Number: </label><br></br>
      <input type="subject" name="name" /><br></br>
      <label>Email Address: </label><br></br>
      <input type="email" name="email" /><br></br>
      <label>Describe Service Required: </label><br></br>
      <textarea name="message" rows="5" cols="40"/><br></br>
      <input type="submit" value="Send" />
    </form>
    </div>:null}
        </div>

    <div id="banner_light_blue" >
    </div>
    <div id="banner_dark_blue" >
    </div>
    <div id="banner_dark_gray">
    </div>
    <div id="banner_1" >
        <div class="banner_1_child_1"><h1><p id="change">Company</p></h1>Company Business Things</div>
        <div class="banner_1_child_2"></div>
        <div class="banner_1_child_3"></div>
        <div class="banner_1_child_4"><h3>Telephone: 123 456 7890<br></br>Moblie: 123 456 7890<br></br>
            Email: example@email.com<br></br>Address: 1 Street Road OB1 KNB</h3></div>
    </div>
    </body>
    );
};

export default MainCode;



const Wrap = styled.div`
    border-radiuis: 0px;
    cursor: pointer;
    position: relative;
    a {
        border-radius: 0px;
        box-shadow: (0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        left: 20vw;
        @media (max-width: 800px) {
        left: 0vw;
        }
        padding: 0px;
        img { 
            width: 60%;
            height: 40%;
        @media (max-width: 800px) { 
            width: 100%;
            height: 90%;
        }
        }
        &:hover {
            padding: 0;
            border: 0px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
    }`

    const Carousel_2 = styled(Slider)`
    margin-top: 0px;
    & > button {
        opacity: 1.0;
        height: 1vw;
        width: 40vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(56, 52, 52);
        }
    }
    li.slick-active button:before {
        color: white;
    }
    .slick-lick {
        overflow: hidden;
    }
`;