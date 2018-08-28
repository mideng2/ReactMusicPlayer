import React from 'react'
import { render } from 'react-dom';


import Header from '../components/Header/main';


import MUSIC_LIST from '../config/musicList'


import PlayerStore from '../store/player'

import { observer } from 'mobx-react';

@observer
class App extends React.Component{
    constructor(props){
        super(props);

        // this.store = this.props.store;
        this.state = {
            musicList:MUSIC_LIST,
            currentMusitItem:{}
        }

    }

    componentDidMount() {
        // console.log(this.store.num);
        $("#player").jPlayer({
            supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true
        });

        this.playMusic(this.state.musicList[0]);

        // $("#player").bind($.jPlayer.event.ended, (e) => {
        //     this.playWhenEnd();
        // });
    }


    playMusic(item) {
        $("#player").jPlayer("setMedia", {
            mp3: item.fileUrl
        }).jPlayer('play');
        this.setState({
            currentMusitItem: item
        });
    }

    render(){
        return (
            <div style={{height:100 +'%'}}>
                <div id='player'></div>
                <Header />
                {React.cloneElement(this.props.children,this.state )}
            </div>
        )
    }
}

export  default App;