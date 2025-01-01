"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Packages() {
	const { t, apiData, getLocalizedApiData } = useLanguage();

	return (
		<div className="space-y-12 py-2 px-2 sm:px-6 lg:px-4 bg-gray-50">
			<div className="text-center">
				<h2 className="text-4xl font-extrabold text-blue-900 mb-2">
					{t("packages.title")}
				</h2>
				{/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
					{t("packages.subtitle")}
				</p> */}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{apiData.packages.map((pkg: any, index: number) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}>
						<Link href={`/packages/${pkg.id}`} passHref>
							<Card className="h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
								<Image
									src={pkg.coverImage || "/assets/images/legal-shield.jpg"}
									alt={getLocalizedApiData(`packages.${index}.name`)}
									width={400}
									height={200}
									className="w-full h-48 object-cover rounded-t-lg"
								/>
								<CardHeader className="bg-blue-50 text-gray-900">
									<CardTitle className="text-2xl font-bold">
										{getLocalizedApiData(`packages.${index}.name`)}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex-grow p-4">
									<p className="text-gray-600">
										{getLocalizedApiData(`packages.${index}.description`)}
									</p>
								</CardContent>
							</Card>
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	);
}
