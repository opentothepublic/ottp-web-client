import { Post } from "@/app/components/Post";
import { ProjectProposal } from "@/components/index";

export const post1: Post = {
  name: "Alice",
  collaborators: ["@alice", "@bob"],
  description:
    "This is an example desciription. it might be long and go on two lines. This is an example desciription. it might be long and go on two lines",
  timeElapsed: "3m",
  projectsAndProposals: [
    { name: "Project 1", type: ProjectProposal.PROJECT },
    { name: "Project 2", type: ProjectProposal.PROJECT },
  ],
};

export const post2: Post = {
  name: "Charlie",
  collaborators: ["@alice", "@bob"],
  description:
    "This is an example desciription. it might be long and go on two lines. This is an example desciription. it might be long and go on two lines",
  timeElapsed: "8m",
  projectsAndProposals: [{ name: "Proposal", type: ProjectProposal.PROPOSAL }],
};
