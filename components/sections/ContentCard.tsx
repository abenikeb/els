import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronUp, Share2 } from "lucide-react";

type ContentItem = {
	id: string;
	title: string;
	description: string;
	type: "VIDEO" | "AUDIO" | "TEXT";
	url: string | null;
	createdAt: string;
	author?: {
		givenName: string;
		fatherName: string;
	};
};

function getYouTubeEmbedUrl(url: string) {
	try {
		const parsedUrl = new URL(url);
		const videoId = parsedUrl.searchParams.get("v");
		return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
	} catch (error) {
		console.error("Invalid YouTube URL:", error);
		return null;
	}
}

export default function ContentCard({ item }: { item: ContentItem }) {
	const { t } = useLanguage();
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<Card className="mb-4 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
			<CardContent className="p-6">
				<div className="flex items-center space-x-4 mb-4">
					<Avatar className="h-12 w-12 border-2 border-blue-200">
						<AvatarImage
							src={`https://api.dicebear.com/6.x/initials/svg?seed=${item.author?.givenName} ${item.author?.fatherName}`}
						/>
						<AvatarFallback>
							{item.author?.givenName?.[0]}
							{item.author?.fatherName?.[0]}
						</AvatarFallback>
					</Avatar>
					<div>
						{item.author ? (
							<h3 className="font-semibold text-blue-800">
								{item.author?.givenName} {item.author?.fatherName}
							</h3>
						) : (
							<h3 className="font-semibold text-blue-800">Abebe Teka</h3>
						)}

						<p className="text-sm text-gray-500">
							{new Date(item.createdAt).toLocaleDateString()}
						</p>
					</div>
				</div>
				<h2 className="text-2xl font-bold mb-3 text-blue-900">{item.title}</h2>
				{item.type === "VIDEO" && item.url && (
					<div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
						{getYouTubeEmbedUrl(item.url) ? (
							<iframe
								src={getYouTubeEmbedUrl(item.url) as string}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="w-full h-full"
								style={{
									border: "none",
									pointerEvents: "auto",
									touchAction: "auto",
								}}></iframe>
						) : (
							<p className="text-center text-gray-500 py-4">
								Invalid video URL
							</p>
						)}
					</div>
				)}
				{item.type === "AUDIO" && item.url && (
					<div className="bg-gray-100 rounded-lg p-4 mb-4">
						<audio src={item.url} controls className="w-full">
							{t("content.audioPlayer")}
						</audio>
					</div>
				)}
				{item.type === "TEXT" && (
					<p className="mb-4 text-gray-700 leading-relaxed">
						{isExpanded
							? item.description
							: `${item.description.slice(0, 150)}...`}
					</p>
				)}
				{item.type === "TEXT" && item.description.length > 150 && (
					<Button
						variant="link"
						onClick={() => setIsExpanded(!isExpanded)}
						className="text-blue-600 hover:text-blue-800 p-0 h-auto font-semibold">
						{isExpanded ? (
							<>
								Show less <ChevronUp className="ml-1 h-4 w-4" />
							</>
						) : (
							<>
								Show more <ChevronDown className="ml-1 h-4 w-4" />
							</>
						)}
					</Button>
				)}
				<div className="flex items-center space-x-4 mt-4">
					<Button
						variant="outline"
						size="sm"
						className="text-blue-600 hover:text-blue-800 border-blue-200 hover:border-blue-400 transition-colors duration-200">
						<Share2 className="h-4 w-4 mr-2" />
						{t("content.share")}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
