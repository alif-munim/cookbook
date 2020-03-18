import React from "react";

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="Recipe">
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;