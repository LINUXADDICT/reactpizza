import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Tomato', type: 'tomato' },
    { label: 'Veggies', type: 'veggies' },
    { label: 'Corn', type: 'corns' },
    { label: 'Mushrooms', type: 'mushrooms' }
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        { controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientRemove(ctrl.type)}
            />
        )) }
    </div>
);

export default buildControls;
