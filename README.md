# IELTSPro - IELTS Institute Homepage

A modern, responsive homepage for a fictional IELTS Institute built with React.js and Tailwind CSS.

## 🚀 Live Demo

[View Live Demo](https://baby-code-mocha.vercel.app/) - Deployed on Vercel

## 📋 Features

- **Modern Design**: Clean, professional UI with a modern color scheme
- **Fully Responsive**: Optimized for both desktop and mobile devices
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized with React best practices

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS v3.4.0** for styling
- **Google Fonts** (Inter) for typography
- **SVG Icons** for consistent iconography

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrathamJain2002/BabyCode.git
   cd ielts-institute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   **Note**: This project uses Tailwind CSS v3.4.0 which is compatible with Create React App. The PostCSS configuration is already set up correctly.

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
```

The build files will be generated in the `build` directory.

## 🎨 Design Choices

### Color Palette
- **Primary Blue**: `#3b82f6` - Professional, trustworthy, and commonly used in educational platforms
- **Secondary Gray**: `#64748b` - Neutral, clean, and provides good contrast
- **Accent Colors**: Green for success states, yellow for highlights

### Typography
- **Font Family**: Inter - Modern, highly readable, and professional
- **Font Weights**: 300-800 range for proper hierarchy and emphasis

### Layout & Spacing
- **Container**: Max-width of 7xl (1280px) with responsive padding
- **Grid System**: CSS Grid and Flexbox for responsive layouts
- **Spacing**: Consistent 8px base unit following Tailwind's spacing scale

### Component Design
- **Cards**: Rounded corners (xl), subtle shadows, hover effects
- **Buttons**: Primary and secondary variants with hover states
- **Navigation**: Sticky header with mobile hamburger menu
- **Sections**: Proper spacing and visual hierarchy

### Responsive Design
- **Mobile First**: Designed for mobile devices first, then enhanced for larger screens
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Grid Layouts**: Responsive grid that adapts from 1 column on mobile to 2-4 columns on desktop

## 📱 Sections Overview

### 1. Navigation Bar
- Sticky header with logo and navigation links
- Mobile-responsive hamburger menu
- Call-to-action button

### 2. Hero Section
- Compelling headline and subtext
- Two call-to-action buttons
- Interactive band score display card
- Floating animation elements

### 3. Features Section
- 4 feature cards with icons and descriptions
- Statistics section with key metrics
- Hover effects and animations

### 4. Testimonials Section
- 3 student testimonials with band scores
- Improvement highlights
- Call-to-action section

### 5. Footer
- Company information and social links
- Quick navigation links
- Contact information
- Legal links

## 🎯 Key Features Implemented

✅ **Modern & Professional Design**
- Clean, contemporary UI
- Consistent color scheme and typography
- Professional imagery and icons

✅ **Fully Responsive**
- Mobile-first approach
- Responsive grid layouts
- Mobile navigation menu

✅ **Interactive Elements**
- Hover effects on cards and buttons
- Smooth transitions and animations
- Interactive navigation

✅ **Accessibility**
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with default settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update the `homepage` field in `package.json` with your GitHub username
3. Run: `npm run deploy`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

## 🙏 Acknowledgments

- [Tailwind CSS v3](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful SVG icons
- [Google Fonts](https://fonts.google.com/) for the Inter font family
- [React](https://reactjs.org/) for the amazing JavaScript library
- [Create React App](https://create-react-app.dev/) for the development setup

---

**Note**: This is a fictional IELTS Institute website created for demonstration purposes. All content, testimonials, and statistics are fictional and used for design purposes only.