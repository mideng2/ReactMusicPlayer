import React from 'react';
import { render } from 'react-dom';

import ProgressBar from '../../components/ProgressBar/main'
import './style.less';

import formats from '../../utils/formats'


let duration = 0;
class Player extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            progress:0,
            volume:0,
            isPlay:true,
            time:0
        }

        // this.setState({})
        // this.setState((prevState, props) => ({
        //     counter: prevState.counter + props.increment
        // }));
    }

    componentDidMount() {
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute,
                volume: e.jPlayer.options.volume * 100,
                time: formats.formatTime(duration * (e.jPlayer.status.currentPercentAbsolute / 100))
            });
        });


    }



    componentWillUnmount() {
        $("#player").unbind($.jPlayer.event.timeupdate);
    }


    /**
     * 拖动播放器进度条
     * */
     changeProgressHandler(progress){
         //1长度发生改变
        //2播放的位置发生变化
        $("#player").jPlayer("play", duration * progress);
        this.setState({
            isPlay: true
        });
    }


    render(){
        return (
            <div className='page-player'>
                <div className='content'>

                    <div className='content-top'>


                        歌词滚动
                    </div>

                    <div className='content-bottom'>
                        {`${this.state.time} : ${formats.formatTime(duration)}`}

                        <div>
                            <i className='icon-act'></i>
                        </div>
                        <ProgressBar
                            progress={this.state.progress}
                            onProgressChange={this.changeProgressHandler.bind(this)}></ProgressBar>
                    </div>
                </div>




            </div>
        )
    }
}

export default Player;