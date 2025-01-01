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
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function AdminContentManagement() {
	const { t, apiData } = useLanguage();
	const [contents, setContents] = useState(apiData.admin.contents);
	const [newContent, setNewContent] = useState({
		type: "",
		title: "",
		description: "",
		content: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setNewContent((prev) => ({ ...prev, [name]: value }));
	};

	const handleTypeChange = (value: string) => {
		setNewContent((prev) => ({ ...prev, type: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically make an API call to add the new content
		const updatedContents = [
			...contents,
			{ ...newContent, id: Date.now().toString() },
		];
		setContents(updatedContents);
		setNewContent({ type: "", title: "", description: "", content: "" });
		console.log("Added new content:", newContent);
	};

	const handleDeleteContent = (id: string) => {
		// Here you would typically make an API call to delete the content
		const updatedContents = contents.filter(
			(content: any) => content.id !== id
		);
		setContents(updatedContents);
		console.log("Deleted content:", id);
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">
				{t("adminDashboard.contentManagement.title")}
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4 mb-8">
				<div>
					<Label htmlFor="type">
						{t("adminDashboard.contentManagement.type")}
					</Label>
					<Select value={newContent.type} onValueChange={handleTypeChange}>
						<SelectTrigger>
							<SelectValue
								placeholder={t("adminDashboard.contentManagement.selectType")}
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="video">
								{t("adminDashboard.contentManagement.video")}
							</SelectItem>
							<SelectItem value="audio">
								{t("adminDashboard.contentManagement.audio")}
							</SelectItem>
							<SelectItem value="text">
								{t("adminDashboard.contentManagement.text")}
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Label htmlFor="title">
						{t("adminDashboard.contentManagement.title")}
					</Label>
					<Input
						id="title"
						name="title"
						value={newContent.title}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div>
					<Label htmlFor="description">
						{t("adminDashboard.contentManagement.description")}
					</Label>
					<Textarea
						id="description"
						name="description"
						value={newContent.description}
						onChange={handleInputChange}
						rows={3}
						required
					/>
				</div>
				{newContent.type === "text" ? (
					<div>
						<Label htmlFor="content">
							{t("adminDashboard.contentManagement.content")}
						</Label>
						<Textarea
							id="content"
							name="content"
							value={newContent.content}
							onChange={handleInputChange}
							rows={6}
							required
						/>
					</div>
				) : (
					<div>
						<Label htmlFor="content">
							{t("adminDashboard.contentManagement.uploadFile")}
						</Label>
						<Input
							id="content"
							name="content"
							type="file"
							onChange={(e) =>
								handleInputChange(e as React.ChangeEvent<HTMLInputElement>)
							}
							required
						/>
					</div>
				)}
				<Button type="submit">
					{t("adminDashboard.contentManagement.addButton")}
				</Button>
			</form>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>{t("adminDashboard.contentManagement.type")}</TableHead>
						<TableHead>{t("adminDashboard.contentManagement.title")}</TableHead>
						<TableHead>
							{t("adminDashboard.contentManagement.description")}
						</TableHead>
						<TableHead>
							{t("adminDashboard.contentManagement.actions")}
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{contents.map((content: any) => (
						<TableRow key={content.id}>
							<TableCell>
								{t(`adminDashboard.contentManagement.${content.type}`)}
							</TableCell>
							<TableCell>{content.title}</TableCell>
							<TableCell>{content.description}</TableCell>
							<TableCell>
								<Button
									size="sm"
									variant="destructive"
									onClick={() => handleDeleteContent(content.id)}>
									{t("adminDashboard.contentManagement.deleteButton")}
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
