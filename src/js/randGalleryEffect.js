import { useMemo } from 'react';

import video1 from "../assets/hobby-gallery/vs/ds-gp.webp"
import video2 from "../assets/hobby-gallery/vs/ds-guide.webp"
import video3 from "../assets/hobby-gallery/vs/mc-bedrock.webp"
import video4 from "../assets/hobby-gallery/vs/mc-stickman.webp"
import video5 from "../assets/hobby-gallery/vs/rpge.webp"
import video6 from "../assets/hobby-gallery/vs/school-proj.png"

function getVideoID(url) {
    const match = url.match(/v=([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}

export default function randGalleryEffect() {
    return useMemo(() => {
        const recommendedVideos = [
            {
                url: "https://www.youtube.com/watch?v=f77aJzd3Jv8",
                desc: "A G&B video showcasing a new special zombie and how to counter it."
            },
            {
                url: "https://www.youtube.com/watch?v=TSNuq_vophU",
                desc: "A Pilgrammed video showing a viable mage build solely for a terrible weapon."
            },
            {
                url: "https://www.youtube.com/watch?v=9DAEQtetync",
                desc: "A Pilgrammed video about a facetank build and to modify to their liking."
            },
            {
                url: "https://www.youtube.com/watch?v=1a__L3zakEk",
                desc: "A Pilgrammed video about an OP tank build and how easily destroys the bosses."
            },
            {
                url: "https://www.youtube.com/watch?v=wefuywKNnsc",
                desc: "A G&B gameplay video about getting a certain difficult secret achievement."
            },
            {
                url: "https://www.youtube.com/watch?v=AWZNtCiBYdY",
                desc: "A Pilgrammed video about a gun build that solely focuses on slow fire-rate guns."
            },
            {
                url: "https://www.youtube.com/watch?v=bNekC3FzRdc",
                desc: "A concise guide video for uncapping the player level in RPG Elevator."
            },
            {
                url: "https://www.youtube.com/watch?v=LppBE9tDjUg",
                desc: "A HELLMET gameplay video where I ignore gameplay mechanics. Giving the new players insights."
            },
            {
                url: "https://www.youtube.com/watch?v=X53P3az5Ris",
                desc: "A short tutorial on how to trimp in nico's nextbots."
            },
            {
                url: "https://www.youtube.com/watch?v=wB9iYDTDJ4w",
                desc: "A Pilgrammed gameplay video showing how chaotic and silly the small community is."
            },
            {
                url: "https://www.youtube.com/watch?v=DOxhO6TMpsE",
                desc: "A Minecraft gameplay video with chaotic friends."
            },
            {
                url: "https://www.youtube.com/watch?v=ibgdoLGVNFk",
                desc: "A Minecraft gameplay video with my little brother."
            },
            {
                url: "https://www.youtube.com/watch?v=RBvbyiknvZc",
                desc: "A detailed guide on how to defeat a dark knight easily in Dark Souls I."
            },
            {
                url: "https://www.youtube.com/watch?v=zOtqHwZCahE",
                desc: "A Pilgrammed showcase video where I share some vanities that can be used as cosplay."
            },
        ];

        const images = [video1, video2, video3, video4, video5, video6];

        const videoEl = recommendedVideos[Math.floor(Math.random() * recommendedVideos.length)];
        const imageEl = images[Math.floor(Math.random() * images.length)];
        const videoID = getVideoID(videoEl.url);

        return {
            randVideo: {
                url: videoEl.url,
                desc: videoEl.desc,
                thumbnail: videoID ? `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg` : ""
            },
            randImage: {
                url: imageEl,
                desc: "Random image"
            }
        };
    }, []);
}