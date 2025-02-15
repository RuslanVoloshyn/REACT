import { useEffect, useState } from "react";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [showOrders, setShowOrders] = useState(false);
	const [expandedOrder, setExpandedOrder] = useState(null);

	useEffect(() => {
		const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
		setOrders(savedOrders);
	}, []);

	const toggleOrders = () => setShowOrders(!showOrders);

	const toggleDetails = (orderId) => {
		setExpandedOrder(expandedOrder === orderId ? null : orderId);
	};

	const deleteOrder = (orderId) => {
		const updatedOrders = orders.filter(order => order.id !== orderId);
		setOrders(updatedOrders);
		localStorage.setItem("orders", JSON.stringify(updatedOrders));
	};

	return (
		<div>
			<button onClick={toggleOrders} className="btn btn-primary mb-3">
				{showOrders ? "Показати категорії" : "Мої замовлення"}
			</button>

			{showOrders ? (
				<div>
					<h3>Мої замовлення</h3>
					{orders.length === 0 ? (
						<p>У вас немає замовлень.</p>
					) : (
						<ul className="list-group">
							{orders.map((order) => (
								<li key={order.id} className="list-group-item">
									<div className="d-flex justify-content-between">
                    <span>
                      <strong>Дата:</strong> {order.date} | <strong>Ціна:</strong> ${order.total}
                    </span>
										<button onClick={() => deleteOrder(order.id)} className="btn btn-danger btn-sm">Видалити</button>
									</div>
									<button onClick={() => toggleDetails(order.id)} className="btn btn-link">
										{expandedOrder === order.id ? "Сховати деталі" : "Показати деталі"}
									</button>
									{expandedOrder === order.id && (
										<div className="mt-2">
											<h5>Деталі замовлення</h5>
											<ul>
												{order.items.map((item, index) => (
													<li key={index}>{item.name} - {item.quantity} шт.</li>
												))}
											</ul>
										</div>
									)}
								</li>
							))}
						</ul>
					)}
				</div>
			) : (
				<p>Тут буде список категорій...</p>
			)}
		</div>
	);
};

export default Orders;
