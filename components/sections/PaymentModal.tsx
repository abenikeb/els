import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

type PaymentModalProps = {
	package: {
		name: string;
		price: string;
	};
	onClose: () => void;
};

export default function PaymentModal({
	package: pkg,
	onClose,
}: PaymentModalProps) {
	const { t } = useLanguage();
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would integrate with the Telebirr API
		console.log(
			"Processing payment for",
			pkg.name,
			"with phone number",
			phoneNumber
		);
		// After successful payment:
		onClose();
	};

	return (
		<Dialog open={true} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{t("payment.title")}</DialogTitle>
					<DialogDescription>{t("payment.description")}</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="phone">{t("payment.phoneLabel")}</Label>
						<Input
							id="phone"
							type="tel"
							placeholder={t("payment.phonePlaceholder")}
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Image
								src="/telebirr-logo.png"
								alt="Telebirr"
								width={32}
								height={32}
								className="mr-2"
							/>
							<span>{t("payment.payWith")}</span>
						</div>
						<span className="font-bold">{pkg.price}</span>
					</div>
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white">
						{t("payment.confirm")}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
