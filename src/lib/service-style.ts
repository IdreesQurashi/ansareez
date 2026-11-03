import type { ServiceKey } from '../data/home';

// Each service owns one hue, used the same way everywhere: the map cards, the service bands,
// the chips, the self check result. Full class names so Tailwind can find them.
export const serviceStyle: Record<
  ServiceKey,
  { soft: string; fill: string; solid: string; text: string; dot: string }
> = {
  marketing: {
    soft: 'bg-grow-soft',
    fill: 'fill-grow',
    solid: 'bg-grow',
    text: 'text-grow-ink',
    dot: 'bg-grow',
  },
  automation: {
    soft: 'bg-ai-soft',
    fill: 'fill-ai',
    solid: 'bg-ai',
    text: 'text-ai-ink',
    dot: 'bg-ai',
  },
  security: {
    soft: 'bg-secure-soft',
    fill: 'fill-secure',
    solid: 'bg-secure',
    text: 'text-secure-ink',
    dot: 'bg-secure',
  },
};
