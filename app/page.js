"use client";
import Link from "next/link";
export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 flex flex-col items-center py-10">
			<div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
				<h1 className="text-3xl font-bold text-green-800 mb-2 text-center">
					UGMU - United Gramin Mahila Udyog
				</h1>
				<p className="text-center text-gray-600 mb-8">
					Empowering communities through the trading, marketing, and sale of
					high-quality food and puja items.
					<br />
					Experience a seamless, secure, and professional payment gateway for all
					your business needs.
				</p>
				<div className="text-center mb-6">
					<span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
						Trading, Marketing & Sale of Food and Puja Items
					</span>
				</div>
				<div className="flex justify-center mt-10">
					<a
						href="https://your-payment-gateway-link.com"
						className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-green-800 transition"
						target="_blank"
						rel="noopener noreferrer"
					>
						Proceed to Payment Gateway
					</a>
				</div>
			</div>
			<footer className="mt-8 text-gray-400 text-sm">
				&copy; {new Date().getFullYear()} UGMU Food Processing. All rights
				reserved.
				<div>
					<Link href="/terms.html" className="hover:text-green-600 underline">
						Terms & Conditions
					</Link>
					<span className="mx-2">|</span>
					<Link href="/privacy.html" className="hover:text-green-600 underline">
						Privacy Policy
					</Link>
					<span className="mx-2">|</span>
					<Link href="/returns.html" className="hover:text-green-600 underline">
						Refund & Returns Policy
					</Link>
				</div>
			</footer>
		</div>
	);
}

