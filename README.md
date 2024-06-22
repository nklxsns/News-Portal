# React News Portal

## Overview

This project is a responsive React application that displays news articles fetched from a public API. Users can filter articles by categories and navigate through different pages of articles. Clicking on an article summary leads to a detailed view of the article. 

## Features

### Homepage Layout

- Displays a list of news articles with title, image, and summary.
- Each article links to a detailed view.
- Responsive design adapts to both desktop and mobile devices.

### Category Filtering

- Dropdown or buttons to filter articles by categories (e.g., Business, Technology, Entertainment).
- UI updates to display articles from the selected category.

### Pagination

- Pagination implemented at the bottom of the homepage.
- Users can navigate through different pages of articles.

### Detailed Article View Page

- Clicking on an article summary navigates to a detailed view of the article.
- Displays the full content of the article, including any media like images or videos.

### API Integration

- Uses a public news API (NewsAPI) to fetch news articles.
- Handles loading states and errors during API calls.

### State Management

- Uses React hooks for state management to handle user inputs, API responses, and application state.
- No Redux or other external state management libraries used.

### Advanced Features

- Search feature to allow users to search for articles by keywords.

## Technical Requirements

- Functional components and hooks.
- Axios or Fetch API for making API calls.
- Responsive design using CSS Grid, Flexbox, and framework like Bootstrap.
- Error handling and loading states for network requests.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nklxsns/News-Portal.git
    ```
2. Navigate to the project directory:
    ```bash
    cd News-Portal
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root of the project and add your NewsAPI key:
    ```env
    VITE_API_KEY=your_news_api_key_here
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```
