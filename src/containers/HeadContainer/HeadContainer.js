import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Head from '../../components/Head';

function mapStateToProps (state) {
	return {
  		head:state.toJSON().headReducer.head
    };
}

export default connect(mapStateToProps)(Head);