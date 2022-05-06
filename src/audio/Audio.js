import { Howl } from "howler";

export const Audio = {
  transition: new Howl({
    src: "/audio/transition.wav",
    html5: true,
  }),
  battle: new Howl({
    src: "/audio/hgss-kanto-trainer.mp3",
    html5: true,
    volume: 0.05,
  }),
  tackleInit: new Howl({
    src: "/audio/tackle-init.wav",
    html5: true,
  }),
  tackleHit: new Howl({
    src: "/audio/tackle-hit.wav",
    html5: true,
  }),
  fireballInit: new Howl({
    src: "/audio/fireball-init.wav",
    html5: true,
  }),
  fireballHit: new Howl({
    src: "/audio/fireball-hit.wav",
    html5: true,
  }),
  thunderInit: new Howl({
    src: "/audio/thunder-init.wav",
    html5: true,
  }),
  thunderHit: new Howl({
    src: "/audio/thunder-hit.wav",
    html5: true,
  }),
  earthquake: new Howl({
    src: "/audio/earthquake.wav",
    html5: true,
  }),
};
