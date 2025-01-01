import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Ethio Legal Shield</h3>
						<p className="text-sm text-gray-400">
							Protecting your rights, securing your future.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#"
									className="text-sm text-gray-400 hover:text-white">
									Services
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-400 hover:text-white">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-400 hover:text-white">
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-400 hover:text-white">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<p className="text-sm text-gray-400">
							123 Main Street, Addis Ababa, Ethiopia
						</p>
						<p className="text-sm text-gray-400">Phone: +251 11 234 5678</p>
						<p className="text-sm text-gray-400">
							Email: info@ethiolegalshield.com
						</p>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-700 text-center">
					<p className="text-sm text-gray-400">
						&copy; 2023 Ethio Legal Shield. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
