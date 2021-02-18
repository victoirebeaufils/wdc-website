import * as React from "react"
import Layout from "../components/Layout/Layout"
import {Link} from 'gatsby'
import Navbar from './../components/Navbar/Navbar';
import Card from "../components/Card/Card";
import Button from '../components/Button/Button'
import Title from "../components/Title/Title";
import Challenges from '../images/icons/challenges-icon.png'
import HackNights from '../images/icons/hack-night-icon.png'
import Workshops from '../images/icons/workshop-icon.png'
import IndexImg from '../images/index-img.jpg'
const IndexPage = () => {

return (
<Layout>
  <div class="container">
   <div class="row">
      <div class="col-lg-6 col-sm-12">
      <img class="img-fluid"src={IndexImg}></img>
      </div>
      <div class="col-lg-6 col-sm-12">
       <Title>ABOUT US</Title>
       </div>
       </div>

  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <Card title='Workshops'
        description='We organize workshops to teach students about various web technologies, ranging from frontend to server and database options to build websites. '
        icon={Workshops}>
      
        <Button class="button-default" text="See schedule"></Button>
      </Card>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <Card title='Hack Nights'
        description='We meet once every week to work on personal projects, chat web development and learn more about tools and technologies we are passionate about.'
        icon={HackNights}>
        <Button class="button-default" text="Join us"></Button>
      </Card>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <Card title='Challenges'
        description='We create monthly challenges based on what we cover in workshops and invite members to build websites to improve and showcase their skills.'
        icon={Challenges}>
        <Button class="button-default" text="See challenges"></Button>
      </Card>
    </div>
    <div class="col-sm-12 col-md-4">
      <Link to="/StylingSheet/StylingSheet">Styling Sheet</Link>
    </div>
  </div>
  </div>
</Layout>
)
}

export default IndexPage