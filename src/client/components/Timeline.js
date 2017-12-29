import React, { Component } from 'react';
import './Home.css';

class Timeline extends Component {
    render() {
        return (
            <div>
                <iframe title="timeline" src="https://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0Aign3Td5MzLxdDBfMHpwVnoyZklIN0dPUVhySUVqVUE&amp;font=Bevan-PotanoSans&amp;maptype=toner&amp;lang=en&amp;height=800" width="100%" height="800" frameBorder="0"></iframe>
            </div>
        );
    }
}

export default Timeline;

