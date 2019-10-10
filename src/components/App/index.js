import { connect } from 'react-redux';

import App from './App';
import actions from '../../store/story/actions';

const mapStateToProps = state => ({
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
