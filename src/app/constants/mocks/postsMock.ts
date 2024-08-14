import { Post } from "@/app/components/Post";

const post1: Post = {
  name: "undefined",
  collaborators: ["@undefined", "@animated", "@statuette"],
  description:
    "This week I also built a website for basecamp lawn games - dunkathon. participants could play to earn onchain points for a chance to dunk @jessepollak. learned an important lesson to make end user experience easier and smoother. kudos to @animated...",
  timeElapsed: "3m",
  imageSrc: "/__mocks__/undefinedAvatar.png",
};

const post2: Post = {
  name: "Toady Hawk",
  collaborators: ["@toadyhawk.eth", "@robin"],
  description:
    "This week I built and launched a new Yellow Collective creator contest, in collaboration with our friends over at @moshicam, where we are offering a prize pool of 1 ETH to be distributed via @rounds to any shutterbugs who snap an Onchain Summer...",
  timeElapsed: "8m",
  imageSrc: "/__mocks__/toadyHawkAvatar.png",
};

const post3: Post = {
  name: "robin",
  collaborators: ["@robin", "@kaito"],
  description:
    "sign up for an app, mint things onchain, earn ETH, and withdraw to your personal wallet to use in the broader crypto economy – without ever depositing crypto or knowing what a seed phrase is. this is possible with our latest /moshicam update!",
  timeElapsed: "11m",
  imageSrc: "/__mocks__/robinAvatar.jpeg",
};

export const posts = [post1, post2, post3];
