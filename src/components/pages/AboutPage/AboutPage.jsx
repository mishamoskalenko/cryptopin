import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import Mobile from '../../blocks/Mobile/Mobile'
import BannerAbout from '../../blocks/BanneAbout/BannerAbout'
import Counter from '../../blocks/Counter/Counter'
import Client from '../../blocks/Client/Client'
import Content from '../../blocks/Content/Content'
import Team from '../../blocks/Team/Team'
import Story from '../../blocks/Story/Story'

function About() {
  return (
    <>
      <Header />
      <BannerAbout />
      <Counter />
      <Content/>
      <Client class={"client-about"}/>
      <Story/>
      <Team/>
      <Mobile />
      <Footer />
    </>
  )
}

export default About
