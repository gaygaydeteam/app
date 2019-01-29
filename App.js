import React from 'react';
import { AppLoading, Font } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Root from './src/Root';
import SignIn from './src/Components/Form/SignIn';
import SignUp from './src/Components/Form/SignUp';
import Theme from './src/theme/default';
const reducer = (state = {count: 0}, action) => {
  console.log('action type:' + action.type);
  const count = state.count;
  switch(action.type) {
    case 'add':
      return {count: count + 1};
    default:
      return state;
  }
};
let store = createStore(reducer);
const RootNavigator = createStackNavigator({
  Root,
  SignIn,
  SignUp,
},{
  //全屏
  // headerMode: 'none',
  //初始化路由页面
  initialRouteName: "SignIn"
});
const RootContainer = createAppContainer(RootNavigator);
export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isReady: false,
      theme: null,
    }
  }
  async componentDidMount() {
    await Font.loadAsync(/*  */
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );
    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }
  render() {
    const { isReady, theme } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}