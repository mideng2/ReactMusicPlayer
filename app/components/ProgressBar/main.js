import React from 'react';


import './style.less'

class ProgressBar extends React.Component{
    constructor(props){
        super(props)
    }

    changeProgress(e){
        let progressBar = this.refs.progressBar;
        let progress = ( e.clientX - progressBar.getBoundingClientRect().left ) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress)

    }

    render(){
        return (
            <div className='comp-progress-bar'>
                <div className='bar-wrap' ref="progressBar" onClick={this.changeProgress.bind(this)}>
                    <div className='bar-content' style={{width : this.props.progress + '%'}}>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;