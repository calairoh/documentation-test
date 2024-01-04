import React, {Fragment, useState, useEffect} from "react";
import clsx from 'clsx';
import Layout from '@theme/Layout';

import Logo from "../components/Logo";
import Feature from "../components/Feature";
import VersionBanner from "../components/VersionBanner";
import LastPages from "../components/LastPages";

import SearchBar from "@theme/SearchBar";

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useWindowSize} from "@docusaurus/theme-common";

import styles from './index.module.css';
import PropTypes from "prop-types";


// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

const features = [
  {
    type: "feature",
    title: "Getting Started",
    icon: "rocket",
    toUrl: "/docs/getting-started/mia-platform-overview",
    description: `Start to learn the main concepts of Mia-Platform and how to use to  develop your services`,
  }
]

const recentLinks = {
  title: "Latest Documentation Updates",
  description:
      "Do you wish to stay updated on the latest changes and additions to our documentation? Please refer to the links below."
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const [showHexagons, setHexagonsShown] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    // setHexagonsShown(windowSize === desktop);
  }, [windowSize]);

  return (
    <Layout
      description="Mia-Platform provides the first end-to-end Digital Integration Hub on the market with a full DevOps Lifecycle Management: one unique Console to run Fast Data, Microservices and APIs."
      title={siteConfig.title}
    >
      <Fragment>
        <div className={styles.container}>
          {showHexagons && <Hexagons />}
          <header style={styles.header}>
            <div className={clsx("hero hero--primary", styles.heroBanner)}>
              <div className="container">
                <Logo />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
              </div>
              <div className="searchBarBox home">
                <SearchBar avoidKeyboardShortcuts />
              </div>
            </div>
          </header>
        </div>
      </Fragment>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              {<div className="row">
              <VersionBanner
                link="/docs/release-notes/v12-overview"
                majorVersion="12"
                subTitle="Click here and learn about the new features in this new v12."
                title="Mia-Platform v12 is now Generally Available"
              />
              </div>}

              <div className="row">
                <div className="col col--8">
                  <div className="row">
                    {features.map((props, idx) => {
                      if (props.type === 'feature') {
                        return <Feature key={idx} {...props} />
                      } else {
                        const {title, description, links} = props;
                        return (
                            <HowToBox
                              description={description}
                              key={idx}
                              links={links}
                              title={title}
                            />
                        );
                      }
                    })}
                  </div>

                </div>
                <div className="col col--4">
                  <div className="row">
                    <LastPages
                        description={recentLinks.description}
                        title={recentLinks.title}
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

Home.propTypes = {
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  type: PropTypes.string
}

export default Home;

