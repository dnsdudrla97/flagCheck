import React from 'react';
import { Routes, Route } from 'react-router-dom';
import withPageTitle from './services/withPageTitle';
import PageContainer from './components/PageContainer/PageContainer.component';
import HomePage from './pages/HomePage/HomePage.component';
import FlagPage from './pages/FlagPage/FlagPage.component';
// import NotFound from './pages/NotFound/NotFound.component';
import { connect } from 'react-redux';


const HomePageComponent = withPageTitle({
    component: PageContainer({ component: HomePage, route: 'HomePage' }),
    title: 'Zer0Luck'
});

const FlagPageComponent = withPageTitle({
    component: PageContainer({ component: FlagPage }),
    title: 'Do You Want Flag?'
});

const Routes_R = () => {
    return <Routes>
        <Route path='/' element={<HomePageComponent />} />
        <Route sensitive exact path='/flag' element={<FlagPageComponent />} />
        {/* <Route path='*' component={NotFoundComponent} /> */}
    </Routes>
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		state
	}
}

export default connect(mapStateToProps)(Routes_R)
