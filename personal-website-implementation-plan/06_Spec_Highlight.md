# Component Spec: Highlight Badge

## Description
A unified component to render the distinctive "marker" highlights seen in the reference bio.

## Usage
```tsx
<Highlight color="blue">@RevisionDojo</Highlight>
<Highlight color="yellow">community</Highlight>
```

## Styling (Tailwind)
The component should accept a `color` prop mapping to:
*   **blue:** `bg-blue-100 text-blue-900`
*   **green:** `bg-green-100 text-green-900`
*   **yellow:** `bg-yellow-100 text-yellow-900`
*   **purple:** `bg-purple-100 text-purple-900`
*   **red:** `bg-red-100 text-red-900`

## Interaction
*   Optional: Hover state that deepens the color slightly (`hover:bg-blue-200`) to indicate interactivity if it wraps a link.
