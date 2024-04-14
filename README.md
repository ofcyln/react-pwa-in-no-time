# React PWA in No Time

This repository serves as an extendable seed project for building a **React Progressive Web Application (PWA)** using **Vite**. Whether you're starting a new project or want to explore PWA development, this seed project provides a solid foundation.

## Table of Contents
1. Installation
2. Configuration

---

## Installation

To get started, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/ofcyln/react-pwa-in-no-time.git
   cd react-pwa-in-no-time
   ```

1. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

---

## Configuration

+ Change PWA configurations from `vite.config.ts` file when you need.
+ Use [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator) for creating assets like icons, splashscreens, updating manifest file and/or index file easily with your logo.
   
    + Example commands used to create splashscreens, icons of this app, and updated `index.html` file afterwards:
       ```bash
       npx pwa-asset-generator ./src/assets/logo/logo.svg ./public/assets/pwa --background "#fff" --icon-only --favicon --opaque false --maskable false --type png
       ```
       
      
       ```bash
       npx pwa-asset-generator logo.svg -i ./index.html
       ```

  ---

  This PWA app works in prod mode after releasing it to a live server.





