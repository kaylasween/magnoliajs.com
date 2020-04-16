import React from "react";
import Layout from "../components/layout";
import theme from "../themes";
import { ThemeProvider } from "styled-components";
import MainBanner from "../components/MainBanner";
import Alternate from "../components/Alternate";
import { Link as ButtonLink } from "../components/Button";
import { GatsbyLink } from "../components/Link";
import { Flex } from "@rebass/grid";
import Heading from "../components/Heading";
import Schedule from "../components/Schedule";
import Speaker from "../components/Speaker";
import Text from "../components/Text";
import speakerData from "../speakerData";
import { Link } from "../components/Button";
import styled from "styled-components";
import "../components/root.css";

const TextWrapper = styled.div`
  max-width: 1024px;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <MainBanner>
        <Flex flexDirection={["column", "row"]} alignItems="center">
          <ButtonLink
            href="https://ti.to/magnoliajs/magnoliajs2020"
            alignSelf={["center", "flex-start"]}
            mr={[0, 40]}
            mb={[20, 0]}
            target="_blank"
          >
            Get your ticket!
          </ButtonLink>
          <GatsbyLink to="speakers" color="white">
            See speakers
          </GatsbyLink>
        </Flex>
      </MainBanner>
      <article
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {speakerData.map(speaker => {
          return (
            <Speaker
              key={speaker.name}
              name={speaker.name}
              Image={speaker.Image}
              talk={{
                title: speaker.talk.title,
                description: speaker.talk.description
              }}
              twitter={speaker.twitter}
              company={speaker.company}
              bio={speaker.bio}
            />
          );
        })}
      </article>
      <Alternate pb={100} style={{overflowX: 'scroll'}}>
        <Text pt={10} pb={30} style={{ fontWeight: 700 }}>ALL TIMES ARE IN US/CDT (GMT -5:00).</Text>
        <Text pt={10} pb={30}>All talks will happen on our main Zoom Webinar link. Other events, such as Virtual Sponsor Booths, Q&A's, Virtual Lunch Tables, etc. will have their own respective Zoom meeting links.</Text>
        <Text pt={10} pb={30}>We will have a Watercooler running at all times for anyone who wants to pop in and get to know others. Please adhere to our Code of Conduct.</Text>
        <Heading color="mainBackground" size={2}>
          Schedule - April 16 (Day 1) - <a href="https://us02web.zoom.us/j/82392215017?pwd=cXpFYkhHSVR5aEptWVpidGRpUlY3dz09" target="_blank" rel="noopener noreferrer">Click here to open Day 1 Watercooler</a>
        </Heading>
        <Heading color="mainBackground" size={3}>
          Virtual Sponsor Booths
        </Heading>
        <Schedule day="sponsors-one" />
        <Heading color="mainBackground" size={3}>
          Talks - <a href="https://us02web.zoom.us/j/86916890389?pwd=L1YrS0xwTGh2ZmphZkxYbjUxTGpodz09" target="_blank" rel="noopener noreferrer">Click here to open Day 1 Zoom webinar</a>
        </Heading>
        <Schedule day="one" />
        <Heading color="mainBackground" size={3}>
          Speaker Q&A
        </Heading>
        <Schedule day="qa-one" />
        <Heading color="alternateHeading" size={2}>
          Schedule - April 17 (Day 2) - <a href="https://us02web.zoom.us/j/82441209987?pwd=YldYeG9CaDh2aU9wNmg5MTlaeGREUT09" target="_blank" rel="noopener noreferrer">Click here to open Day 2 Watercooler</a>
        </Heading>
        <Heading color="alternateHeading" size={3}>
          Virtual Sponsor Booths
        </Heading>
        <Schedule day="sponsors-two" />
        <Heading color="alternateHeading" size={3}>
          Talks - <a href="https://us02web.zoom.us/j/82810507172?pwd=NGZNYUJwOHlqd2xWWGRVRnl6Sk9Odz09" target="_blank" rel="noopener noreferrer">Click here to open Day 2 Zoom webinar</a>
        </Heading>
        <Schedule day="two" />
        <Heading color="alternateHeading" size={3}>
          Speaker Q&A
        </Heading>
        <Schedule day="qa-two" />
      </Alternate>
      <Alternate pb={100}>
        <Heading color="alternateHeading" size={2}>
          Interested in sponsoring?
        </Heading>
        <TextWrapper>
          <Text pt={10} pb={30}>
            MagnoliaJS is Mississippi's{" "}
            <strong>only developer conference</strong>. Our mission is to foster
            growth and opportunities for developers in the Southeast and be the
            launching point for greater things for the tech in Mississippi.
          </Text>
          <Text pt={10} pb={30}>
            We are aiming to bring together around 2,000 web developers and
            friends to learn new skills and concepts and to network and develop
            new relationships.
          </Text>
          <Text pb={40}>
            Here's your chance to contribute to that mission! We're looking for
            the best companies to partner with us and help to make the
            second-annual MagnoliaJS conference a success.
          </Text>
        </TextWrapper>
        <Link
          borderColor="alternateHeading"
          backgroundColor="rgba(0,0,0,0)"
          color="alternateHeading"
          href="/sponsor"
        >
          Learn More
        </Link>
      </Alternate>
    </Layout>
  </ThemeProvider>
);

export default Root;
