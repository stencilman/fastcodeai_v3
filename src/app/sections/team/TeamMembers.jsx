import React from "react";
import TeamMembersClient from "./TeamMembersClient";

const TeamMembers = async () => {
  let members = [];

  try {
    const res = await fetch("https://dayone.fastcode.ai/api/public/users", {
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.users) {
        members = data.users
          .filter((user) => user.linkedinProfile && user.teamImageUrl)
          .map((user, index) => ({
            id: user.id,
            uniqueId: `${user.id}-${user.name}-${index}`,
            name: user.name,
            role: user.jobRole || "",
            image: user.teamImageUrl,
            bio: user.teamBio || "",
            linkedin: user.linkedinProfile,
          }))
          .sort((a, b) => {
            if (a.name.includes("Arjun Jain")) return -1;
            if (b.name.includes("Arjun Jain")) return 1;
            return a.name.localeCompare(b.name);
          });
      }
    } else {
      console.error(
        "Failed to fetch team members:",
        res.status,
        res.statusText
      );
    }
  } catch (error) {
    console.error("Error fetching team members:", error);
  }

  return <TeamMembersClient members={members} />;
};

export default TeamMembers;
