# Yard Skip Rental Application

A modern, responsive web application for browsing and selecting yard skips, built with React and Material-UI.

## Design Approach

### Component Architecture

The application follows a modular component-based architecture with two distinct card layouts:

1. **BrowserSkipCard**

   - Horizontal layout optimized for desktop viewing
   - Image positioned on the right
   - Content and image side by side
   - Responsive image sizing based on viewport

2. **MobileSkipCard**
   - Vertical layout optimized for mobile devices
   - Image positioned at the top
   - Content stacked below the image
   - Full-width image display
   - Standardized font sizes for better readability

### Responsive Design Benefits

1. **Enhanced User Experience**

   - Different layouts for different screen sizes
   - Optimized content presentation for each device type
   - Consistent visual hierarchy across devices
   - Improved readability on mobile devices

2. **Performance Optimization**

   - Conditional rendering of appropriate layout
   - Optimized image sizes for different viewports
   - Efficient use of screen real estate

3. **Accessibility**
   - Clear visual hierarchy
   - Consistent font sizes on mobile
   - High contrast color scheme
   - Clear status indicators through color-coded tags

### Visual Design Elements

1. **Color Scheme**

   - Dark theme for reduced eye strain
   - Orange accent color (#ff881a) for primary actions
   - Green/Red tags for clear status indication
   - High contrast text for better readability

2. **Typography**

   - Consistent font sizing on mobile
   - Clear hierarchy in desktop view
   - Responsive font scaling
   - Optimized line heights and spacing

3. **Interactive Elements**
   - Smooth animations for card transitions
   - Clear selection states
   - Intuitive filter controls
   - Responsive button states

## Technical Implementation

### Key Features

1. **Responsive Filtering**

   - Price range filtering
   - Size-based filtering
   - Weight capacity filtering
   - Real-time filter updates

2. **Dynamic Content**

   - API-driven content loading
   - Smooth loading states
   - Error handling
   - Animated content transitions

3. **State Management**
   - Local state for filters
   - Selection state management
   - Loading state handling
   - Error state management

### Benefits of the Design

1. **User-Centric Approach**

   - Clear information hierarchy
   - Easy-to-use filtering system
   - Intuitive selection process
   - Responsive to user interactions

2. **Maintainability**

   - Modular component structure
   - Reusable design patterns
   - Consistent styling approach
   - Easy to extend and modify

3. **Performance**

   - Optimized rendering
   - Efficient state management
   - Responsive image handling
   - Smooth animations

4. **Scalability**
   - Easy to add new features
   - Flexible component structure
   - Adaptable to new requirements
   - Maintainable codebase

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used

- React
- Material-UI
- Framer Motion
- CSS-in-JS (MUI's sx prop)
- Modern JavaScript (ES6+)

## Future Improvements

1. **Performance**

   - Image optimization
   - Lazy loading
   - Code splitting

2. **Features**

   - Advanced filtering options
   - Sorting capabilities
   - Search functionality
   - User preferences

3. **Accessibility**

   - ARIA labels
   - Keyboard navigation
   - Screen reader optimization

4. **User Experience**
   - More interactive elements
   - Enhanced animations
   - Additional visual feedback
   - Improved mobile gestures
