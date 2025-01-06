import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Link } from "lucide-react";

type Post = {
	id: string;
	title: string;
	content: string;
	type: "video" | "audio" | "text";
};

export default function ShareModal({ post, onClose }: any) {
	const [copied, setCopied] = useState(false);
	const shareUrl = `https://legalshield.com/content/1`;

	const handleCopyLink = () => {
		navigator.clipboard.writeText(shareUrl);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleShare = (platform: string) => {
		let url = "";
		switch (platform) {
			case "facebook":
				url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					shareUrl
				)}`;
				break;
			case "twitter":
				url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
					shareUrl
				)}&text=${encodeURIComponent(post.title)}`;
				break;
			case "linkedin":
				url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
					shareUrl
				)}&title=${encodeURIComponent(post.title)}`;
				break;
		}
		window.open(url, "_blank");
	};

	return (
		<Dialog open={true} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Share this content</DialogTitle>
					<DialogDescription>
						Choose a platform to share this content or copy the link
					</DialogDescription>
				</DialogHeader>
				<div className="flex justify-center space-x-4 my-4">
					<Button
						onClick={() => handleShare("facebook")}
						className="bg-blue-600 hover:bg-blue-700">
						<Facebook className="mr-2 h-4 w-4" /> Facebook
					</Button>
					<Button
						onClick={() => handleShare("twitter")}
						className="bg-sky-500 hover:bg-sky-600">
						<Twitter className="mr-2 h-4 w-4" /> Twitter
					</Button>
					<Button
						onClick={() => handleShare("linkedin")}
						className="bg-blue-700 hover:bg-blue-800">
						<Linkedin className="mr-2 h-4 w-4" /> LinkedIn
					</Button>
				</div>
				<div className="flex items-center space-x-2">
					<Input value={shareUrl} readOnly />
					<Button onClick={handleCopyLink} className="whitespace-nowrap">
						{copied ? "Copied!" : "Copy Link"}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
