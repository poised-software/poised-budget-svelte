import { render, screen } from '@testing-library/svelte'
import App from './App.svelte'

test('Renders App', () => {
    render(App)
    expect(screen.getByText("Vite + Svelte")).toBeInTheDocument();
});