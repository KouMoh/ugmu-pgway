"use client";
import { useState } from "react";

const PRODUCTS = [
	{ id: 1, name: "Sugar (50kg bag)", price: 2000 },
	{ id: 2, name: "Wheat (100kg sack)", price: 3500 },
	{ id: 3, name: "Rice (50kg bag)", price: 2500 },
	{ id: 4, name: "Maize (100kg sack)", price: 3200 },
];

export default function Home() {
	const [cart, setCart] = useState({});
	const [step, setStep] = useState(1);

	const addToCart = (product) => {
		setCart((prev) => ({
			...prev,
			[product.id]: (prev[product.id] || 0) + 1,
		}));
	};

	const removeFromCart = (product) => {
		setCart((prev) => {
			const qty = (prev[product.id] || 0) - 1;
			if (qty <= 0) {
				const { [product.id]: _, ...rest } = prev;
				return rest;
			}
			return { ...prev, [product.id]: qty };
		});
	};

	const total = Object.entries(cart).reduce(
		(sum, [id, qty]) => {
			const prod = PRODUCTS.find((p) => p.id === Number(id));
			return sum + (prod ? prod.price * qty : 0);
		},
		0
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 flex flex-col items-center py-10">
			<div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
				<h1 className="text-3xl font-bold text-green-800 mb-2 text-center">
					Food Raw Materials Payment Gateway
				</h1>
				<p className="text-center text-gray-600 mb-8">
					Securely purchase raw materials for your food business.
				</p>
				{step === 1 && (
					<>
						<h2 className="text-xl font-semibold mb-4 text-green-700">
							Select Products
						</h2>
						<div className="grid grid-cols-1 gap-4">
							{PRODUCTS.map((product) => (
								<div
									key={product.id}
									className="flex items-center justify-between border rounded-lg p-4"
								>
									<div>
										<div className="font-medium">{product.name}</div>
										<div className="text-sm text-gray-500">
											₹{product.price.toLocaleString()}
										</div>
									</div>
									<div className="flex items-center gap-2">
										<button
											className="px-2 py-1 bg-gray-200 rounded"
											onClick={() => removeFromCart(product)}
											disabled={!cart[product.id]}
										>
											-
										</button>
										<span className="w-6 text-center">
											{cart[product.id] || 0}
										</span>
										<button
											className="px-2 py-1 bg-green-500 text-white rounded"
											onClick={() => addToCart(product)}
										>
											+
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="mt-8 flex justify-between items-center">
							<div className="font-semibold text-lg">
								Total:{" "}
								<span className="text-green-700">
									₹{total.toLocaleString()}
								</span>
							</div>
							<button
								className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50"
								onClick={() => setStep(2)}
								disabled={total === 0}
							>
								Proceed to Payment
							</button>
						</div>
					</>
				)}
				{step === 2 && (
					<>
						<h2 className="text-xl font-semibold mb-4 text-green-700">
							Order Summary
						</h2>
						<ul className="mb-4">
							{Object.entries(cart).map(([id, qty]) => {
								const prod = PRODUCTS.find((p) => p.id === Number(id));
								if (!prod) return null;
								return (
									<li key={id} className="flex justify-between py-1">
										<span>
											{prod.name} x {qty}
										</span>
										<span>₹{(prod.price * qty).toLocaleString()}</span>
									</li>
								);
							})}
						</ul>
						<div className="font-semibold text-lg mb-6">
							Total:{" "}
							<span className="text-green-700">
								₹{total.toLocaleString()}
							</span>
						</div>
						<div className="mb-6">
							{/* Placeholder for payment gateway */}
							<div className="bg-yellow-100 border border-yellow-300 rounded p-4 text-center text-yellow-700">
								Payment gateway integration coming soon...
							</div>
						</div>
						<div className="flex justify-between">
							<button
								className="px-4 py-2 bg-gray-200 rounded"
								onClick={() => setStep(1)}
							>
								Back
							</button>
							<button
								className="px-6 py-2 bg-green-700 text-white rounded-lg font-semibold opacity-50 cursor-not-allowed"
								disabled
							>
								Pay Now
							</button>
						</div>
					</>
				)}
			</div>
			<footer className="mt-8 text-gray-400 text-sm">
				&copy; {new Date().getFullYear()} UGMU Food Processing. All rights
				reserved.
			</footer>
		</div>
	);
}
