import { useState } from 'react';

const initialProducts = [{
	id: 0,
	name: 'Пахлава',
	count: 1,
}, {
	id: 1,
	name: 'Сир',
	count: 5,
}, {
	id: 2,
	name: 'Спагеті',
	count: 2,
}];

export default function ShoppingCart2() {
	const [
		products,
		setProducts
	] = useState(initialProducts)

	function handleIncreaseClick(productId) {
		setProducts(products.map(product => {
			if (product.id === productId) {
				return {
					...product,
					count: product.count + 1
				};
			} else {
				return product;
			}
		}))
	}

	function handleDecreaseClick(productId) {
		let nextProducts = products.map(product => {
			if (product.id === productId) {
				return {
					...product,
					count: product.count - 1
				};
			} else {
				return product;
			}
		});
		nextProducts = nextProducts.filter(p =>
			p.count > 0
		);
		setProducts(nextProducts)
	}

	return (
		<ul>
			{products.map(product => (
				<li key={product.id}>
					{product.name}
					{' '}
					(<b>{product.count}</b>)
					<button onClick={() => {
						handleIncreaseClick(product.id);
					}}>
						+
					</button>
					<button onClick={() => {
						handleDecreaseClick(product.id);
					}}>
						–
					</button>
				</li>
			))}
		</ul>
	);
}
