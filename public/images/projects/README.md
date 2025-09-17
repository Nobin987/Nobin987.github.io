# Project Icons Guide

## 📁 Folder Structure
```
public/
  images/
    projects/
      rags2riches-icon.png
      multicart-icon.png
      taskrabbit-icon.png
      shelter-icon.png
      showreel-icon.png
```

## 🎨 Icon Types Supported

### 1. **Image Icons** (Recommended for App Store apps)
```javascript
icon: {
  type: "image",
  src: "/images/projects/your-app-icon.png",
  alt: "Your App Icon"
}
```

### 2. **SVG Icons** (Great for custom designs)
```javascript
icon: {
  type: "svg",
  content: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="your-svg-path-here"/>
  </svg>`
}
```

### 3. **Emoji Icons** (Quick and simple)
```javascript
icon: {
  type: "emoji",
  content: "🎯"
}
```

## 📐 Icon Specifications

### **Image Icons:**
- **Size**: 512x512px or 1024x1024px (square)
- **Format**: PNG with transparency preferred
- **Style**: App Store style with rounded corners
- **File size**: < 500KB for optimal loading

### **SVG Icons:**
- **ViewBox**: 0 0 24 24 (standard)
- **Color**: Use `currentColor` for theme consistency
- **Size**: Vector format, scales automatically

## 🔄 Fallback System
- If image fails to load → Shows fallback emoji (📱)
- If SVG is malformed → Shows fallback emoji
- Always include alt text for accessibility

## 🎯 Best Practices
1. Use **image icons** for published apps (shows actual app icon)
2. Use **SVG icons** for open source projects (custom designs)
3. Use **emoji icons** for quick prototypes or personal projects
4. Keep file sizes small for fast loading
5. Test icons on different backgrounds