# Feature: Command Palette (Cmd+K)

## Overview
Based on the visual reference, the site features a "Cmd+K" trigger in the top right. This is a power-user feature common in developer/builder portfolios (e.g., Raycast, Vercel style).

## Library
*   **Package:** `cmdk` (by pacocoursey)
*   **Styling:** Radix UI or plain Tailwind.

## Functionality
*   **Trigger:**
    *   Keyboard: `⌘K` (Mac) or `Ctrl+K` (Windows).
    *   Click: Button in top-right corner.
*   **Actions:**
    *   Navigation: "Go to Home", "Go to Philosophy", "Go to Projects".
    *   External: "Copy Email", "Go to Twitter", "Go to LinkedIn".
    *   Theme: "Toggle Dark Mode".

## Implementation Details
1.  Create a `<CommandMenu />` component.
2.  Place it in the RootLayout so it is available globally.
3.  Ensure z-index is highest (Overlay).
4.  Style the backdrop to be a slight blur (`backdrop-blur-sm`).
