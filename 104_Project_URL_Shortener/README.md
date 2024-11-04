# URL Shortener

**URL Shortener** is a fast, efficient, and secure URL shortener application built with Next.js, MongoDB, and Tailwind CSS. This project enables users to convert long URLs into short, easy-to-share links.

## Features
- **Quick URL Shortening**: Convert lengthy URLs into short, memorable links.
- **Custom Short Links**: Users can choose their own short link names.
- **Simple UI**: Clean, responsive design for an effortless user experience.
- **GitHub Integration**: Check out the source code on [GitHub](https://github.com/amansherjada).

## Technology Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: MongoDB for database management
- **API**: Custom API endpoint for URL generation

## Installation
To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/amansherjada/Web-Dev.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Web-Dev/104_Project_URL_Shortener
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in a `.env.local` file:
   ```plaintext
   MONGODB_URI=<Your MongoDB Connection URI>
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Go to `http://localhost:3000`.
2. Enter a long URL and your preferred short link.
3. Click **Generate** to create your short URL.
4. Share your new short link with others!
