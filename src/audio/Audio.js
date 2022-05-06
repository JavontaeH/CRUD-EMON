import { Howl } from "howler";

export const Audio = {
  transition: new Howl({
    src: "/audio/transition.wav",
    html5: true,
    volume: 0.05,
  }),
  battle: new Howl({
    src: "/audio/hgss-kanto-trainer.mp3",
    html5: true,
    volume: 0.05,
    loop: true,
  }),
  tackleHit: new Howl({
    src: "/audio/tackle-hit.wav",
    html5: true,
    volume: 0.2,
  }),
  fireballInit: new Howl({
    src: "/audio/fireball-init.wav",
    html5: true,
    volume: 0.2,
  }),
  fireballHit: new Howl({
    src: "/audio/fireball-hit.wav",
    html5: true,
    volume: 0.2,
  }),
  thunderInit: new Howl({
    src: "/audio/thunder-init.wav",
    html5: true,
    volume: 0.2,
  }),
  thunderHit: new Howl({
    src: "/audio/thunder-hit.wav",
    html5: true,
    volume: 0.2,
  }),
  earthquake: new Howl({
    src: "/audio/earthquake.mp3",
    html5: true,
    volume: 0.2,
  }),
};
