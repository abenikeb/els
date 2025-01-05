export const staticText = {
	en: {
		nav: {
			// Labels for navigation menu items
			content: "Home",
			packages: "Packages",
			appointments: "Appointments",
			profile: "Profile",
		},

		signup: {
			title: "Create an accounts",
			description: "Enter your details to create your account",
			firstNameLabel: "First Name",
			firstNamePlaceholder: "John",
			lastNameLabel: "Last Name",
			lastNamePlaceholder: "Doe",
			emailLabel: "Email",
			emailPlaceholder: "john@example.com",
			phoneLabel: "Phone Number",
			phonePlaceholder: "0912345678",
			passwordLabel: "Password",
			passwordPlaceholder: "********",
			confirmPasswordLabel: "Confirm Password",
			confirmPasswordPlaceholder: "********",
			submitButton: "Sign Up",
			submitting: "Signing Up...",
			loginPrompt: "Already have an account?",
			loginLink: "Log in",
			roleClient: "Client",
			roleLawyer: "Lawyer",
			roleAdmin: "Admin",
		},

		content: {
			// Section title and labels for content categories
			title: "Legal Resources",
			video: "Video",
			audio: "Audio",
			text: "Text",
			all: "All",
			searchPlaceholder: "Search Here",
			comments: "Comment",
			addComment: "Add Comment",
			postComment: "Post Comment",

			// Titles and descriptions for different content types
			videoTitle: "Video Content",
			videoDescription: "Watch informative legal videos",
			audioTitle: "Audio Content",
			audioDescription: "Listen to legal podcasts and discussions",
			textTitle: "Text Content",
			textDescription: "Read articles and legal guides",

			// Placeholders for media players
			videoPlayer: "Video Player Placeholder",
			audioPlayer: "Audio Player Placeholder",
		},

		packages: {
			// Title for the packages section
			title: "Our Packages",
			purchase: "Purchase",
		},

		profile: {
			title: "Profile",
			tabs: {
				personalInfo: "Personal Info",
				changePassword: "Change Password",
			},
			personalInfo: {
				title: "Personal Information",
				description: "Update your personal details here",
				firstName: "First Name",
				lastName: "Last Name",
				email: "Email",
				phone: "Phone",
				changePicture: "Change Picture",
				saveButton: "Save Changes",
				saveSuccess: "Personal information updated successfully",
			},
			changePassword: {
				title: "Change Password",
				description: "Ensure your account is using a strong password",
				currentPassword: "Current Password",
				newPassword: "New Password",
				confirmPassword: "Confirm New Password",
				updateButton: "Update Password",
				mismatchError: "New passwords do not match",
				updateSuccess: "Password updated successfully",
			},
		},

		navigation: {
			about: "About Us",
			terms: "Terms and Conditions",
			address: "Our Address",
			login: "Login",
			logout: "Logout",
		},

		login: {
			title: "Welcome back",
			description: "Enter your credentials to access your account",
			emailLabel: "Email",
			emailPlaceholder: "john@example.com",
			passwordLabel: "Password",
			passwordPlaceholder: "********",
			rememberMe: "Remember me",
			forgotPassword: "Forgot password?",
			submitButton: "Sign In",
			signingIn: "Signing In...",
			signupPrompt: "Don't have an account?",
			signupLink: "Sign up",
			emailError: "Please enter a valid email address",
			passwordError: "Password is required",
			invalidCredentials: "Invalid email or password",
		},

		adminDashboard: {
			title: "Admin Dashboard",
			logout: "Logout",
			profile: {
				title: "Profile",
				name: "Name",
				email: "Email",
				phone: "Phone",
				role: "Role",
				bio: "Bio",
				updateButton: "Update Profile",
				updateSuccess: "Profile updated successfully",
			},
			appointments: {
				title: "Appointments",
				clientName: "Client Name",
				lawyerName: "Lawyer Name",
				date: "Date",
				time: "Time",
				status: "Status",
				actions: "Actions",
				approve: "Approve",
				reject: "Reject",
				statuses: {
					pending: "Pending",
					approved: "Approved",
					rejected: "Rejected",
				},
			},
			lawyerManagement: {
				title: "Lawyer Management",
				addLawyer: "Add Lawyer",
				addLawyerTitle: "Add New Lawyer",
				name: "Name",
				email: "Email",
				specialization: "Specialization",
				actions: "Actions",
				addButton: "Add Lawyer",
				deleteButton: "Delete",
			},
			userManagement: {
				title: "User Management",
				name: "Name",
				email: "Email",
				role: "Role",
				actions: "Actions",
				deleteButton: "Delete",
			},
			contentManagement: {
				title: "Content Management",
				type: "Type",
				selectType: "Select content type",
				video: "Video",
				audio: "Audio",
				text: "Text",
				description: "Description",
				content: "Content",
				uploadFile: "Upload File",
				addButton: "Add Content",
				deleteButton: "Delete",
				actions: "Actions",
			},
			packageManagement: {
				title: "Package Management",
				name: "Package Name",
				description: "Description",
				price: "Price",
				actions: "Actions",
				addButton: "Add Package",
				deleteButton: "Delete",
			},
		},

		lawyerDashboard: {
			title: "Lawyer Dashboard",
			logout: "Logout",
			navigation: "Navigation",
			role: "Lawyer",
			profile: {
				title: "Profile",
				name: "Name",
				email: "Email",
				phone: "Phone",
				specialization: "Specialization",
				bio: "Bio",
				updateButton: "Update Profile",
				updateSuccess: "Profile updated successfully",
			},
			appointments: {
				title: "Appointments",
				clientName: "Client Name",
				date: "Date",
				time: "Time",
				status: "Status",
				actions: "Actions",
				approve: "Approve",
				reject: "Reject",
				statuses: {
					pending: "Pending",
					approved: "Approved",
					rejected: "Rejected",
				},
			},
			content: {
				title: "Content",
				type: "Content Type",
				selectType: "Select content type",
				video: "Video",
				audio: "Audio",
				text: "Text",
				description: "Description",
				content: "Content",
				uploadFile: "Upload File",
				uploadButton: "Upload Content",
				uploadSuccess: "Content uploaded successfully",
				upload: "Upload Content",
			},
			packages: {
				title: "Packages",
				addNew: "Add New",
				existingPackages: "Existing Packages",
				name: "Package Name",
				description: "Description",
				price: "Price",
				actions: "Actions",
				addButton: "Add Package",
				deleteButton: "Delete",
				addSuccess: "Package added successfully",
				deleteSuccess: "Package deleted successfully",
			},
		},

		appointments: {
			// Title for the appointments section
			title: "Schedule an Appointment",

			tabs: {
				calendar: "Calendar",
				lawyers: "Our Lawyers",
			},
			dateSelection: {
				title: "Select a Date",
				description: "Choose your preferred appointment date",
			},
			details: {
				title: "Appointment Details",
				description: "Select a time and lawyer for your appointment",
				timeLabel: "Time",
				lawyerLabel: "Lawyer",
			},
			button: "Book Appointment",
			selectLawyer: "Select this Lawyer",
			summary: {
				title: "Appointment Summary",
			},
			bookingSuccess: "Appointment booked successfully!",
			bookingError: "Please select a date, time, and lawyer before booking.",
		},
	},
	am: {
		signup: {
			title: "መለያ ይፍጠሩ",
			description: "መለያ ለመፍጠር ዝርዝሮችዎን ያስገቡ",
			firstNameLabel: "ስም",
			firstNamePlaceholder: "ጆን",
			lastNameLabel: "የአባት ስም",
			lastNamePlaceholder: "ዶ",
			emailLabel: "ኢሜይል",
			emailPlaceholder: "john@example.com",
			phoneLabel: "ስልክ ቁጥር",
			phonePlaceholder: "0912345678",
			passwordLabel: "የይለፍ ቃል",
			passwordPlaceholder: "********",
			confirmPasswordLabel: "የይለፍ ቃል ያረጋግጡ",
			confirmPasswordPlaceholder: "********",
			submitButton: "ይመዝገቡ",
			submitting: "በመመዝገብ ላይ...",
			loginPrompt: "አስቀድሞ መለያ አለዎት?",
			loginLink: "ይግቡ",
		},
		profile: {
			title: "Ibsa",
			tabs: {
				personalInfo: "Odeeffannoo Dhuunfaa",
				changePassword: "Jecha Icciitii Jijjiiruu",
			},
			personalInfo: {
				title: "Odeeffannoo Dhuunfaa",
				description: "Odeeffannoo dhuunfaa keessan asitti haaromsa",
				firstName: "Maqaa",
				lastName: "Maqaa Abbaa",
				email: "Imeelii",
				phone: "Bilbila",
				changePicture: "Suuraa Jijjiiruu",
				saveButton: "Jijjiirama Olkaa'uu",
				saveSuccess: "Odeeffannoon dhuunfaa milkaa'inaan haaromfameera",
			},
			changePassword: {
				title: "Jecha Icciitii Jijjiiruu",
				description:
					"Akkaawuntiin keessan jecha icciitii cimaa fayyadamaa jiraachuu mirkaneeffadhaa",
				currentPassword: "Jecha Icciitii Ammaa",
				newPassword: "Jecha Icciitii Haaraa",
				confirmPassword: "Jecha Icciitii Haaraa Mirkaneessuu",
				updateButton: "Jecha Icciitii Haaromsi",
				mismatchError: "Jecha icciitii haaraan wal hin simu",
				updateSuccess: "Jecha icciitii milkaa'inaan haaromfameera",
			},
		},

		content: {
			// Section title and labels for content categories in Amharic
			title: "የህግ ምንጮች",
			video: "ቪዲዮ",
			audio: "ኦዲዮ",
			text: "ጽሑፍ",

			// Titles and descriptions for different content types in Amharic
			videoTitle: "የቪዲዮ ይዘት",
			videoDescription: "አስተማሪ የህግ ቪዲዮዎችን ይመልከቱ",
			audioTitle: "የኦዲዮ ይዘት",
			audioDescription: "የህግ ፖድካስቶችን እና ውይይቶችን ያዳምጡ",
			textTitle: "የጽሑፍ ይዘት",
			textDescription: "መጣጥፎችን እና የህግ መመሪያዎችን ያንብቡ",

			// Placeholders for media players in Amharic
			videoPlayer: "የቪዲዮ ማጫወቻ ቦታ ያዥ",
			audioPlayer: "የኦዲዮ ማጫወቻ ቦታ ያዥ",
		},
		packages: {
			// Title for the packages section in Amharic
			title: "የህግ ጥበቃ ጥቅሎች",
		},
		appointments: {
			// Title for the appointments section in Amharic
			title: "ቀጠሮ ይያዙ",

			dateSelection: {
				// Instructions for selecting a date in Amharic
				title: "ቀን ይምረጡ",
				description: "የሚፈልጉትን የቀጠሮ ቀን ይምረጡ",
			},

			button: "ቀጠሮ ይያዙ", // Button label for scheduling in Amharic

			tabs: {
				calendar: "የቀን መቁጠሪያ",
				lawyers: "ጠበቆቻችን",
			},

			details: {
				title: "የቀጠሮ ዝርዝሮች",
				description: "ለቀጠሮዎ ሰዓት እና ጠበቃ ይምረጡ",
				timeLabel: "ሰዓት",
				lawyerLabel: "ጠበቃ",
			},

			selectLawyer: "ይህን ጠበቃ ይምረጡ",
			summary: {
				title: "የቀጠሮ ማጠቃለያ",
			},
			bookingSuccess: "ቀጠሮ በተሳካ ሁኔታ ተይዟል!",
			bookingError: "እባክዎ ቀጠሮ ከመያዝዎ በፊት ቀን፣ ሰዓት እና ጠበቃ ይምረጡ።",
		},

		login: {
			title: "እንኳን በደህና ተመለሱ",
			description: "ወደ መለያዎ ለመግባት መረጃዎችዎን ያስገቡ",
			emailLabel: "ኢሜይል",
			emailPlaceholder: "john@example.com",
			passwordLabel: "የይለፍ ቃል",
			passwordPlaceholder: "********",
			rememberMe: "አስታውሰኝ",
			forgotPassword: "የይለፍ ቃል ረሱ?",
			submitButton: "ግባ",
			signingIn: "በመግባት ላይ...",
			signupPrompt: "መለያ የለዎትም?",
			signupLink: "ይመዝገቡ",
			emailError: "እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ",
			passwordError: "የይለፍ ቃል ያስፈልጋል",
			invalidCredentials: "ልክ ያልሆነ ኢሜይል ወይም የይለፍ ቃል",
		},
		adminDashboard: {
			title: "የአስተዳዳሪ ዳሽቦርድ",
			logout: "ውጣ",
			profile: {
				title: "መገለጫ",
				name: "ስም",
				email: "ኢሜይል",
				phone: "ስልክ",
				role: "ሚና",
				bio: "ባዮግራፊ",
				updateButton: "መገለጫን አዘምን",
				updateSuccess: "መገለጫ በተሳካ ሁኔታ ተዘምኗል",
			},
			appointments: {
				title: "ቀጠሮዎች",
				clientName: "የደንበኛ ስም",
				lawyerName: "የጠበቃ ስም",
				date: "ቀን",
				time: "ሰዓት",
				status: "ሁኔታ",
				actions: "ድርጊቶች",
				approve: "ፍቀድ",
				reject: "ውድቅ አድርግ",
				statuses: {
					pending: "በመጠባበቅ ላይ",
					approved: "ጸድቋል",
					rejected: "ተቀባይነት አላገኘም",
				},
			},
			lawyerManagement: {
				title: "የጠበቃ አስተዳደር",
				addLawyer: "ጠበቃ ጨምር",
				addLawyerTitle: "አዲስ ጠበቃ ጨምር",
				name: "ስም",
				email: "ኢሜይል",
				specialization: "ስፔሻላይዜሽን",
				actions: "ድርጊቶች",
				addButton: "ጠበቃ ጨምር",
				deleteButton: "ሰርዝ",
			},
			userManagement: {
				title: "የተጠቃሚ አስተዳደር",
				name: "ስም",
				email: "ኢሜይል",
				role: "ሚና",
				actions: "ድርጊቶች",
				deleteButton: "ሰርዝ",
			},
			contentManagement: {
				title: "የይዘት አስተዳደር",
				type: "አይነት",
				selectType: "የይዘት አይነት ይምረጡ",
				video: "ቪዲዮ",
				audio: "ኦዲዮ",
				text: "ጽሑፍ",
				description: "መግለጫ",
				content: "ይዘት",
				uploadFile: "ፋይል ስቀል",
				addButton: "ይዘት ጨምር",
				deleteButton: "ሰርዝ",
				actions: "ድርጊቶች",
			},
			packageManagement: {
				title: "የጥቅል አስተዳደር",
				name: "የጥቅል ስም",
				description: "መግለጫ",
				price: "ዋጋ",
				actions: "ድርጊቶች",
				addButton: "ጥቅል ጨምር",
				deleteButton: "ሰርዝ",
			},
		},
		lawyerDashboard: {
			title: "የጠበቃ ዳሽቦርድ",
			logout: "ውጣ",
			navigation: "ዳሰሳ",
			profile: {
				title: "መገለጫ",
				name: "ስም",
				email: "ኢሜይል",
				phone: "ስልክ",
				specialization: "ስፔሻላይዜሽን",
				bio: "ባዮግራፊ",
				updateButton: "መገለጫን አዘምን",
				updateSuccess: "መገለጫ በተሳካ ሁኔታ ተዘምኗል",
			},
			appointments: {
				title: "ቀጠሮዎች",
				clientName: "የደንበኛ ስም",
				date: "ቀን",
				time: "ሰዓት",
				status: "ሁኔታ",
				actions: "ድርጊቶች",
				approve: "ፍቀድ",
				reject: "ውድቅ አድርግ",
				statuses: {
					pending: "በመጠባበቅ ላይ",
					approved: "ጸድቋል",
					rejected: "ተቀባይነት አላገኘም",
				},
			},
			content: {
				title: "ይዘት",
				type: "የይዘት አይነት",
				selectType: "የይዘት አይነት ይምረጡ",
				video: "ቪዲዮ",
				audio: "ኦዲዮ",
				text: "ጽሑፍ",
				description: "መግለጫ",
				content: "ይዘት",
				uploadFile: "ፋይል ስቀል",
				uploadButton: "ይዘት ስቀል",
				uploadSuccess: "ይዘት በተሳካ ሁኔታ ተሰቅሏል",
			},
			packages: {
				title: "ጥቅሎች",
				name: "የጥቅል ስም",
				description: "መግለጫ",
				price: "ዋጋ",
				actions: "ድርጊቶች",
				addButton: "ጥቅል ጨምር",
				deleteButton: "ሰርዝ",
				addSuccess: "ጥቅል በተሳካ ሁኔታ ተጨምሯል",
				deleteSuccess: "ጥቅል በተሳካ ሁኔታ ተሰርዟል",
			},
		},
		navigation: {
			about: "ስለ እኛ",
			terms: "የአገልግሎት ውሎች",
			address: "አድራሻችን",
			login: "ግባ",
			logout: "ውጣ",
		},
	},
	om: {
		navigation: {
			content: "Qabiyyee",
			packages: "Paakeejoota",
			appointments: "Beellama'a",
			profile: "Profaayilii",
		},

		signup: {
			title: "SIgnup",
		},
		content: {
			title: "Madda Seeraa",
			video: "Viidiyoo",
			audio: "Sagalee",
			text: "Barreeffama",
			videoTitle: "Qabiyyee Viidiyoo",
			videoDescription: "Viidiyoowwan seeraa barsiisoo ilaali",
			audioTitle: "Qabiyyee Sagalee",
			audioDescription: "Sagantaa fi marii seeraa dhaggeeffadhu",
			textTitle: "Qabiyyee Barreeffamaa",
			textDescription: "Barreeffamoota fi qajeelfamoota seeraa dubbisi",
			videoPlayer: "Bakka Qabduu Taphachisaa Viidiyoo",
			audioPlayer: "Bakka Qabduu Taphachisaa Sagalee",
		},
		packages: {
			title: "Paakeejota Eegumsa Seeraa",
		},
		appointments: {
			title: "Beellama'a Qabadhu",
			tabs: {
				calendar: "Kaleendarii",
				lawyers: "Abukaatota Keenya",
			},
			dateSelection: {
				title: "Guyyaa Filadhu",
				description: "Guyyaa beellama'a barbaaddu filadhu",
			},
			details: {
				title: "Ibsa Beellama'a",
				description: "Yeroo fi abukaatoo beellama'a keetiif filadhu",
				timeLabel: "Yeroo",
				lawyerLabel: "Abukaatoo",
			},
			button: "Beellama'a Qabadhu",
			selectLawyer: "Abukaatoo Kana Filadhu",
			summary: {
				title: "Cuunfaa Beellama'aa",
			},
			bookingSuccess: "Beellama'aan milkaa'inaan qabameera!",
			bookingError:
				"Maaloo beellama'aa dura guyyaa, yeroo, fi abukaatoo filadhu.",
		},

		profile: {
			// Title for the profile section in Amharic
			title: "የእርስዎ መገለጫ",

			personalInfo: {
				// Labels and instructions for personal information in Amharic
				title: "የግል መረጃ",
				description: "የመለያዎን ዝርዝሮች ያዘምኑ",
				firstName: "ስም",
				lastName: "የአባት ስም",
				email: "ኢሜይል",
				phone: "ስልክ ቁጥር",
				saveButton: "ለውጦችን አስቀምጥ", // Button to save updates in Amharic
			},
			changePassword: {
				// Labels and instructions for changing password in Amharic
				title: "የይለፍ ቃል ይቀይሩ",
				description: "የመለያዎን የይለፍ ቃል ያዘምኑ",
				currentPassword: "አሁን ያለው የይለፍ ቃል",
				newPassword: "አዲስ የይለፍ ቃል",
				confirmPassword: "አዲስ የይለፍ ቃልን ያረጋግጡ",
				updateButton: "የይለፍ ቃል አዘምን", // Button to update password in Amharic
			},
		},
		login: {
			// Title and labels for the login page in Amharic
			title: "ግባ",
			description: "ወደ አካውንትዎ ይግቡ",
			emailLabel: "ኢሜይል",
			passwordLabel: "የይለፍ ቃል",
			submitButton: "ግባ", // Button to submit login form in Amharic
			signupPrompt: "አካውንት የለዎትም?", // Prompt for signup in Amharic
			signupLink: "ተመዝገብ", // Link to signup page in Amharic
		},
		adminDashboard: {
			title: "Daashboordii Bulchiinsaa",
			logout: "Ba'i",
			profile: {
				title: "Profaayilii",
				name: "Maqaa",
				email: "Imeelii",
				phone: "Bilbila",
				role: "Gahee",
				bio: "Seenaa Gabaabaa",
				updateButton: "Profaayilii Haaromsi",
				updateSuccess: "Profaayiliin milkaa'inaan haaromfame",
			},
			appointments: {
				title: "Beellamni",
				clientName: "Maqaa Maamilaa",
				lawyerName: "Maqaa Abukaatoo",
				date: "Guyyaa",
				time: "Yeroo",
				status: "Haala",
				actions: "Gocha",
				approve: "Mirkaneessi",
				reject: "Kufaasi",
				statuses: {
					pending: "Eegamaa Jira",
					approved: "Mirkanaa'eera",
					rejected: "Kufaatameera",
				},
			},
			lawyerManagement: {
				title: "Bulchiinsa Abukaatota",
				addLawyer: "Abukaatoo Dabalaa",
				addLawyerTitle: "Abukaatoo Haaraa Dabalaa",
				name: "Maqaa",
				email: "Imeelii",
				specialization: "Gosa Ogummaa",
				actions: "Gocha",
				addButton: "Abukaatoo Dabalaa",
				deleteButton: "Haquu",
			},
			userManagement: {
				title: "Bulchiinsa Fayyadamtoota",
				name: "Maqaa",
				email: "Imeelii",
				role: "Gahee",
				actions: "Gocha",
				deleteButton: "Haquu",
			},
		},
		lawyerDashboard: {
			title: "Lawyer Dashboard",
			logout: "Logout",
			navigation: "Navigation",
			profile: {
				title: "Profile",
				name: "Name",
				email: "Email",
				phone: "Phone",
				specialization: "Specialization",
				bio: "Bio",
				updateButton: "Update Profile",
				updateSuccess: "Profile updated successfully",
			},
			appointments: {
				title: "Appointments",
				clientName: "Client Name",
				date: "Date",
				time: "Time",
				status: "Status",
				actions: "Actions",
				approve: "Approve",
				reject: "Reject",
				statuses: {
					pending: "Pending",
					approved: "Approved",
					rejected: "Rejected",
				},
			},
			content: {
				title: "Content",
				type: "Content Type",
				selectType: "Select content type",
				video: "Video",
				audio: "Audio",
				text: "Text",
				description: "Description",
				content: "Content",
				uploadFile: "Upload File",
				uploadButton: "Upload Content",
				uploadSuccess: "Content uploaded successfully",
			},
			packages: {
				title: "Packages",
				name: "Package Name",
				description: "Description",
				price: "Price",
				actions: "Actions",
				addButton: "Add Package",
				deleteButton: "Delete",
				addSuccess: "Package added successfully",
				deleteSuccess: "Package deleted successfully",
			},
		},
	},
};

export const mockApiData = {
	content: {
		textContent: [
			{
				en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				am: "ሎረም ኢፕሰም ዶሎር ሲት አሜት፣ ኮንሴክተቱር አዲፒሲንግ ኤሊት። ሴድ ዶ ኢዩስሞድ ቴምፖር ኢንሲዲዱንት ኡት ላቦሬ ኤት ዶሎሬ ማግና አሊኳ።",
				om: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
		],
		videoUrl: [
			{
				en: "https://example.com/en/video",
				am: "https://example.com/am/video",
				om: "https://example.com/om/video",
			},
			{
				en: "https://example.com/en/video",
				am: "https://example.com/am/video",
				om: "https://example.com/om/video",
			},
		],
		audioUrl: [
			{
				en: "https://example.com/en/audio",
				am: "https://example.com/am/audio",
				om: "https://example.com/om/audio",
			},
		],
	},

	rows: [
		{
			id: "cm49lh2ua0000f2u08o6k6pso",
			name: "የንግድ ድርጅት (ስታርት አፕ) ማቋቋም",
			price: "200",
			currency: "ETB",
			image: "uploads/a4192044-d6c4-4220-b471-fe5479994708.jpg",
			description:
				"ድርጅታችን ኢትዮ ሌጋል ሺልድ አዳዲስ የንግድ ድርጅቶች በሚቋቋሙበት ጊዜ አስፈላጊና ወሳኝ የሆኑ የተለያዩ አይነት አገልግሎቶችን የሚሰጥ ሲሆን እነዚህ አገልግሎቶችም የሚቋቋሙትን ድርጅቶች የገንዘብ አቅምና ሰፊ ተደራሽነትን አላማ አድርገው የቀረቡ ናቸው፡፡ ድርጅቶች በሚመሰረቱበት ጊዜ የተለያዩ አይነት ውስብስብ ችግሮች እንደሚያጋጥሟቸው እሙን ነው፤ እነዚህ ችግሮች እንደሚመሰረቱት ድርጅቶች ስፋትና እንደስራቸው አይነት የሚለያዩ ቢሆኑም አብዛኞቹ ድርጅቶች በምስረታ ወቅት የሚያጋጥሟቸው ከህግ ጋር የተያያዙ ፈተናዎች ላይ ግን ተመሳሳይነት ይስተዋላል፡፡ ከንግድ ድርጅት አመሰራረት ጋር ተያይዘው የሚነሱት ህግ ነክ ፈተናዎች በዋናነት የድርጅት አይነትና ቅርፅ፣ የንግድ ምዝገባና የንግድ ፈቃድ አወጣጥ፣ የግብር አይነቶችና የታክስ ተገዢነቶች እንዲሁም የሰራተኛ ቅጥርና የአሰሪና ሰራተኛ ግንኙነት ዙሪያ የሚያጠነጥኑ ሲሆን እነዚህን ፈተናዎች በብቃት አልፎ አንድን ድርጅት ከሁሉም አይነት ተጠያቂነቶችና የህግ ጥሰጦች ነፃ በሆነ መልኩ ለማቋቋም በቂ እውቀትና የካበተ ልምድ ያለው የህግ ባለሞያ ከጎን ማድረግ እጅግ አስፈላጊና ወሳኝ የሆነ ጉዳይ ነው፡፡",
			features: null,
			category: null,
			createdAt: "2024-12-01T07:56:43.810Z",
			updatedAt: "2024-12-16T06:56:45.172Z",
			deletedAt: null,
			plans: [
				{
					id: "cm49lh2ub0002f2u0qj164cm8",
					name: "የፕሪሚየም ጥቅል",
					price: "2",
					currency: "ETB",
					description:
						"ይህ የፕሪሚየም ጥቅል ንግዳቸውን ለማቋቋም እና ለማስኬድ በሁሉም ዘርፍ ሰፊ የህግ ድጋፍ ለሚፈልጉ ደንበኞች በመሰረታዊ እና መደበኛ ጥቅል ላይ የሚገኙትን አገልግሎቶች ጨምሮ ሁሉን አቀፍ አገልግሎቶችን ይሰጣል።",
					createdAt: "2024-12-04T07:56:43.810Z",
					updatedAt: "2025-01-02T05:37:24.282Z",
					packageId: "cm49lh2ua0000f2u08o6k6pso",
				},
				{
					id: "cm49lh2ub0001f2u0mmzpb98a",
					name: "መደበኛ ጥቅል",
					price: "2",
					currency: "ETB",
					description:
						"ይህ የመደበኛ ጥቅል በመሠረታዊ ጥቅል ላይ ያሉትን አገልግሎቶች በመጨመር የንግድ ምዝገባን እና ምስረታውን የሚያመቻቹ ተጨማሪ አገልግሎቶችን ያካተተ ነዉ። ",
					createdAt: "2024-12-04T07:56:43.810Z",
					updatedAt: "2025-01-02T05:37:57.568Z",
					packageId: "cm49lh2ua0000f2u08o6k6pso",
				},
				{
					id: "cm49lh2ub0003f2u0tvv9c4x1",
					name: "መሰረታዊ ጥቅል",
					price: "2",
					currency: "ETB",
					description:
						"ይህ መሠረታዊ ጥቅል በንግድ ድርጅት ምስረታ የመጀመሪያ ደረጃዎች ላይ ላሉ ሥራ ፈጣሪዎች እና ነጋዴዎች የተነደፈ ነው። ይህ ጥቅል ደንበኞች አዲስ የንግድ ድርጅት ሲያቋቁሙ ለመርዳት አስፈላጊ የህግ ማማከር አገልግሎቶችን ይሰጣል።",
					createdAt: "2024-12-04T07:56:43.810Z",
					updatedAt: "2025-01-02T05:37:57.568Z",
					packageId: "cm49lh2ua0000f2u08o6k6pso",
				},
			],
		},
		{
			id: "cm3u2ye2g0000f2a77ozsge06",
			name: "ለቤት ገዥዎች የሕግ ጥበቃ",
			price: "200",
			currency: "ETB",
			image: "uploads/2288dc8d-69a2-432e-a057-06437108fc1c.png",
			description:
				"የሪል  እስቴት ግብይቶን  በኢትዮ ሌጋል ሺልድ ይጠብቁ!  በሃገራችን የሪል እስቴት ገበያ  ገዢዎች የሚጭበረበሩበት፣ ግልጽ ባልሆነ ባለቤትነት እና የውል ጥስቶችን  ጨምሮ ከፍተኛ ውዝግብ የሞላበት  ነዉ።ኢትዮ ሌጋል ሺልድ እያንዳንዱ የገዢ እርመጃ ደህንነቱ የተጠበቀ እና አስተማማኝ የግብይት  ሂደትን ለመፍጠር እየሰራ ይገኛል። ራዕያችን  ከመጨበረበር የፀዳ ደህንነቱ የተጠበቀ የሪል ስቴት ገበያን  ለመፍጠር ያለመ ሲሆን ለዚህም የሪል እስቴት ገዥ ጥበቃ ጥቅል የህግ  አገልግሎት ይዘንሎት መተናል።  የዚህም አገልግሎት ተጠቃሚ በመሆን   በማንኛውም የቤት  ግዢ  የግብይት ደረጃ ፍላጎቶችዎን ለመጠበቅ  በዘርፉ ልምድ ያካበቱ ጠበቆቻችን የታገዘ በእውቀት ላይ የተመሰረተ ውሳኔን ያሰተላለፉ።  ገንዘቦን የጊዜዎን አና ንብረቶን ያስጠብቁ። ኢትዮ ሌጋል ቪልድ በህጋዊ የህግ ፍላጎቶች ውስጥ የርሶ ጋሻ!",
			features: null,
			category: null,
			createdAt: "2024-12-02T11:21:46.169Z",
			updatedAt: "2024-12-16T06:57:34.048Z",
			deletedAt: null,
			plans: [
				{
					id: "cm3u2ye2h0001f2a7qyl3sn8k",
					name: "Standard",
					price: "2",
					currency: "ETB",
					description: null,
					createdAt: "2024-11-23T11:21:46.169Z",
					updatedAt: "2025-01-02T05:37:57.568Z",
					packageId: "cm3u2ye2g0000f2a77ozsge06",
				},
			],
		},
		{
			id: "cm4p99aur001kf2f62lyhd2wp",
			name: "ለማህበራዊ ሚዲያ ተጽዕኖ ፈጣሪዎች ልዩ የህግ አገልግሎት ጥቅል",
			price: "200",
			currency: "ETB",
			image: "uploads/81ce1d8a-351f-427e-8e8e-3a4f9add3df0.jpg",
			description:
				"ማህበራዊ ሚዲያ ባሁኑ ወቅት በአለም አቀፍ ደረጃ ከፍተኛ ተቀባይነት ያገኘ የበርካታ ሚሊየን ብሮች ኢንደስትሪ መሆኑ ይታወቃል ፡፡ ስለሆነም ያላቸው ሚና ከፍተኛ እንደመሆኑ፣ መብትና ግዴታቸውን አውቀው እንዲንቀሳቀሱ ማስቻል፣ ሰላማዊ እና ፍትህ የሰፈነበት የማህበራዊ ሚዲያ ከባቢን ከመፍጠሩ ባሻገር፣ እንደግለሰብ የማስታወቂያ ህጉን እንዲያከብሩ፣ Artificial intelligenceን በአግባቡ እንዲጠቀሙ ለማስቻል፣ ከጥላቻ ንግግር ጋር ተያይዞየሚመጡ ሀላፊነቶችን እንዲያውቁ፣ ከስም ማጥፋት እና የተሳሳተ መረጃ ከመስጠት እንዲቆጠቡ፣ የብራንድ አምባሳደርነት ሚና ሲወስዱ ደግሞ እነሱን ወክሎ ውል ማርቀቅ፣ መደራደር፣ ቀድሞ የተዘጋጁ ውሎችን መገምገምን በህግ ባለሙያ እንዲያከናውኑ እና የፍትሀ ብሄር እና የወንጀል ተጠያቂነቶችን ሊያመጡ የሚችሉ ድርጊቶችን በሚፈጽሙ ጊዜ በእውቀት እና በመረጃ የተደገፈ ውሳኔ እንዲወስኑ በማስቻል የሚደርስባቸውን እና የሚያደርሱትን የመብት ጥሰቶች ለመከላከል  ኢትዮ ሌጋል ሺልድ ከኢትዮ ቴሌኮም ጋር በመተባበር በቴሌብር መተግበሪያ ላይ ለማህበራዊ ሚዲያ ተጽዕኖ ፈጣሪዎች ያቀረበውን ልዩ የህግ አገልግሎት ጥቅል ደንበኞች ስልካቸውን በመጠቀም ብቻ በቀላሉ ማግኘት ይችላሉ።",
			features: null,
			category: null,
			createdAt: "2024-12-03T06:59:04.371Z",
			updatedAt: "2024-12-16T07:00:50.698Z",
			deletedAt: null,
			plans: [
				{
					id: "cm4p99aus001lf2f69msbl38f",
					name: "መደበኛ አገልግሎት",
					price: "3",
					currency: "ETB",
					description: null,
					createdAt: "2024-12-15T06:59:04.371Z",
					updatedAt: "2025-01-02T05:37:24.282Z",
					packageId: "cm4p99aur001kf2f62lyhd2wp",
				},
				{
					id: "cm4p99aus001mf2f6mcrr1585",
					name: "ፕሪሚዬም አገልግሎት",
					price: "2",
					currency: "ETB",
					description: null,
					createdAt: "2024-12-15T06:59:04.371Z",
					updatedAt: "2025-01-02T05:37:57.568Z",
					packageId: "cm4p99aur001kf2f62lyhd2wp",
				},
			],
		},
		{
			id: "cm4i2ly5t001af2f6bg40un5a",
			name: "የኔትዎርክ ትራንስፖርት (ሜትር ታክሲ) አሽከርካሪዎች የቅድመ ክፍያ የህግ ጥበቃ",
			price: "200",
			currency: "ETB",
			image: "uploads/44c1156e-8e95-4cd5-a5ce-b0637244f519.jpg",
			description:
				"የኔትዎርክ ትራንስፖርት (ሜትር ታክሲ) አሽከርካሪዎችን ጨምሮ አሽከርካሪዎች በየሄዱበት ቦታ ለደህንነታቸዉ ሳይሳሱ የተገልጋዮችን ድህንነት እና ምቾት ጠብቀዉ ከፈለጉበት ያደርሳሉ በመሆኑም ለሀገር የሚያበረክቱት አስተዋፅኦ በቃላት የሚገለፅ አይደለም። ይሁንና አሽከርካሪ የተለያዩ ሰው ሰራሽ ችግሮችም ግንባር ቀደም ገፈት ቀማሽ ነዉ። ከነዚህም በአሰሪዎቻቸው ያለአግባብ የቅጥር ውላቸው ሲቋረጥ እና በትራፊክ ተቆጣጣሪዎች እንግልት ሲደርስባቸው እና በህግ አገልግሎትና በፍትህ ዘርፍ ችግር ሲገጥማቸዉ ይስተዋላል። ኢትዮ ሌጋል ሺልድ አሽከርካሪዎች ሊደርስባቸው ስለሚችሉት ከህግ አገልግሎትና ከፍትህ ጋር የተያያዙ እንግልቶች ለአፍታም ሳያስቡ ሙሉ ትኩረታቸውን በስራቸውና በሚያሽከረክሩት ተሸከርካሪ ላይ በማድረግ በህይወት፣ በአካልና በንብረት ላይ ሊደርስ ከሚችል ጉዳት እንዲጠበቁ  ለኔትዎርክ ትራንስፖርት አሽከርካሪዎች ያቀረበዉን ልዩ የቅድመ ክፍያ ጥቅል  ይጠቀሙ።",
			features: null,
			category: null,
			createdAt: "2024-12-04T06:18:33.905Z",
			updatedAt: "2024-12-16T07:00:50.698Z",
			deletedAt: null,
			plans: [
				{
					id: "cm4i2ly5t001bf2f6jgrprxkk",
					name: "መደበኛ ወርሃዊ",
					price: "500",
					currency: "ETB",
					description: null,
					createdAt: "2024-12-10T06:18:33.905Z",
					updatedAt: "2025-01-02T05:37:57.568Z",
					packageId: "cm4i2ly5t001af2f6bg40un5a",
				},
			],
		},
		{
			id: "cm3u2gol20000f26s9nqhyfmk",
			name: "ውርስን ማቀድ",
			price: "3000",
			currency: "ETB",
			image: "uploads/2288dc8d-69a2-432e-a057-06437108fc1c.png",
			description:
				"ከእርስዎ ህልፈት በኋላ ቤተሠብዎ ሰላም እንዲሆን ዛሬን ያቅዱ! የሰው ልጅ በህይወት ዘመኑ ያፈራው እና ያከማቸውን ሀብቱን ድንገት በላሰበው ጊዜና ሁኔታ ጥሎት ያልፋል፤ በንብረት ላይ የሚነሳ የይገባኛል ጥያቄም በቤተሰብ እና ወዳጅ መካከል ከገጠመ ሃዘን በተጨማሪ፣ የጸብ እና የጥል መንስዔ ሲሆን ይስተዋላል፡፡ ለዚህም ደግሞ አስቀድሞ በህጋዊ መንገድ ውርስን ማቀድ እና በሁኔታ ላይ የተመሰረተ ውርስ እቅድን ማዘጋጀት ውስብስብ በሆነው የህይወት ጎዳና ውስጥ ሊፈጠሩ የሚችሉ አለመግባባቶችን ለመከላከል ፣ ግለሰቦችም ካለፉ በኋላ ንብረታቸው በፈለጉት ቦታ መቀመጡን ለማረጋጥ እና ፍርድ ቤት ወጪ እንዲሁም እንግልት ለማስቀረት ፍቱን መፍተሄ ነወ፡፡ በመሆኑም ኢትዮ ሌጋል ሺልድ በቴሌ ብር ሱፐርአፕ (Tele Birr SuperApp) አማካኝነት በአንድ ጊዜ አነስተኛ ክፍያ የሚሰጥ የውርስ እቅድ እና ሃብትን በውርስ የማስተላለፍ አገልግሎት የዞ መጥተዋል፡፡",
			features: null,
			category: null,
			createdAt: "2024-12-05T11:07:59.990Z",
			updatedAt: "2024-12-16T07:02:12.247Z",
			deletedAt: null,
			plans: [],
		},
		{
			id: "cm4p954lz001hf2f66az2pnwa",
			name: "የውል አገልግሎት",
			price: "200",
			currency: "ETB",
			image: "uploads/e9b56b7e-6f05-4cef-9a5b-285a93e9bbe5.jpg",
			description:
				"ማንኛውም መብት ወይም ግዴታን  በውል ስያስተላልፉ ወይም ሲቀበሉ ወይም አንድን ተግባር ለመፈጸም ይሁን ላላመፈጸም ውል ስፈጽሙ የውሉን አጠቃላይ ባህሪ በመረዳት የሚያመጣውንም ውጤት አውቀው የራስንም ሆነ የሌላው መብት መጠበቅ እና ወደፊት ሊነሱ ከሚችሉ አለመግባባቶች ለመጠበቅ ውሎችን በሚመለከተው ባለሙያ ማዘጋጀት ወይም ውሎችን ከማድረግ በፊት ውሎቹን በባለሙያ ማስገምገም፤ ውሎች ከተደረጉ በኃላም አፈጻጸማቸውን በተመለከተ የሚነሱ ሕጋዊ ጥያቄዎችን አንስቶ ተገቢ የባለሙያ ምላሽ ማግኘት ከምንም ነገር በላይ ቅድሚያ ሚሰጠው ጉዳይ ነው። ስለሆነም ኢትዩ ሌጋል ሺልድ ደንበኞች ለሚያደርጓቸው ማናቸውም አይነት ውሎች ማዘጋጀት፤ የተዘጋጁ ውሎችን መገምገም እና የቅድም ውል ድርድር የማድረግ አገልግሎት በመስጠት ላይ ሲሆን፣ እርሶም ይህንን የዉል የህግ ጥበቃ አገልግሎት በመጠቀም መብቶንና ጥቅመውን ያስከብሩ።",
			features: null,
			category: null,
			createdAt: "2024-12-06T06:55:49.654Z",
			updatedAt: "2024-12-16T07:00:50.698Z",
			deletedAt: null,
			plans: [
				{
					id: "cm4p954m0001if2f699uyu0ox",
					name: "መደበኛ አገልግሎት",
					price: "2",
					currency: "ETB",
					description: null,
					createdAt: "2024-12-15T06:55:49.654Z",
					updatedAt: "2025-01-02T05:37:24.282Z",
					packageId: "cm4p954lz001hf2f66az2pnwa",
				},
				{
					id: "cm4p954m0001jf2f6lyv01dud",
					name: "ፕሪሚዬም አገልግሎት",
					price: "2",
					currency: "ETB",
					description: null,
					createdAt: "2024-12-15T06:55:49.654Z",
					updatedAt: "2025-01-02T05:37:57.568Z",
					packageId: "cm4p954lz001hf2f66az2pnwa",
				},
			],
		},
	],

	// packages: [
	// 	{
	// 		id: 1,
	// 		name: {
	// 			en: "Basic Start-up Packages",
	// 			am: "መሰረታዊ",
	// 			om: "Bu'uuraa",
	// 		},

	// 		coverImage: "/assets/images/legal-shield.jpg",

	// 		price: {
	// 			en: "499 ETB",
	// 			am: "499 ብር",
	// 			om: "ETB 499",
	// 		},
	// 		description: {
	// 			en: "Basic Start-up and Essential legal protection for individuals",
	// 			am: "ለግለሰቦች አሳሲ የህግ ጥበቃ",
	// 			om: "Eegumsa seeraa murteessaa namoota dhuunfaaf",
	// 		},
	// 		features: [
	// 			{
	// 				en: ["24/7 legal advice", "Document review", "Will preparation"],
	// 				am: ["24/7 የህግ ምክር", "የሰነድ ግምገማ", "የኑዛዜ ዝግጅት"],
	// 				om: [
	// 					"Gorsa seeraa sa'aatii 24/7",
	// 					"Sakatta'a sanadaa",
	// 					"Qophii dhaamoo",
	// 				],
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: 2,
	// 		name: {
	// 			en: "Comprehensive coverage Law Packages",
	// 			am: "ፕሪሚየም",
	// 			om: "Piriimiyeemii",
	// 		},
	// 		coverImage: "/assets/images/legal-shield2.jpg",

	// 		price: {
	// 			en: "999 ETB",
	// 			am: "999 ብር",
	// 			om: "ETB 999",
	// 		},
	// 		description: {
	// 			en: "Comprehensive Premium coverage for families",
	// 			am: "ለቤተሰቦች ሁለንተናዊ ሽፋን",
	// 			om: "Haguuggii guutuu maatiif",
	// 		},
	// 		features: {
	// 			en: [
	// 				"All Basic features",
	// 				"Family coverage",
	// 				"Traffic ticket defense",
	// 				"IRS audit assistance",
	// 			],
	// 			am: [
	// 				"ሁሉም መሰረታዊ ባህሪያት",
	// 				"የቤተሰብ ሽፋን",
	// 				"የትራፊክ ቲኬት መከላከያ",
	// 				"የIRS ኦዲት እርዳታ",
	// 			],
	// 			om: [
	// 				"Amaloota Bu'uuraa hunda",
	// 				"Haguuggii maatii",
	// 				"Ittisa tiiketii daandii",
	// 				"Gargaarsa ooditii IRS",
	// 			],
	// 		},
	// 	},
	// 	{
	// 		id: 3,
	// 		name: {
	// 			en: "Business",
	// 			am: "ቢዝነስ",
	// 			om: "Daldalaa",
	// 		},
	// 		coverImage: "/assets/images/legal-shield.jpg",

	// 		price: {
	// 			en: "1999 ETB",
	// 			am: "1999 ብር",
	// 			om: "ETB 1999",
	// 		},
	// 		description: {
	// 			en: "Legal solutions for small businesses",
	// 			am: "ለአነስተኛ ንግዶች የህግ መፍትሄዎች",
	// 			om: "Furmaata seeraa dhaabbilee daldalaa xiqqaaf",
	// 		},
	// 		features: {
	// 			en: [
	// 				"All Premium features",
	// 				"Business contract review",
	// 				"Debt collection assistance",
	// 				"Employee handbook review",
	// 			],
	// 			am: [
	// 				"ሁሉም ፕሪሚየም ባህሪያት",
	// 				"የንግድ ውል ግምገማ",
	// 				"የዕዳ ሰብሳቢ እርዳታ",
	// 				"የሰራተኛ መመሪያ ግምገማ",
	// 			],
	// 			om: [
	// 				"Amaloota Piriimiyeemii hunda",
	// 				"Sakatta'a kontiraata daldalaa",
	// 				"Gargaarsa sassaabbii liqii",
	// 				"Sakatta'a qajeelcha hojjetaa",
	// 			],
	// 		},
	// 	},
	// ],

	appointments: {
		availableTimes: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
		lawyers: [
			{
				id: "john-doe",
				name: {
					en: "John Doe",
					am: "ጆን ዶ",
					om: "John Doe",
				},
				specialization: {
					en: "Corporate Law",
					am: "የኩባንያ ሕግ",
					om: "Seeraa Dhaabbataa",
				},
				bio: {
					en: "Experienced corporate lawyer with 10 years of practice.",
					am: "በ10 ዓመት የሙያ ልምድ ያለው የኩባንያ ሕግ ባለሙያ።",
					om: "Abukaatoo muuxannoo waggaa 10 qabu.",
				},
				availability: {
					en: "Mon-Fri",
					am: "ሰኞ-አርብ",
					om: "Wix-Jim",
				},
				location: {
					en: "Addis Ababa",
					am: "አዲስ አበባ",
					om: "Finfinnee",
				},
			},
			{
				id: "jane-smith",
				name: {
					en: "Jane Smith",
					am: "ጄን ስሚዝ",
					om: "Jane Smith",
				},
				specialization: {
					en: "Family Law",
					am: "የቤተሰብ ሕግ",
					om: "Seeraa Maatii",
				},
				bio: {
					en: "Dedicated family lawyer with expertise in divorce and child custody cases.",
					am: "በፍቺ እና የልጆች ጉዳይ ላይ ልዩ ችሎታ ያለው የቤተሰብ ጉዳይ ጠበቃ።",
					om: "Abukaatoo maatii hiikkaa fi to'annaa daa'immanii irratti muuxannoo qabu.",
				},
				availability: {
					en: "Tue-Sat",
					am: "ማክሰኞ-ቅዳሜ",
					om: "Kib-Sanb",
				},
				location: {
					en: "Bahir Dar",
					am: "ባህር ዳር",
					om: "Bahar Daar",
				},
			},
			{
				id: "mike-johnson",
				name: {
					en: "Mike Johnson",
					am: "ማይክ ጆንሰን",
					om: "Mike Johnson",
				},
				specialization: {
					en: "Criminal Law",
					am: "የወንጀል ሕግ",
					om: "Seeraa Yakkaa",
				},
				bio: {
					en: "Former prosecutor with a strong track record in criminal defense.",
					am: "በወንጀል መከላከል ጠንካራ ታሪክ ያለው የቀድሞ ዐቃቤ ሕግ።",
					om: "Abbaa alangaa duraa gochaalee yakkaa ittisuurratti muuxannoo cimaa qabu.",
				},
				availability: {
					en: "Mon-Thu",
					am: "ሰኞ-ሐሙስ",
					om: "Wix-Kam",
				},
				location: {
					en: "Mekelle",
					am: "መቐለ",
					om: "Maqallee",
				},
			},
		],
	},

	lawyer: {
		profile: {
			name: "John Doe",
			email: "john.doe@example.com",
			phone: "+251 91 234 5678",
			specialization: "Corporate Law",
			bio: "Experienced corporate lawyer with 10 years of practice.",
		},
		appointments: [
			{
				id: "1",
				clientName: "Alice Johnson",
				date: "2023-06-15",
				time: "10:00 AM",
				status: "pending",
			},
			{
				id: "2",
				clientName: "Bob Smith",
				date: "2023-06-16",
				time: "2:00 PM",
				status: "approved",
			},
			{
				id: "3",
				clientName: "Carol Williams",
				date: "2023-06-17",
				time: "11:00 AM",
				status: "rejected",
			},
		],
		packages: [
			{
				id: "1",
				name: "Basic Consultation",
				description: "1-hour legal consultation",
				price: "500",
			},
			{
				id: "2",
				name: "Document Review",
				description: "Review and analysis of legal documents",
				price: "1000",
			},
			{
				id: "3",
				name: "Full Representation",
				description: "Complete legal representation for a case",
				price: "5000",
			},
		],
	},

	admin: {
		profile: {
			name: "Admin User",
			email: "admin@example.com",
			phone: "+251 91 234 5678",
			role: "System Administrator",
			bio: "Experienced system administrator managing the Ethio Legal Shield platform.",
		},
		appointments: [
			{
				id: "1",
				clientName: "Alice Johnson",

				lawyerName: "John Doe",
				date: "2023-06-15",
				time: "10:00 AM",
				status: "pending",
			},
			{
				id: "2",
				clientName: "Bob Smith",
				lawyerName: "Jane Smith",
				date: "2023-06-16",
				time: "2:00 PM",
				status: "approved",
			},
			{
				id: "3",
				clientName: "Carol Williams",
				lawyerName: "Mike Johnson",
				date: "2023-06-17",
				time: "11:00 AM",
				status: "rejected",
			},
		],
		lawyers: [
			{
				id: "1",
				name: "John Doe",
				email: "john.doe@example.com",
				specialization: "Corporate Law",
			},
			{
				id: "2",
				name: "Jane Smith",
				email: "jane.smith@example.com",
				specialization: "Family Law",
			},
			{
				id: "3",
				name: "Mike Johnson",
				email: "mike.johnson@example.com",
				specialization: "Criminal Law",
			},
		],
		users: [
			{
				id: "1",
				name: "Alice Johnson",
				email: "alice@example.com",
				role: "Client",
			},
			{ id: "2", name: "Bob Smith", email: "bob@example.com", role: "Client" },
			{
				id: "3",
				name: "Carol Williams",
				email: "carol@example.com",
				role: "Client",
			},
		],
		contents: [
			{
				id: "1",
				type: "video",
				title: "Introduction to Ethiopian Law",
				description: "A brief overview of the Ethiopian legal system",
			},
			{
				id: "2",
				type: "audio",
				title: "Legal Rights and Responsibilities",
				description: "Podcast discussing citizen rights and responsibilities",
			},
			{
				id: "3",
				type: "text",
				title: "Guide to Business Registration",
				description:
					"Step-by-step guide for registering a business in Ethiopia",
			},
		],
		packages: [
			{
				id: "1",
				name: "Basic Consultation",
				description: "1-hour legal consultation",
				price: "500",
			},
			{
				id: "2",
				name: "Document Review",
				description: "Review and analysis of legal documents",
				price: "1000",
			},
			{
				id: "3",
				name: "Full Representation",
				description: "Complete legal representation for a case",
				price: "5000",
			},
		],
	},

	user: {
		id: "user123",
		firstName: {
			en: "John",
			am: "ጆን",
			om: "Joon",
		},
		lastName: {
			en: "Doe",
			am: "ዶ",
			om: "Doo",
		},
		email: "john.doe@example.com",
		phone: "+251 91 234 5678",
	},
};

export type Language = "en" | "am" | "om";

export function getStaticText(language: Language) {
	return staticText[language];
}

export function getMockApiData() {
	return mockApiData;
}
