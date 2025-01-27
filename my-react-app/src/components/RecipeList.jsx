import { recipes } from './../helpers/data1.js';

export default function RecipeList() {
	return (
		<div>
			<h2>Рецепти</h2>
			{recipes.map(recipe =>
				<div key={recipe.id}>
					<h3>{recipe.name}</h3>
					<ul>
						{recipe.ingredients.map(ingredient =>
							<li key={ingredient}>
								{ingredient}
							</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
}
