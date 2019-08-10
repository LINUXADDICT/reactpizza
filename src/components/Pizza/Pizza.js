import React from 'react';
import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredients/PizzaIngredients';

const pizza = props => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <PizzaIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr,el) => {
            return arr.concat(el);
        }, []);
        console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p className={classes.addIngredients}>Start adding ingredients!</p>
    }
    return(
        <div className={classes.Pizza}>
            <div className={classes.plate}>
                <div className={classes.pizzabase1}>
                </div>
                {/*<PizzaIngredient type='tomato' />*/}
                {transformedIngredients}
            </div>
        </div>
    );
};

export default pizza;
