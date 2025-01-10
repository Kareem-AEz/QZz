# HoverButton Component

The `HoverButton` component is a customizable button with hover effects using GSAP animations.

## Props

- **children**: `ReactNode` - The content to be displayed inside the button.
- **fontSize**: `string` - The font size of the button text. Default is `"1.8rem"`.
- **fontWeight**: `string` - The font weight of the button text. Default is `"600"`.
- **fontColor**: `string` - The font color of the button text. Default is `"#333"`.
- **fontColorOnHover**: `string` - The font color of the button text on hover. Default is `"#ffedd6"`.
- **padding**: `object` - The padding inside the button. Default is `{ x: `${Math.round(Number.parseFloat(fontSize)) * 1.168}rem`, y: `${Math.round(Number.parseFloat(fontSize)) * 0.681}rem` }`.
- **lineHeight**: `number` - The line height of the button text. Default is `1`.
- **borderRadius**: `string` - The border radius of the button. Default is `"10rem"`.
- **borderWidth**: `string` - The border width of the button. Default is `${Math.round(Number.parseFloat(fontSize)) * 0.168}rem`.
- **borderColor**: `string` - The border color of the button. Default is `"#333"`.
- **flairColor**: `string` - The color of the flair effect on hover. Default is `"#333"`.
- **onClick**: `function` - The function to be called when the button is clicked. Default is `() => { console.log(`${children}: was clicked!`); }`.

## Usage

```jsx
import HoverButton from "./components/HoverButton/HoverButton";

function App() {
	return (
		<>
			<HoverButton
				fontSize="1.2rem"
				borderWidth="0.4rem"
				padding={{ x: "2rem", y: "1rem" }}
			>
				Hello React
			</HoverButton>
			<HoverButton>Hug Me</HoverButton>
			<HoverButton>I'm not a cattt</HoverButton>
			<HoverButton>Start QZz</HoverButton>
		</>
	);
}

export default App;
```

## Notes

- The `HoverButton` component uses GSAP for animations.
- The `useGSAP` hook is used to create context-safe GSAP animations.
- The button's flair effect is controlled by the `circleRef` reference.
