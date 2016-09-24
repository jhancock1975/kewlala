import React, { PropTypes } from 'react';
import TopicItem from 'components/TopicItem';
import classNames from 'classnames/bind';
import styles from 'css/components/project-section';

const cx = classNames.bind(styles);

const ProjectSection = ({ topics, onIncrement, onDecrement, onDestroy }) => {
  const topicItems = topics.map((topic, key) => {
    return (
      <TopicItem
        index={key}
        id={topic.id}
        key={key}
        text={topic.text}
        incrementCount={onIncrement}
        decrementCount={onDecrement}
        destroyTopic={onDestroy} />);
  });

  return (
    <div className={cx('project-section')}>
      <h3 className={cx('header')}>Projects</h3>
      <ul className={cx('list')}>{topicItems}</ul>
    </div>
  );
};

ProjectSection.propTypes = {
  topics: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default ProjectSection;
