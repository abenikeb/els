"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileVideo, FileAudio, FileText } from "lucide-react";

export default function LawyerContent() {
	const { t, apiData } = useLanguage();
	const [contentType, setContentType] = useState("video");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Uploaded content:", {
			contentType,
			title,
			description,
			content,
		});
		alert(t("lawyerDashboard.content.uploadSuccess"));
		setTitle("");
		setDescription("");
		setContent("");
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>{t("lawyerDashboard.content.upload")}</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Label htmlFor="contentType">
								{t("lawyerDashboard.content.type")}
							</Label>
							<Select value={contentType} onValueChange={setContentType}>
								<SelectTrigger>
									<SelectValue
										placeholder={t("lawyerDashboard.content.selectType")}
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="video">
										{t("lawyerDashboard.content.video")}
									</SelectItem>
									<SelectItem value="audio">
										{t("lawyerDashboard.content.audio")}
									</SelectItem>
									<SelectItem value="text">
										{t("lawyerDashboard.content.text")}
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div>
							<Label htmlFor="title">
								{t("lawyerDashboard.content.title")}
							</Label>
							<Input
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
						</div>
						<div>
							<Label htmlFor="description">
								{t("lawyerDashboard.content.description")}
							</Label>
							<Textarea
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								rows={3}
								required
							/>
						</div>
						{contentType === "text" ? (
							<div>
								<Label htmlFor="content">
									{t("lawyerDashboard.content.content")}
								</Label>
								<Textarea
									id="content"
									value={content}
									onChange={(e) => setContent(e.target.value)}
									rows={6}
									required
								/>
							</div>
						) : (
							<div>
								<Label htmlFor="content">
									{t("lawyerDashboard.content.uploadFile")}
								</Label>
								<Input
									id="content"
									type="file"
									onChange={(e) => setContent(e.target.files?.[0]?.name || "")}
									required
								/>
							</div>
						)}
						<Button type="submit">
							{t("lawyerDashboard.content.uploadButton")}
						</Button>
					</form>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>{t("lawyerDashboard.content.yourContent")}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{/* {apiData.lawyer.content.map((item: any, index: any) => (
							<Card key={index}>
								<CardContent className="p-4 flex items-center space-x-4">
									{item.type === "video" && (
										<FileVideo className="h-8 w-8 text-blue-500" />
									)}
									{item.type === "audio" && (
										<FileAudio className="h-8 w-8 text-green-500" />
									)}
									{item.type === "text" && (
										<FileText className="h-8 w-8 text-yellow-500" />
									)}
									<div>
										<h3 className="font-semibold">{item.title}</h3>
										<p className="text-sm text-gray-500">{item.description}</p>
									</div>
								</CardContent>
							</Card>
						))} */}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
