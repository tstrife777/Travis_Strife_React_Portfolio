import React from "react";
import HeaderImg from "../assets/Theleadagent_page_header@2x.jpg";
import CompanyImage from "../assets/The_Lead_Agent_Logo.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/TLA_Page_Previews01@2x.jpg";
import Image2 from "../assets/TLA_Page_Previews02@2x.jpg";
import Image3 from "../assets/TLA_Page_Previews03@2x.jpg";
import Image4 from "../assets/TLA_Page_Previews04@2x.jpg";
import Image5 from "../assets/TLA_Page_Previews05@2x.jpg";
import FigmaScreen from "../assets/tla_figma_screen.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
function TLAWebsite() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">TheLeadAgent.com</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">Real Estate Marketing Agency</h1>
          <h2>Project Overview</h2>
          <p>
            The Lead Agent is a digital marketing agency that specializes in
            helping Real Estate Agents, Brokers, and Mortgage Loan Officers
            capture and convert leads into closed deals.
          </p>
          <p>
            The services it provides range from creating ads, building funnels,
            marketing automation, training, and more.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://theleadagent.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://theleadagent.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website URL
                </a>
              </span>
            </div>
          </div>
          <div>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Role:</strong>
              </li>
              <li>Designer</li>
              <li>Developer</li>
            </ul>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Deliverables:</strong>
              </li>
              <li>Wordpress Website</li>
              <li>Website Design</li>
              <li>Marketing Funnel</li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        ref={carousel}
        className="carousel overflow-hidden cursor-grab my-5 relative w-[100vw] ml-[-50vw] left-[50%] "
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {cimages.map((image) => {
            return (
              <motion.div key={image} className="item p-[20px] min-w-[26rem]">
                <img
                  src={image}
                  alt=""
                  className="rounded-[5px] w-full h-full pointer-events-none shadow-[0px_0px_10px_0px_rgba(0,0,0,.6)]"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <div>
        <h2>My Role</h2>
        <p>
          As the Founder and CEO of this company was in charge of everything
          until I needed to hire out.
        </p>
        <p>
          Everything from defining the target audience. Figuring out their
          biggest problem and pain points. Develop a solution and package it
          into an offer. Crystalizing the message, and writing copy that
          captures and converts leads into strategy calls, hiring, delegating,
          systematizing, and more.
        </p>
        <p>
          Basically, everything that's typically expected from a founder of a
          bootstrapped startup.
        </p>
        <h2>Problem / Solution</h2>
        <p>
          The last thing I wanted to do before I got my first client was to get
          in the red with a bunch of unnecessary expenses. So I knew I needed to
          keep the costs minimal and move fast.
        </p>
        <p>
          That's why I decided to go with WordPress as the CRM and Amazon AWS as
          the hosting. No need to spend the time custom coding anything since it
          was a simple 3-4 page status informational website.
        </p>
        <p>
          I could have sped up the processes a little more by going with a drag
          and drop platforms like Leadpages and Clickfunnels and just put
          together a 1-page landing page to start, but given my 15 years of
          experience with WordPress and the $3 AWS Lightsail hosting expense, I
          determined that was the best option for my situation as I wanted to
          keep the costs down.
        </p>
        <p>
          Here are my basic setup operating procedures below. This is on the fly
          and from memory, so forgive me if I miss a step.
        </p>
        <ol>
          <li>Buy domain (Google domains)</li>
          <li>Setup Host - Amazon AWS Lightsail Add WordPress instance</li>
          <li>Setup account in Cloudflare get nameservers</li>
          <li>Change nameservers in Google Domains Account to Cloudflare</li>
          <li>Setup Route 53 Hosted Zones in AWS</li>
          <li>Log in to WordPress Change Username login credentials</li>
          <li>Start adding plugins specifically Elementor</li>
          <li>Configure and publish</li>
        </ol>
        <p>
          The design was created in Photoshop for the image manipulation and
          Figma for the layout. It was put together in WordPress using
          Elementor.
        </p>
        <p>
          <img alt="figma screenshot" src={FigmaScreen} />
        </p>
        <p>
          The most time consuming part was creating the copy. But that's a story
          for another day.
        </p>
      </div>
    </div>
  );
}

export default TLAWebsite;
