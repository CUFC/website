import React from "react"
import Hero from "../components/specialised/Hero"
import Layout from "../components/reuseable/Layout"
import Heading from "../components/specialised/Heading"
import MainContainer from "../components/reuseable/MainContainer"

export default function Index() {
  return (
    <Layout>
      <Hero />
      <MainContainer id="content">
        <Heading>Presidents' welcome</Heading>
        <p>CUFC is one of the longest running fencing clubs in the country having been founded in 1896. The club prides itself on offering training in all three weapons and across a full spectrum of abilities, from complete novices attending our beginners’ courses to international fencers competing for our very successful first teams.</p>
        <p>All our fencers can benefit from individual lessons and group footwork run by our external coaches. Many of our fencers regularly enter individual competitions, ranging from local to international championships, and there is also the chance to compete for the University in BUCS and Varsity as part of our 1st or 2nd’s teams, or to take part in less-competitive friendlies against other university and local clubs. For anyone looking to start fencing, CUFC offers beginners’ courses in foil run by our advanced fencers, culminating in Easter Term in a Novice Varsity competition against beginners trained by our historic rivals Oxford.</p>
        <p>As well as training we have a busy social calendar, beginning with a Fresher’s Squash at the start of Michaelmas term, then meandering through various dinners, swaps and the odd pub trip before ending with a relaxed garden party in the summer.</p>
        <p>Whatever you are looking to get out of fencing we hope you will find it at CUFC. If you have any questions please do not hesitate to contact myself or any other member of the committee.</p>
        <p css={`font-size: large;`}>Maddy Lee {'&'} James Terrill<br />CUFC Co-Presidents 2020-2021</p>
      </MainContainer>
    </Layout>
  )
}
