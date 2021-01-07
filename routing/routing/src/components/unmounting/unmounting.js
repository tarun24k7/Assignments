import React from 'react';

export default class UnMountingPhase extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <h1>
                        UNMOUNTING PHASE
                    </h1>
                    <h3>
                        This is UnMounting Phase Here You Can Check With UnMounting Of Data
                    </h3>
                </div>
            </div>
        )
    }
}