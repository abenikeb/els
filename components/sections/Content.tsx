"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Heart,
	MessageCircle,
	Share2,
	Search,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ShareModal from "./ShareModal";
import CommentSection from "./CommentSection";
import axios from "@/configs/axios";

type ContentItem = {
	id: string;
	title: string;
	description: string;
	type: "VIDEO" | "AUDIO" | "TEXT";
	url: string | null;
	createdAt: string;
};

export default function Content() {
	const { t } = useLanguage();
	const [activeTab, setActiveTab] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [contentItems, setContentItems] = useState<ContentItem[]>([]);
	const [page, setPage] = useState(1);
	const [isShareModalOpen, setIsShareModalOpen] = useState(false);
	const [currentShareItem, setCurrentShareItem] = useState<ContentItem | null>(
		null
	);

	useEffect(() => {
		// In a real application, you would fetch data from an API here
		// For now, we'll use mock data
		const fetchContentItems = async () => {
			// Simulating API call
			const { data } = await axios.get("/contents");
			console.log({ data });
			setContentItems(data);
		};

		fetchContentItems();
	}, []);

	const handleLike = (itemId: string) => {
		// Implement like functionality
		console.log(`Liked item: ${itemId}`);
	};

	const handleShare = (item: ContentItem) => {
		setCurrentShareItem(item);
		setIsShareModalOpen(true);
	};

	const filteredItems = contentItems.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const filteredAndTypedItems =
		activeTab === "all"
			? filteredItems
			: filteredItems.filter((item) => item.type.toLowerCase() === activeTab);

	return (
		<div className="max-w-4xl mx-auto space-y-8 pb-16 bg-gray-50">
			<header className="sticky top-0 bg-blue-900 text-white z-10 py-4 px-4 shadow-md">
				<h1 className="text-3xl font-bold mb-4">{t("content.title")}</h1>
				<div className="flex items-center space-x-2">
					<Input
						type="text"
						placeholder={t("content.searchPlaceholder")}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="flex-grow bg-white text-blue-900"
					/>
					<Button size="icon" className="bg-blue-700 hover:bg-blue-600">
						<Search className="h-4 w-4" />
					</Button>
				</div>
			</header>

			<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
				<TabsList className="grid w-full grid-cols-4 bg-blue-100">
					<TabsTrigger
						value="all"
						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
						{t("content.all")}
					</TabsTrigger>
					<TabsTrigger
						value="video"
						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
						{t("content.video")}
					</TabsTrigger>
					<TabsTrigger
						value="audio"
						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
						{t("content.audio")}
					</TabsTrigger>
					<TabsTrigger
						value="text"
						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
						{t("content.text")}
					</TabsTrigger>
				</TabsList>
				<TabsContent value="all">
					<ScrollArea className="h-[calc(100vh-200px)]">
						<AnimatePresence>
							{filteredAndTypedItems.map((item, index) => (
								<motion.div
									key={item.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}>
									<ContentCard
										item={item}
										onLike={handleLike}
										onShare={handleShare}
									/>
								</motion.div>
							))}
						</AnimatePresence>
						<Button
							onClick={() => setPage((prevPage) => prevPage + 1)}
							className="w-full mt-4 bg-blue-700 hover:bg-blue-600 text-white">
							{t("content.loadMore")}
						</Button>
					</ScrollArea>
				</TabsContent>
				{["video", "audio", "text"].map((type) => (
					<TabsContent key={type} value={type}>
						<ScrollArea className="h-[calc(100vh-200px)]">
							{filteredAndTypedItems
								.filter((item) => item.type.toLowerCase() === type)
								.map((item, index) => (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3, delay: index * 0.1 }}>
										<ContentCard
											item={item}
											onLike={handleLike}
											onShare={handleShare}
										/>
									</motion.div>
								))}
						</ScrollArea>
					</TabsContent>
				))}
			</Tabs>
			{isShareModalOpen && currentShareItem && (
				<ShareModal
					item={currentShareItem}
					onClose={() => setIsShareModalOpen(false)}
				/>
			)}
		</div>
	);
}

function getYouTubeEmbedUrl(url: any) {
	try {
		const parsedUrl = new URL(url);
		const videoId = parsedUrl.searchParams.get("v");
		return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
	} catch (error) {
		console.error("Invalid YouTube URL:", error);
		return null;
	}
}

function ContentCard({
	item,
	onLike,
	onShare,
}: {
	item: ContentItem | any;
	onLike: (id: string) => void;
	onShare: (item: ContentItem) => void;
}) {
	const { t } = useLanguage();
	const [isExpanded, setIsExpanded] = useState(false);
	const [showComments, setShowComments] = useState(false);

	return (
		<Card className="mb-4 overflow-hidden">
			<CardContent className="p-4">
				<div className="flex items-center space-x-4 mb-4">
					<Avatar>
						<AvatarImage src="/placeholder.svg" />
						<AvatarFallback>AU</AvatarFallback>
					</Avatar>
					<div>
						<h3 className="font-semibold">
							{item.author?.givenName as any} {item.author?.fatherName as any}
						</h3>
						<p className="text-sm text-gray-500">
							{new Date(item.createdAt).toLocaleDateString()}
						</p>
					</div>
				</div>
				<h2 className="text-xl font-bold mb-2">{item.title}</h2>
				{item.type === "VIDEO" && item.url && (
					<div
						className="aspect-video bg-gray-200 rounded-lg mb-4"
						style={{ position: "relative" }}>
						{getYouTubeEmbedUrl(item.url) ? (
							<iframe
								src={getYouTubeEmbedUrl(item.url) as any}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="w-full h-full rounded-lg"
								style={{ touchAction: "manipulation" }} // Ensure touch actions are allowed
							></iframe>
						) : (
							<p>Invalid video URL</p>
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
					<p className="mb-4">
						{isExpanded
							? item.description
							: `${item.description.slice(0, 150)}...`}
					</p>
				)}
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
				<div className="flex items-center space-x-4 mt-4">
					{/* <Button
						variant="ghost"
						size="sm"
						onClick={() => onLike(item.id)}
						className="text-blue-600 hover:text-blue-800">
						<Heart className="h-4 w-4 mr-2" />0
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setShowComments(!showComments)}
						className="text-blue-600 hover:text-blue-800">
						<MessageCircle className="h-4 w-4 mr-2" />0
					</Button> */}
					<Button
						variant="ghost"
						size="sm"
						onClick={() => onShare(item)}
						className="text-blue-600 hover:text-blue-800">
						<Share2 className="h-4 w-4 mr-2" />
						{t("content.share")}
					</Button>
				</div>
				{/* {showComments && <CommentSection itemId={item.id} />} */}
			</CardContent>
		</Card>
	);
}

// "use client";

// import { useState, useEffect } from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
// 	Heart,
// 	MessageCircle,
// 	Share2,
// 	Search,
// 	ChevronDown,
// 	ChevronUp,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import ShareModal from "./ShareModal";
// import CommentSection from "./CommentSection";

// type Post = {
// 	id: string;
// 	title: string;
// 	content: string;
// 	description: string;
// 	type: "video" | "audio" | "text";
// 	author: {
// 		name: string;
// 		avatar: string;
// 	};
// 	date: string;
// 	likes: number;
// 	comments: number;
// };

// export default function Content() {
// 	const { t, getLocalizedApiData } = useLanguage();
// 	const [activeTab, setActiveTab] = useState("all");
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [posts, setPosts] = useState<Post[]>([]);
// 	const [page, setPage] = useState(1);
// 	const [isShareModalOpen, setIsShareModalOpen] = useState(false);
// 	const [currentSharePost, setCurrentSharePost] = useState<Post | null>(null);

// 	useEffect(() => {
// 		const fetchPosts = () => {
// 			const allContent = getLocalizedApiData("content") as
// 				| { [key: string]: any }
// 				| undefined;

// 			if (allContent) {
// 				let newPosts: Post[] = [];

// 				if (allContent.videoUrl) {
// 					newPosts = newPosts.concat(
// 						Object.entries(allContent.videoUrl).map(([lang, url]) => ({
// 							id: `video-${Math.random().toString(36).substr(2, 9)}`,
// 							title: "Video Content",
// 							content: url as string,
// 							description:
// 								"This is a sample video description. Click to view more details.",
// 							type: "video" as const,
// 							author: { name: "Video Author", avatar: "/placeholder.svg" },
// 							date: new Date().toLocaleDateString(),
// 							likes: 0,
// 							comments: 0,
// 						}))
// 					);
// 				}

// 				if (allContent.audioUrl) {
// 					newPosts = newPosts.concat(
// 						Object.entries(allContent.audioUrl).map(([lang, url]) => ({
// 							id: `audio-${Math.random().toString(36).substr(2, 9)}`,
// 							title: "Audio Content",
// 							content: url as string,
// 							description:
// 								"This is a sample audio description. Click to view more details.",
// 							type: "audio" as const,
// 							author: { name: "Audio Author", avatar: "/placeholder.svg" },
// 							date: new Date().toLocaleDateString(),
// 							likes: 0,
// 							comments: 0,
// 						}))
// 					);
// 				}

// 				if (allContent.textContent) {
// 					Object.entries(allContent.textContent).forEach(([lang, content]) => {
// 						newPosts.push({
// 							id: `text-${Math.random().toString(36).substr(2, 9)}`,
// 							title: "Text Content",
// 							content: content as string,
// 							description:
// 								"This is a sample text description. Click to view more details.",
// 							type: "text" as const,
// 							author: { name: "Text Author", avatar: "/placeholder.svg" },
// 							date: new Date().toLocaleDateString(),
// 							likes: 0,
// 							comments: 0,
// 						});
// 					});
// 				}

// 				const filteredPosts =
// 					activeTab === "all"
// 						? newPosts
// 						: newPosts.filter((post) => post.type === activeTab);
// 				setPosts((prevPosts) => [...prevPosts, ...filteredPosts]);
// 			}
// 		};

// 		fetchPosts();
// 	}, [activeTab, page, getLocalizedApiData]);

// 	const handleLike = (postId: string) => {
// 		setPosts((prevPosts) =>
// 			prevPosts.map((post) =>
// 				post.id === postId ? { ...post, likes: post.likes + 1 } : post
// 			)
// 		);
// 	};

// 	const handleShare = (post: Post) => {
// 		setCurrentSharePost(post);
// 		setIsShareModalOpen(true);
// 	};

// 	const filteredPosts = posts.filter((post) =>
// 		post.title.toLowerCase().includes(searchQuery.toLowerCase())
// 	);

// 	return (
// 		<div className="max-w-4xl mx-auto space-y-8 pb-16 bg-gray-50">
// 			<header className="sticky top-0 bg-blue-900 text-white z-10 py-4 px-4 shadow-md">
// 				<h1 className="text-3xl font-bold mb-4">{t("content.title")}</h1>
// 				<div className="flex items-center space-x-2">
// 					<Input
// 						type="text"
// 						placeholder={t("content.searchPlaceholder")}
// 						value={searchQuery}
// 						onChange={(e) => setSearchQuery(e.target.value)}
// 						className="flex-grow bg-white text-blue-900"
// 					/>
// 					<Button size="icon" className="bg-blue-700 hover:bg-blue-600">
// 						<Search className="h-4 w-4" />
// 					</Button>
// 				</div>
// 			</header>

// 			<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
// 				<TabsList className="grid w-full grid-cols-4 bg-blue-100">
// 					<TabsTrigger
// 						value="all"
// 						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
// 						{t("content.all")}
// 					</TabsTrigger>
// 					<TabsTrigger
// 						value="video"
// 						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
// 						{t("content.video")}
// 					</TabsTrigger>
// 					<TabsTrigger
// 						value="audio"
// 						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
// 						{t("content.audio")}
// 					</TabsTrigger>
// 					<TabsTrigger
// 						value="text"
// 						className="data-[state=active]:bg-blue-700 data-[state=active]:text-white">
// 						{t("content.text")}
// 					</TabsTrigger>
// 				</TabsList>
// 				<TabsContent value="all">
// 					<ScrollArea className="h-[calc(100vh-200px)]">
// 						<AnimatePresence>
// 							{filteredPosts.map((post, index) => (
// 								<motion.div
// 									key={post.id}
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{ opacity: 1, y: 0 }}
// 									exit={{ opacity: 0, y: -20 }}
// 									transition={{ duration: 0.3, delay: index * 0.1 }}>
// 									<PostCard
// 										post={post}
// 										onLike={handleLike}
// 										onShare={handleShare}
// 									/>
// 								</motion.div>
// 							))}
// 						</AnimatePresence>
// 						<Button
// 							onClick={() => setPage((prevPage) => prevPage + 1)}
// 							className="w-full mt-4 bg-blue-700 hover:bg-blue-600 text-white">
// 							{t("content.loadMore")}
// 						</Button>
// 					</ScrollArea>
// 				</TabsContent>
// 				<TabsContent value="video">
// 					<ScrollArea className="h-[calc(100vh-200px)]">
// 						{filteredPosts
// 							.filter((post) => post.type === "video")
// 							.map((post, index) => (
// 								<motion.div
// 									key={post.id}
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{ opacity: 1, y: 0 }}
// 									exit={{ opacity: 0, y: -20 }}
// 									transition={{ duration: 0.3, delay: index * 0.1 }}>
// 									<PostCard
// 										post={post}
// 										onLike={handleLike}
// 										onShare={handleShare}
// 									/>
// 								</motion.div>
// 							))}
// 					</ScrollArea>
// 				</TabsContent>
// 				<TabsContent value="audio">
// 					<ScrollArea className="h-[calc(100vh-200px)]">
// 						{filteredPosts
// 							.filter((post) => post.type === "audio")
// 							.map((post, index) => (
// 								<motion.div
// 									key={post.id}
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{ opacity: 1, y: 0 }}
// 									exit={{ opacity: 0, y: -20 }}
// 									transition={{ duration: 0.3, delay: index * 0.1 }}>
// 									<PostCard
// 										post={post}
// 										onLike={handleLike}
// 										onShare={handleShare}
// 									/>
// 								</motion.div>
// 							))}
// 					</ScrollArea>
// 				</TabsContent>
// 				<TabsContent value="text">
// 					<ScrollArea className="h-[calc(100vh-200px)]">
// 						{filteredPosts
// 							.filter((post) => post.type === "text")
// 							.map((post, index) => (
// 								<motion.div
// 									key={post.id}
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{ opacity: 1, y: 0 }}
// 									exit={{ opacity: 0, y: -20 }}
// 									transition={{ duration: 0.3, delay: index * 0.1 }}>
// 									<PostCard
// 										post={post}
// 										onLike={handleLike}
// 										onShare={handleShare}
// 									/>
// 								</motion.div>
// 							))}
// 					</ScrollArea>
// 				</TabsContent>
// 			</Tabs>
// 			{isShareModalOpen && currentSharePost && (
// 				<ShareModal
// 					post={currentSharePost}
// 					onClose={() => setIsShareModalOpen(false)}
// 				/>
// 			)}
// 		</div>
// 	);
// }

// function PostCard({
// 	post,
// 	onLike,
// 	onShare,
// }: {
// 	post: Post | any;
// 	onLike: (id: string) => void;
// 	onShare: (post: Post) => void;
// }) {
// 	const { t } = useLanguage();
// 	const [isExpanded, setIsExpanded] = useState(false);
// 	const [showComments, setShowComments] = useState(false);

// 	return (
// 		<Card className="mb-4 overflow-hidden">
// 			<CardContent className="p-4">
// 				<div className="flex items-center space-x-4 mb-4">
// 					<Avatar>
// 						<AvatarImage src={post.author.avatar} />
// 						<AvatarFallback>{post.author.name[0]}</AvatarFallback>
// 					</Avatar>
// 					<div>
// 						<h3 className="font-semibold">{post.author.name}</h3>
// 						<p className="text-sm text-gray-500">{post.date}</p>
// 					</div>
// 				</div>
// 				<h2 className="text-xl font-bold mb-2">{post.title}</h2>
// 				{post.type === "video" && (
// 					<div className="aspect-video bg-gray-200 rounded-lg mb-4">
// 						<video
// 							src={post.content}
// 							controls
// 							className="w-full h-full rounded-lg">
// 							{t("content.videoPlayer")}
// 						</video>
// 					</div>
// 				)}
// 				{post.type === "audio" && (
// 					<div className="bg-gray-100 rounded-lg p-4 mb-4">
// 						<audio src={post.content} controls className="w-full">
// 							{t("content.audioPlayer")}
// 						</audio>
// 					</div>
// 				)}
// 				{/* {JSON.stringify(post.content)} */}
// 				{(post.type as any) === "text" && (
// 					<p className="mb-4">
// 						{isExpanded
// 							? post.content
// 							: `${post?.content?.en.slice(0, 150)}...`}
// 					</p>
// 				)}
// 				<p className="text-sm text-gray-600 mb-2">
// 					{isExpanded
// 						? post.description
// 						: `${post.description.slice(0, 100)}...`}
// 				</p>
// 				<Button
// 					variant="link"
// 					onClick={() => setIsExpanded(!isExpanded)}
// 					className="text-blue-600 hover:text-blue-800 p-0 h-auto font-semibold">
// 					{isExpanded ? (
// 						<>
// 							Show less <ChevronUp className="ml-1 h-4 w-4" />
// 						</>
// 					) : (
// 						<>
// 							Show more <ChevronDown className="ml-1 h-4 w-4" />
// 						</>
// 					)}
// 				</Button>
// 				<div className="flex items-center space-x-4 mt-4">
// 					<Button
// 						variant="ghost"
// 						size="sm"
// 						onClick={() => onLike(post.id)}
// 						className="text-blue-600 hover:text-blue-800">
// 						<Heart className="h-4 w-4 mr-2" />
// 						{post.likes}
// 					</Button>
// 					<Button
// 						variant="ghost"
// 						size="sm"
// 						onClick={() => setShowComments(!showComments)}
// 						className="text-blue-600 hover:text-blue-800">
// 						<MessageCircle className="h-4 w-4 mr-2" />
// 						{post.comments}
// 					</Button>
// 					<Button
// 						variant="ghost"
// 						size="sm"
// 						onClick={() => onShare(post)}
// 						className="text-blue-600 hover:text-blue-800">
// 						<Share2 className="h-4 w-4 mr-2" />
// 						{t("content.share")}
// 					</Button>
// 				</div>
// 				{showComments && <CommentSection postId={post.id} />}
// 			</CardContent>
// 		</Card>
// 	);
// }
