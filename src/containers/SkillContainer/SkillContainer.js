import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Skill from '../../components/Skill';

function mapStateToProps (state) {
	return {
  		skill:state.toJSON().skillReducer.skill
    };
}

export default connect(mapStateToProps)(Skill);