import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Comment = {
	id: string;
	author: {
		name: string;
		avatar: string;
	};
	content: string;
	date: string;
};

export default function CommentSection({ postId }: { postId: string }) {
	const { t } = useLanguage();
	const [comments, setComments] = useState<Comment[]>([]);
	const [newComment, setNewComment] = useState("");

	const handleSubmitComment = () => {
		if (newComment.trim()) {
			const comment: Comment = {
				id: Math.random().toString(36).substr(2, 9),
				author: {
					name: "Current User",
					avatar: "/placeholder.svg",
				},
				content: newComment,
				date: new Date().toLocaleDateString(),
			};
			setComments([comment, ...comments]);
			setNewComment("");
		}
	};

	return (
		<div className="mt-4 space-y-4">
			<h3 className="font-semibold text-lg">{t("content.comments")}</h3>
			<div className="flex items-start space-x-2">
				<Avatar>
					<AvatarImage src="/placeholder.svg" />
					<AvatarFallback>U</AvatarFallback>
				</Avatar>
				<div className="flex-grow">
					<Textarea
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
						placeholder={t("content.addComment")}
						className="w-full"
					/>
					<Button
						onClick={handleSubmitComment}
						className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
						{t("content.postComment")}
					</Button>
				</div>
			</div>
			{comments.map((comment) => (
				<div key={comment.id} className="flex items-start space-x-2">
					<Avatar>
						<AvatarImage src={comment.author.avatar} />
						<AvatarFallback>{comment.author.name[0]}</AvatarFallback>
					</Avatar>
					<div>
						<div className="flex items-center">
							<h4 className="font-semibold">{comment.author.name}</h4>
							<span className="ml-2 text-sm text-gray-500">{comment.date}</span>
						</div>
						<p>{comment.content}</p>
					</div>
				</div>
			))}
		</div>
	);
}
