import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Exp from '../../components/Exp';

function mapStateToProps (state) {
	return {
  		exp:state.toJSON().expReducer.exp
    };
}

export default connect(mapStateToProps)(Exp);