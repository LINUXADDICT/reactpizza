import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './PizzaIngredients.css'

class PizzaIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('tomato'):
                ingredient = (
                    <div className={classes.containertomatoes}>
                        <div className={classes.tomato1}>
                        </div>
                        <div className={classes.tomato2}>
                        </div>
                        <div className={classes.tomato3}>
                        </div>
                        <div className={classes.tomato4}>
                        </div>
                        <div className={classes.tomato5}>
                        </div>
                        <div className={classes.tomato6}>
                        </div>
                        <div className={classes.tomato7}>
                        </div>
                        <div className={classes.tomato8}>
                        </div>
                        <div className={classes.tomato9}>
                        </div>
                        <div className={classes.tomato10}>
                        </div>
                        <div className={classes.tomato11}>
                        </div>
                        <div className={classes.tomato12}>
                        </div>
                    </div>
                );
                break;

            case ('cheese'):
                ingredient = (
                    <div className={classes.containercheese}>
                        <div className={classes.cheese}>
                        </div>
                    </div>
                );
                break;

            case ('mushrooms'):
                ingredient = (
                    <div className={classes.containermushrooms}>
                        <div className={classes.mushroom1}>
                        </div>
                        <div className={classes.mushroom2}>
                        </div>
                        <div className={classes.mushroom3}>
                        </div>
                        <div className={classes.mushroom4}>
                        </div>
                        <div className={classes.mushroom5}>
                        </div>
                        <div className={classes.mushroom6}>
                        </div>
                        <div className={classes.mushroom7}>
                        </div>
                        <div className={classes.mushroom8}>
                        </div>
                        <div className={classes.mushroom9}>
                        </div>
                        <div className={classes.mushroom10}>
                        </div>
                        <div className={classes.mushroom11}>
                        </div>
                    </div>
                );
                break;

            case ('corns'):
                ingredient = (
                    <div className={classes.containercorns}>
                        <div className={classes.corn1}>
                        </div>
                        <div className={classes.corn2}>
                        </div>
                        <div className={classes.corn3}>
                        </div>
                        <div className={classes.corn4}>
                        </div>
                        <div className={classes.corn5}>
                        </div>
                        <div className={classes.corn6}>
                        </div>
                        <div className={classes.corn7}>
                        </div>
                        <div className={classes.corn8}>
                        </div>
                        <div className={classes.corn9}>
                        </div>
                    </div>
                );
                break;

            case ('veggies'):
                ingredient = (
                    <div className={classes.containerveggies}>
                        <div className={classes.veg1}>
                        </div>
                        <div className={classes.veg2}>
                        </div>
                        <div className={classes.veg3}>
                        </div>
                        <div className={classes.veg4}>
                        </div>
                        <div className={classes.veg5}>
                        </div>
                        <div className={classes.veg6}>
                        </div>
                        <div className={classes.veg7}>
                        </div>
                        <div className={classes.veg8}>
                        </div>
                        <div className={classes.veg9}>
                        </div>
                        <div className={classes.veg10}>
                        </div>
                        <div className={classes.veg11}>
                        </div>
                        <div className={classes.veg12}>
                        </div>
                        <div className={classes.veg13}>
                        </div>
                        <div className={classes.veg14}>
                        </div>
                        <div className={classes.veg15}>
                        </div>
                    </div>
                );
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    };
}

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredient;
