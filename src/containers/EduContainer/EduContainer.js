import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Edu from '../../components/Edu';

function mapStateToProps (state) {
	return {
  		edu:state.toJSON().eduReducer.edu
    };
}

export default connect(mapStateToProps)(Edu);