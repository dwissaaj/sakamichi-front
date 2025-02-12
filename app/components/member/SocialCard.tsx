import React from "react";
import { Link } from "@heroui/react";
import { SocialCardProps } from "@/app/utils/member/profile/social.dto";
export default function SocialCard(
  { instagram, website, other, blog, showroom }: SocialCardProps,
) {
  return (
    <div>
      <Link
        isExternal
        isBlock
        showAnchorIcon
        color="primary"
        href={blog}
      >
        Blog
      </Link>
      <Link
        isBlock
        showAnchorIcon
        color="secondary"
        href={instagram}
      >
        Instagram
      </Link>
      <Link isExternal isBlock showAnchorIcon color="success" href={website}>
        Website
      </Link>
      <Link isExternal isBlock showAnchorIcon color="warning" href={showroom}>
        Showroom
      </Link>
      <Link isExternal isBlock showAnchorIcon color="foreground" href={other}>
        Other
      </Link>
    </div>
  );
}
