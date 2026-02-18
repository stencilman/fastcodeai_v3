import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const SHARE_PLATFORMS = {
  linkedin: {
    getUrl: (pageUrl) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}`,
    icon: "/blogs/social-icons/linkedin.svg",
    alt: "Share on LinkedIn",
  },
  facebook: {
    getUrl: (pageUrl) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    icon: "/blogs/social-icons/facebook.svg",
    alt: "Share on Facebook",
  },
  twitter: {
    getUrl: (pageUrl) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`,
    icon: "/blogs/social-icons/x.svg",
    alt: "Share on X",
  },
};

const SocialShare = () => {
  const path = usePathname();
  const blogName = path.split("/").pop();
  const currentUrl = `https://www.fastcode.ai/blogs/${blogName}`;

  const handleShare = (platform) => {
    const config = SHARE_PLATFORMS[platform];
    if (!config) return;
    window.open(config.getUrl(currentUrl), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex md:flex-col gap-[20px] items-center md:sticky md:top-[120px] md:h-fit">
      <p className="text-[#9EB3CF] font-aeonik text-lg">Share</p>
      {Object.entries(SHARE_PLATFORMS).map(([key, { icon, alt }]) => (
        <Image
          key={key}
          onClick={() => handleShare(key)}
          className="cursor-pointer hover:scale-[1.2] transition-all duration-300 ease-in-out"
          src={icon}
          width="30"
          height="30"
          alt={alt}
        />
      ))}
    </div>
  );
};

export default SocialShare;
