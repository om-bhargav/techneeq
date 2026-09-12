"use client";

import { useEffect, useRef } from "react";
import { Video } from "@imagekit/react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.play().catch(() => {
      // Autoplay may be blocked by browser/device settings.
    });
  }, []);

  return (
    <Video
      ref={ref}
      urlEndpoint="https://ik.imagekit.io/pciubsigw"
      src="/video1.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disableRemotePlayback
      controls={false}
      // transformation={[
      //   {
      //     width: "1920",
      //     height: "1080",
      //     quality: 80
      //   },
      // ]}
      className="rounded-none! object-cover h-full w-full"
    />
  );
}
