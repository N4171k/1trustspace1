# Saarthi - P2P Property Rental Platform

A modern web platform that enables users to rent luxury and unused properties for events and functions, with built-in trust mechanisms and live verification features.

## Features

- 🔐 Secure User Authentication & KYC Verification
- 📹 Live Video Property Verification
- 🤖 AI-Based Property Authenticity Checks
- 💳 Secure Escrow Payment System
- 📱 Responsive & Modern UI
- 🔍 Advanced Property Search & Filtering
- ⭐ Trusted Reviews & Ratings System

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with OAuth
- **Backend**: Node.js with Firebase
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Video Streaming**: WebRTC
- **AI Integration**: TensorFlow.js for image verification

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                 # Utility functions and configurations
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── styles/             # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
