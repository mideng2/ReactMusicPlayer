import { observable , action ,computed  ,configure} from 'mobx';
import { observer } from 'mobx-react';
import React ,{ Component } from 'react';
import ReactDom from 'react-dom';

configure({enforceActions:true});


class PlayerStore {
    @observable isPlay = true;

    @action start = ()=>{
        this.isPlay = true;
    };

    @action stop = () =>{
        this.isPlay = false;
    }
}

export default PlayerStore
