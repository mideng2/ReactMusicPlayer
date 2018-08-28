import React from 'react';
import { Router , IndexRoute ,Link, Route,browserHistory,hashHistory } from 'react-router';


import './style.less';


class Index extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className='page-index'>
                这里是首页
                <Link to="/player">音乐播放器</Link>
            </div>
        )
    }
}

export default Index;
