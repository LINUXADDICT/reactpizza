import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from "../Pizza/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    cheese: 1,
    tomato: 0.50,
    mushrooms: 0.80,
    veggies: 1,
    corns: 1.20
};

class PizzaBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            tomato: 0,
            mushrooms: 0,
            veggies: 0,
            corns: 0
        },
        basePrice: 4
    };

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.basePrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.basePrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    render() {
        return(
            <Aux>
                <Pizza ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default PizzaBuilder;
