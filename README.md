# Chayachobi | Next.js Photography Portfolio

![Chayachobi - Next.js Photography Portfolio](public/Logo.webp)

A modern, responsive photography portfolio built with Next.js 15+, featuring dynamic collections, smooth animations, and a beautiful dark/light theme.

Welcome to Chayachobi, where every frame tells a story. Founded in 2022, our journey began with a simple love for capturing moments and turning them into timeless memories. We believe every picture holds a piece of time — a reflection of beauty, culture, and emotion. From intimate portraits to grand celebrations, Chayachobi continues to frame stories that stay close to the heart.

## 🌟 Features

- **Dynamic Photo Collections**: Automatically loads and displays photos from organized folders
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Dark/Light Theme**: Elegant theme switching with smooth transitions
- **Modern Animations**: Powered by Framer Motion for smooth interactions

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Formspree**: Contact Form
- **React Photo Album**: [Masonry Layout](https://react-photo-album.com/examples/masonry)

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone [https://github.com/lilxyzz/x100]
   cd x100
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open http://localhost:3000 with your browser to see the result.

## 📸 Photo Collections

The portfolio is organized into collections:

- Urban Portraits
- Tokyo
- New Zealand
- Iceland
- Bali
- Morocco

Each collection should be placed in its corresponding folder in the `public` directory. Update image Validation /scripts/validate-images.ts

## 🎨 Theme Customization

### Colors

The theme colors are defined in `globals.css` using CSS variables. Modify the root variables to customize the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  /* ... other color variables */
}
```

## 🌓 Dark Mode

The theme toggle is implemented using `next-themes` and includes:

- System preference detection
- Smooth transitions
- Persistent theme selection

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
