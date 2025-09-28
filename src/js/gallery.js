import game1 from '../assets/hobby-gallery/gs/caught5k.webp'
import game2 from '../assets/hobby-gallery/gs/rushers-dawnbreaking.webp'
import game3 from '../assets/hobby-gallery/gs/unknown.webp'
import game4 from '../assets/hobby-gallery/gs/waaaaaaaaaaaaaaaaaaa.webp'

import code1 from '../assets/hobby-gallery/cs/website.webp'
import code2 from '../assets/hobby-gallery/cs/java.webp'
import code3 from '../assets/hobby-gallery/cs/h_Utilities.webp'

import video1 from '../assets/hobby-gallery/vs/cc.webp'

import art1 from '../assets/hobby-gallery/as/kumiko-san.webp'
import art2 from '../assets/hobby-gallery/as/hex.webp'
import art3 from '../assets/hobby-gallery/as/i_thought_it_was_only_art_thing.webp'
import art4 from '../assets/hobby-gallery/as/gremlin.webp'
import art5 from '../assets/hobby-gallery/as/manga_style.png'

const memes = import.meta.glob(['../assets/memes/*.webp', '../assets/memes/*.mp4'], {
  eager: true,
  import: 'default',
});

export const game  = {game1, game2, game3, game4};
export const code  = {code1, code2, code3};
export const video = {video1};
export const art   = {art1, art2, art3, art4, art5};
export default Object.values(memes);