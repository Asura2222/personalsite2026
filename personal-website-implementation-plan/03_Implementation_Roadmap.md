# Implementation Roadmap

> **IMPORTANT NOTE:** Code Claude will read this folder, write the code, and execute it.

## 1. Technical Stack Assumptions
*   **Framework:** Next.js (React) App Router.
*   **Styling:** Tailwind CSS + `clsx`/`tailwind-merge` + `radix-ui` (primitives).
*   **Icons:** Lucide React.
*   **Fonts:** `Manrope` (via `next/font/google`).
*   **Search/Command:** `cmdk` (pacocoursey/cmdk).
*   **Content:** MDX (Next-MDX-Remote or Contentlayer).

## 2. File & Folder Structure Plan
```
/
├── app/
│   ├── layout.tsx       # Root layout including SidebarWrapper
│   ├── page.tsx         # Home/About (The main profile view)
│   ├── experiences/     # Resume/Timeline view
│   ├── fieldnotes/      # Blog index
│   └── photos/          # Gallery
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx  # The fixed left navigation
│   │   └── cmdk-dialog.tsx # Command palette
│   ├── ui/
│   │   ├── badge.tsx    # For the "Highlights" in text
│   │   └── project-card.tsx
│   └── sections/
│       └── project-grid.tsx # Filterable grid
```

## 3. Design System Notes
*   **Sidebar:** Fixed width (approx 120-150px). **Text Right Aligned**.
*   **Typography:** `Manrope` class applied globally to `body`.
*   **Animations:** `framer-motion` for the "Layout Group" effect on the project tabs.

## 4. Task Breakdown (Phase 1: Foundation)
1.  [ ] **Project Setup:** Initialize Next.js, Tailwind, Install `cmdk`, `lucide-react`.
2.  [ ] **Layout Shell:** Implement the `Sidebar` component (fixed left) and `Main` content area (scrollable right).
3.  [ ] **Mobile Responsiveness:** Ensure sidebar collapses to a drawer or top nav on mobile.

## 5. Task Breakdown (Phase 2: Core UI)**
4.  [ ] **Bio & Highlights:** Build the Hero component with the text highlighter capability.
5.  [ ] **Filterable Grid:** Implement the "Projects | Communities" tabs and the project card grid.
6.  [ ] **Command Palette:** Integrate `cmdk` to open on `Cmd+K` and list pages.

## 6. Task Breakdown (Phase 3: Blog & Polish)
7.  [ ] **Blog Engine:** Setup MDX processing.
8.  [ ] **Writing Index:** Create the clean list view for articles.
9.  [ ] **Article Layout:** Typography-focused reading experience.
10. [ ] **Animation Pass:** Add subtle entry animations (Framer Motion) to page transitions and scroll visibility.

## 7. Critical Constraints Recap
*   **Do not write code** in this planning phase.
*   **Do not generate HTML/CSS** yet.
*   **Execution** depends on the subsequent agent reading this plan.
