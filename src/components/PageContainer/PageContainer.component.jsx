import React, { Fragment } from 'react';

const PageContainer = ({ component: Component, route}) => {
    return class DefaultPageContainer extends React.Component {
        render() { 
            switch (route) {
                case 'HomePage':
                    return <Fragment>
                        <div>
                            <div id='content'>
                                <Component {...this.props}/>
                            </div>
                        </div>
                    </Fragment>
                case 'FlagPage':
                    return <Fragment>
                    <div>
                        <div>
                            <Component {...this.props}/>
                        </div>
                    </div>
                </Fragment>
                default:
                    return <Fragment>
                        <div>
                            <div id='content'>
                                <Component {...this.props}/>
                            </div>
                        </div>
                    </Fragment>
            }
        }
    };
};

export default PageContainer;