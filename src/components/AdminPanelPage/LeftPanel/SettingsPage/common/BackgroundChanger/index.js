import React from 'react'

import './style.css';


const isColor = (str) => {
    return /#[0-9A-F]{3}/i.test(str) || /rgb/i.test(str)
};

export default class BackgroundChanger extends React.Component {

    constructor() {
        super();
    }


    onChange (e) {
        const isURL = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        if (isURL.test(e.target.value)) {
            this.props.onChange({value: `url(${e.target.value})`, pathConfig: this.props.pathConfig});
            return;
        }

        this.props.onChange({value: e.target.value, pathConfig: this.props.pathConfig});
    }

    render () {
        const {props} = this;

        const styleColorCircle =  {
            backgroundColor: isColor(props.data) ? this.props.data : '',
            visibility: isColor(props.data) ? 'visible' : 'hidden'
        };

        return <div
            className="components-LeftPanel-SettingPage-common-BackgroundChanger-root"
        >
            <div
                className="components-LeftPanel-SettingPage-common-BackgroundChanger-colorCircle"
                style={styleColorCircle}/>
            {props.title}
            <input
                className="components-LeftPanel-SettingPage-common-BackgroundChanger-input"
                value={props.data}
                onChange={this.onChange.bind(this)}
            />
        </div>
    }
};
