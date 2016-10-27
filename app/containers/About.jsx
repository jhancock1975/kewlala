import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About KewLaLa</h1>
      <div className={cx('description')}>
        <p>This my personal site for exercising skills related to my interests:
          web applications, data science, and artificial intelligence.
        </p>
        <p>
          The top level of this site is implemented using the <a href='https://github.com/reactGo/reactGo'>reactGo</a> framework.
        </p>
        <p>I am currently a software engineer at American Express.</p>
      </div>
      <div className={cx('contribute')}>
        <p>Contact me:
          <ul>
            <li>Email: jhancock1975@gmail.com</li>
            <li>Phone: 561-235-4231</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
