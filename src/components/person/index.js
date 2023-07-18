import React from "react";

export default class Person extends React.Component {
    constructor() {
        super();
        this.state = { step: 0 };

        this.takeStep = this.takeStep.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.takeStep(), 300);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    takeStep() {
        this.setState(({ step }) => ({ step: (step + 1) % 4 }));
    }

    render() {
        const { who } = this.props;
        const { step } = this.state;
        return (
            <>
                <i className={`person ${who} ${who}-down-${step}`}/>
            </>
        )
    }
}
