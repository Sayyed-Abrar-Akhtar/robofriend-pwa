import { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions';
import CardList from '../components/CardList';
import { Header } from '../components/Header';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

function App({
  searchField,
  onSearchChange,
  robots,
  onRequestRobots,
  isPending,
  error,
}) {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <div className='tc'>
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
