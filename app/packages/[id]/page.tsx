"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import PaymentModal from "@/components/sections/PaymentModal";

type Plan = {
	name: string;
	price: string;
	features: string[];
};

export default function PackageDetails() {
	const { id } = useParams();
	const { t, apiData, getLocalizedApiData } = useLanguage();
	const [pkg, setPkg] = useState<any>(null);
	const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
	const [showPaymentModal, setShowPaymentModal] = useState(false);

	useEffect(() => {
		const packageData = apiData.packages.find((p: any) => p.id === Number(id));
		console.log({ packageData: packageData });
		setPkg(packageData);
	}, [id, apiData.packages]);

	if (!pkg) {
		return <div>{t("packages.notFound")}</div>;
	}

	const plans: Plan[] = [
		{
			name: "Basic",
			price: pkg.price.en,
			features: pkg.features,
		},
		{
			name: "Features",
			price: pkg.price.en,
			features: pkg.features,
		},
		{
			name: "Premium",
			price: pkg.price.en,
			features: pkg.features,
		},
	];

	const handlePurchase = (plan: Plan) => {
		setSelectedPlan(plan);
		setShowPaymentModal(true);
	};

	return (
		<div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
				<Image
					src={pkg.coverImage || "/assets/images/legal-shield.jpg"}
					alt={getLocalizedApiData(`packages.${pkg.id}.name`)}
					width={600}
					height={400}
					className="rounded-lg shadow-lg object-cover w-full md:w-1/2"
				/>
				<div className="md:w-1/2">
					<h1 className="text-4xl font-extrabold text-blue-900 mb-4">
						{getLocalizedApiData(`packages.${pkg.id}.name`)}
					</h1>
					<p className="text-xl text-gray-700 mb-6">
						{getLocalizedApiData(`packages.${pkg.id}.description`)}
					</p>
				</div>
			</div>

			<Tabs defaultValue="Basic" className="w-full">
				<TabsList className="grid w-full grid-cols-3 mb-8">
					{plans.map((plan) => (
						<TabsTrigger
							key={plan.name}
							value={plan.name}
							className="text-lg font-semibold py-3">
							{plan.name}
						</TabsTrigger>
					))}
				</TabsList>
				{plans.map((plan: any) => (
					<TabsContent key={plan.name} value={plan.name}>
						<Card>
							<CardHeader>
								<CardTitle className="text-3xl font-bold text-blue-800">
									{plan.name} Plan
								</CardTitle>
								<p className="text-2xl font-semibold text-blue-600">
									{plan.price}

									<span className="text-base font-normal text-gray-600">
										{" "}
										/ month
									</span>
								</p>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 mb-6">
									{/* {JSON.stringify(plan.features)} */}
									<li className="flex items-center">
										<svg
											className="h-5 w-5 text-green-500 mr-2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path d="M5 13l4 4L19 7"></path>
										</svg>
										{plan.features.en}
									</li>
									{/* {plan.features.map((feature, index) => (
									))} */}
								</ul>
								<Button
									className="w-full bg-white hover:bg-white py-2 text-blue-900 border-[1px] border-blue-800"
									onClick={() => handlePurchase(plan)}>
									<Image
										src="/assets/images/Telebirr.png"
										alt="Telebirr"
										width={44}
										height={44}
										className="mr-2"
									/>
									{t("packages.purchase")} {plan.name}
								</Button>
							</CardContent>
						</Card>
					</TabsContent>
				))}
			</Tabs>

			{showPaymentModal && selectedPlan && (
				<PaymentModal
					package={{
						...pkg,
						name: `${pkg.name} - ${selectedPlan.name}`,
						price: selectedPlan.price,
					}}
					onClose={() => setShowPaymentModal(false)}
				/>
			)}
		</div>
	);
}
