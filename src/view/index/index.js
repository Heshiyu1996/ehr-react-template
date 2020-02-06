import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './../_common/App';
import NotFound from '@/components/not-found';
import 'core-js'; // 兼容IE处理
import './../_common/mixins';
import '@/assets/iconfont/iconfont.css';
import '@/assets/css/index.less';

const Page = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(<Page />, document.getElementById('root'));
