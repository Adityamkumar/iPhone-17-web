# 📱 iPhone 17 Landing Page Clone

A stunning, interactive clone of the iPhone 17 landing page featuring immersive 3D models, smooth animations, and a fully responsive design. Built with modern web technologies including React, Three.js, and GSAP.

![iPhone 17 Landing Page](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-cyan.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📸 Screenshots

### Desktop View
![iPhone 17 Desktop View](./screenshots/desktop-view.png)

### Mobile View
![iPhone 17 Mobile View](./screenshots/mobile-view.png)

## ✨ Features

- **🎨 Interactive 3D Models** - Realistic iPhone 17 3D models powered by Three.js and react-three-fiber
- **✨ Smooth Animations** - Fluid transitions and scroll-based animations using GSAP
- **📱 Fully Responsive** - Optimized experience across desktop, tablet, and mobile devices
- **🎬 Dynamic Sliders** - Beautiful image and content carousels with Swiper
- **⚡ Lightning Fast** - Built with Vite for optimal performance and instant hot module replacement
- **🎯 Modern UI/UX** - Clean, Apple-inspired design using Tailwind CSS utilities

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher) or [yarn](https://yarnpkg.com/) (v1.22.0 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Adityamkumar/iphone17.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd iphone17
   ```

3. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🛠️ Technologies Used

### Core

- **[React](https://react.dev/)** - Modern JavaScript library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Next-generation frontend build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### 3D & Animation

- **[react-three-fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[Three.js](https://threejs.org/)** - JavaScript 3D library
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animation library

### UI Components

- **[Swiper](https://swiperjs.com/)** - Modern mobile touch slider

### Code Quality

- **[ESLint](https://eslint.org/)** - Static code analysis tool

## 📁 Project Structure

```
iphone17/
├── public/
│   ├── img/                 # Image assets
│   └── model/               # 3D model files
│       └── video/           # Video assets
├── src/
│   ├── components/          # React components
│   │   ├── models/          # 3D model components
│   │   └── three/           # Three.js related components
│   ├── constant/            # Constants and configuration
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   ├── main.jsx             # Application entry point
│   └── style.css            # Additional styles
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## 🎯 Key Components

- **3D Model Viewer** - Interactive iPhone 3D model with rotation and zoom
- **Hero Section** - Eye-catching hero with animated text and visuals
- **Feature Showcase** - Highlight key iPhone features with animations
- **Gallery Slider** - Beautiful image carousel using Swiper
- **Video Section** - Embedded product videos with custom controls

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aditya Kumar**

- GitHub: [@Adityamkumar](https://github.com/Adityamkumar)
- Portfolio: [https://your-portfolio-link.com](https://your-portfolio-link.com)
- LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- Twitter: [@your-twitter-handle](https://twitter.com/your-twitter-handle)

## 🙏 Acknowledgments

- Apple for the design inspiration
- The React and Three.js communities for excellent documentation
- All contributors who have helped improve this project

## 📧 Contact

For questions or feedback, please open an issue on the GitHub repository.

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!