import React from "react";
import {ListChecks } from 'lucide-react';

function KeyFeatures(props) {
    return (
        <div className="key-features-title">
            <p className="key-features-title">
                <span style={{ display: 'inline-block', verticalAlign: 'top', marginRight: '5px' }}>
                    <ListChecks icon={props.icon} size="24" />
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'top'}}>
                    <strong style={{ fontSize: '20px' }}>{props.title}</strong>
                </span>
            </p>
            <p className="ke-features-description">
                {props.description}
            </p>
        </div>
    );
}

export default KeyFeatures;
