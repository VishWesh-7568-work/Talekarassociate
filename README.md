# Talekar & Associates - Law Firm Website

A modern, professional law firm website built with Next.js 15, Firebase, and Tailwind CSS. This project showcases the services, team, and expertise of Talekar & Associates, a premier law firm in India.

## 🚀 Features

- **Modern Design**: Elegant, professional design with custom typography
- **Firebase Integration**: Authentication, Firestore database, and hosting
- **Admin Dashboard**: Secure admin panel for content management
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Built with Next.js for optimal performance
- **Dark Theme**: Sophisticated dark color scheme
- **Content Management**: Easy-to-use admin interface for managing team members

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Firebase (Authentication, Firestore, Hosting)
- **Database**: Firestore NoSQL database
- **Authentication**: Firebase Auth with Google Sign-in
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 📁 Project Structure

```
talekar-associates/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── admin/             # Admin dashboard routes
│   │   ├── about/             # About page
│   │   ├── people/            # Team members page
│   │   ├── practice-areas/    # Services page
│   │   ├── sectors/           # Expertise sectors
│   │   ├── insights/          # Legal insights
│   │   ├── news/              # Media coverage
│   │   ├── careers/           # Career opportunities
│   │   ├── contact/           # Contact information
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Layout components
│   │   └── DisclaimerDialog.tsx
│   ├── lib/                  # Utility libraries
│   │   ├── firebase/         # Firebase configuration
│   │   ├── admins.ts         # Admin authorization
│   │   └── utils.ts          # Utility functions
│   └── hooks/                # Custom React hooks
├── public/                   # Static assets
├── package.json              # Dependencies
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── env.example              # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project
- Google account for admin access

### 1. Clone the Repository

```bash
git clone <repository-url>
cd talekar-associates
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Firebase Setup

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one

2. **Enable Services**:
   - **Authentication**: Enable Google Sign-in
   - **Firestore**: Create database in test mode
   - **Hosting**: Enable hosting (optional)

3. **Get Configuration**:
   - Go to Project Settings > General
   - Copy the Firebase config object
   - Go to Project Settings > Service Accounts
   - Generate new private key for Admin SDK

### 4. Environment Variables

1. Copy the environment template:
   ```bash
   cp env.example .env.local
   ```

2. Fill in your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
   ```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

## 🔐 Admin Access

### Setting Up Admin Users

1. **Add Admin Emails**: Edit `src/lib/admins.ts` to include authorized admin emails
2. **Sign In**: Go to `/admin/login` and sign in with Google
3. **Access Dashboard**: Once authenticated, access `/admin/dashboard`

### Admin Features

- **Team Management**: Add, edit, and remove team members
- **Content Updates**: Manage firm information and team profiles
- **User Management**: Control who has admin access

## 🎨 Customization

### Colors and Theme

The design system uses CSS custom properties defined in `src/app/globals.css`:

```css
:root {
  --primary: 16 40% 46%;      /* Brand color */
  --accent: 45 39% 60%;       /* Accent color */
  --background: 224 71.4% 4.1%; /* Dark background */
}
```

### Typography

- **Headlines**: Playfair Display (serif)
- **Body Text**: PT Sans (sans-serif)

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/layout/Header.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach using Tailwind CSS:

- **Mobile**: Single column layout
- **Tablet**: Two-column grid
- **Desktop**: Multi-column layouts with hover effects

## 🚀 Deployment

### Firebase Hosting

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**:
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

### Environment Variables

Ensure all environment variables are set in your hosting platform:
- Vercel: Use the dashboard
- Netlify: Use the dashboard
- Firebase: Use Functions environment variables

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript check
```

## 📚 Key Components

### Firebase Integration

- **Client**: `src/lib/firebase/index.ts` - Client-side Firebase config
- **Server**: `src/lib/firebase/server.ts` - Server-side Admin SDK
- **Database**: `src/lib/firebase/firestore.ts` - Firestore operations

### Authentication

- **Middleware**: `middleware.ts` - Route protection
- **Admin Check**: `src/lib/admins.ts` - Admin authorization
- **Session Management**: Server-side session cookies

### UI Components

- **shadcn/ui**: Professional, accessible components
- **Custom Components**: Tailored for law firm branding
- **Responsive Design**: Mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Talekar & Associates.

## 🆘 Support

For technical support or questions:
- Check the Firebase documentation
- Review Next.js documentation
- Contact the development team

## 🔄 Updates

### Recent Changes

- Next.js 15 upgrade
- Enhanced admin dashboard
- Improved responsive design
- Better TypeScript support

### Planned Features

- Blog system
- Case studies showcase
- Client portal
- Multi-language support

---

**Built with ❤️ for Talekar & Associates**
