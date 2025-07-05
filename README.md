# Monster Learning - Next.js Educational App

A fun, interactive educational application for kids to learn reading and math through flashcards and games. This project has been successfully converted from vanilla HTML/CSS/JavaScript to a modern Next.js application with TypeScript.

## 🚀 Features

- **Reading Practice**: Three difficulty levels with progressively complex sentences
- **Math Games**: Addition and subtraction problems with multiple choice answers
- **Interactive UI**: Beautiful animations, hover effects, and visual feedback
- **Star Effects**: Celebratory star animations when answers are correct
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **CSS Modules**: Scoped styling for components
- **React Hooks**: Modern state management

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/
│   ├── Header.tsx           # Main header component
│   ├── Navigation.tsx       # Navigation buttons
│   ├── HomeSection.tsx      # Home page with learning options
│   ├── ReadingSection.tsx   # Reading practice interface
│   ├── MathSection.tsx      # Math problems interface
│   └── StarEffect.tsx       # Star animation component
├── data/
│   ├── readingContent.ts    # Reading content for all levels
│   └── mathUtils.ts         # Math problem generation utilities
└── types/
    └── index.ts             # TypeScript type definitions
```

## 🏃‍♂️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

### Reading Section
1. Click "📚 Reading" from the navigation
2. Choose a difficulty level (1-3 stars)
3. Use Previous/Next buttons to navigate through flashcards
4. Click "Back to Levels" to choose a different level

### Math Section
1. Click "🔢 Math" from the navigation
2. Choose between Addition or Subtraction
3. Select the correct answer from multiple choices
4. Enjoy star animations for correct answers!
5. Complete all 10 problems to finish

## 🎨 Key Components

### Header Component
- Animated title with bounce effect
- Consistent branding across all pages

### Navigation Component
- Active state management
- Smooth transitions between sections

### Reading Section
- Three difficulty levels with appropriate content
- Flashcard-style interface
- Progress tracking

### Math Section
- Dynamic problem generation
- Multiple choice answers
- Visual feedback for correct/incorrect answers
- Star celebration effects

### Star Effect Component
- Animated stars that float across the screen
- Triggered on correct math answers
- Automatic cleanup after animation

## 🔄 Conversion Notes

This application was successfully converted from a single HTML file to a modular Next.js application:

- **Separated concerns**: Split monolithic HTML into reusable React components
- **Added TypeScript**: Enhanced code quality with type safety
- **Modular CSS**: Replaced global styles with CSS modules for better maintainability
- **State management**: Implemented React hooks for component state
- **Component architecture**: Created a scalable, maintainable component structure

## 🚀 Deployment

To build for production:

```bash
npm run build
npm start
```

The app is ready to be deployed to any hosting platform that supports Next.js applications (Vercel, Netlify, etc.).

## 🎯 Future Enhancements

- Add user progress tracking
- Implement more subjects (science, geography)
- Add audio pronunciation for reading exercises
- Create difficulty adjustment based on performance
- Add parent dashboard for tracking progress

## 📝 License

This project is open source and available under the MIT License.
