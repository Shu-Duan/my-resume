import React from 'react';
import ReactDOM from 'react-dom';
import HeadContainer from '../../containers/HeadContainer';
import EduContainer from '../../containers/EduContainer';
import ExpContainer from '../../containers/ExpContainer';
import SkillContainer from '../../containers/SkillContainer';

const Main = () => (
  <div className="container">
	<div className="panel-group">
    <HeadContainer />
    <EduContainer />
    <ExpContainer />
    <SkillContainer />
	</div>
  </div>
);

export default Main;