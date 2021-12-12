import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Mine',
    Svg: require('../../static/img/mining01.svg').default,
    description: (
      <>
        Most graphics cards younger than 10 years can mine Ravencoin!
        Check out our easy guide to get started minting your own $RVN.
      </>
    ),
  },
  {
    title: 'Broad Utility',
    Svg: require('../../static/img/whoa.svg').default,
    description: (
      <>
        Ravencoin is great blockchain for artists & entrepreneurs and is 
        robust and trusted enough to run the new Digital Euro coin.
      </>
    ),
  },
  {
    title: 'Basically, Better Bitcoin',
    Svg: require('../../static/img/goldcoin.svg').default,
    description: (
      <>
        Built from the same proven blockchain tech as Bitcoin but with
        extra features to record assets, Ravencoin is the future.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
