/* eslint-disable no-unused-vars */
import React from "react";
import Post from "../Post/Post";

const Feed = () => {
  const posts = [
    {
      id: 1,
      title: "Hello World!",
      content: "Excited to join ConnectPoint today! #FirstPost",
    },
    {
      id: 2,
      title: "React Tips",
      content:
        "Just learned about React Hooks. They make functional components so powerful!",
    },
    {
      id: 3,
      title: "Tailwind CSS",
      content:
        "Tailwind makes styling so much faster and cleaner. Highly recommend it!",
    },
    {
      id: 4,
      title: "Morning Thoughts",
      content: "Coffee in hand, ready to code! ☕ #CodingLife",
    },
    {
      id: 5,
      title: "Workout Routine",
      content: "Completed my morning workout. Feeling energized!",
    },
    {
      id: 6,
      title: "Travel Dreams",
      content: "Planning a trip to the mountains this summer. Any suggestions?",
    },
    {
      id: 7,
      title: "Learning JavaScript",
      content: "Closures can be tricky, but understanding them feels amazing.",
    },
    {
      id: 8,
      title: "Healthy Eating",
      content:
        "Trying a new smoothie recipe today: spinach, banana, almond milk. #HealthyLife",
    },
    {
      id: 9,
      title: "Movie Night",
      content: "Watching Inception again. Mind blown every time! 🎬",
    },
    {
      id: 10,
      title: "Daily Motivation",
      content: "Every day is a new opportunity to learn something new.",
    },
    {
      id: 11,
      title: "Tech News",
      content: "Excited about the new AI tools being released this week!",
    },
    {
      id: 12,
      title: "Programming Challenge",
      content: "Solved my first algorithm challenge today. Feels great! #DSA",
    },
    {
      id: 13,
      title: "Photography",
      content:
        "Tried night photography for the first time. Loving the results!",
    },
    {
      id: 14,
      title: "Book Recommendation",
      content: "Reading 'Atomic Habits' — life-changing insights!",
    },
    {
      id: 15,
      title: "Learning Python",
      content: "Just finished my first Python project: a simple calculator.",
    },
    {
      id: 16,
      title: "Nature Walk",
      content: "Went for a walk in the park. Nature is so calming.",
    },
    {
      id: 17,
      title: "Coding Setup",
      content: "Finally organized my desk and setup for productive coding.",
    },
    {
      id: 18,
      title: "Weekend Vibes",
      content: "Relaxing and binge-watching my favorite shows this weekend.",
    },
    {
      id: 19,
      title: "UI Inspiration",
      content:
        "Saw an amazing UI design today. Taking notes for my next project!",
    },
    {
      id: 20,
      title: "Fitness Goal",
      content: "Hit 10,000 steps today. Feeling accomplished!",
    },
    {
      id: 21,
      title: "Learning AI",
      content: "Started learning about ChatGPT API. Fascinating technology!",
    },
    {
      id: 22,
      title: "Coding Tip",
      content:
        "Always write clean and readable code. Future you will thank you.",
    },
    {
      id: 23,
      title: "Morning Run",
      content: "Ran 5km today. Endorphins are real!",
    },
    {
      id: 24,
      title: "Gaming",
      content: "Just finished a new level in my favorite game. So satisfying!",
    },
    {
      id: 25,
      title: "Social Media Detox",
      content: "Taking a break from social media for a day. Feels refreshing.",
    },
    {
      id: 26,
      title: "Learning React Router",
      content: "Dynamic routing in React is super useful for multi-page apps.",
    },
    {
      id: 27,
      title: "Coffee Break",
      content: "Enjoying a latte while reading tech blogs. #CoffeeTime",
    },
    {
      id: 28,
      title: "Daily Coding",
      content: "Completed 3 coding challenges today. Progress is progress!",
    },
    {
      id: 29,
      title: "Music Inspiration",
      content: "Listening to lo-fi beats while coding. Highly recommended!",
    },
    {
      id: 30,
      title: "Meditation",
      content:
        "5 minutes of meditation in the morning sets the tone for the day.",
    },
    {
      id: 31,
      title: "Tech Stack",
      content: "Exploring MERN stack projects. Loving Node.js + MongoDB!",
    },
    {
      id: 32,
      title: "Travel Memory",
      content: "Reminiscing my trip to the beach last summer. 🌊",
    },
    {
      id: 33,
      title: "Frontend Fun",
      content: "CSS animations can really bring websites to life!",
    },
    {
      id: 34,
      title: "Coding Pair",
      content: "Paired up with a friend to solve algorithms. Teamwork rocks!",
    },
    {
      id: 35,
      title: "Daily Motivation",
      content: "Small steps every day lead to big results.",
    },
    {
      id: 36,
      title: "Healthy Habits",
      content:
        "Drinking more water and eating more greens. Feeling better already!",
    },
    {
      id: 37,
      title: "AI Experiments",
      content: "Trying to generate images with AI. Creativity unlocked!",
    },
    {
      id: 38,
      title: "Learning Tailwind",
      content: "Tailwind utilities are amazing for rapid UI development.",
    },
    {
      id: 39,
      title: "Nature Photo",
      content: "Captured a beautiful sunset today. 🌅 #Photography",
    },
    {
      id: 40,
      title: "Daily Coding Goal",
      content: "Solved at least one coding problem today. Consistency matters!",
    },
    {
      id: 41,
      title: "Book Reading",
      content: "Reading 'Clean Code'. Must-read for every developer.",
    },
    {
      id: 42,
      title: "Weekend Coding",
      content: "Building a mini social media app this weekend. #ReactJS",
    },
    {
      id: 43,
      title: "Fitness Update",
      content: "Yoga in the morning is calming and energizing.",
    },
    {
      id: 44,
      title: "Frontend Project",
      content: "Styled my profile page using Tailwind CSS. Looks clean!",
    },
    {
      id: 45,
      title: "AI Tools",
      content: "Testing AI-powered recommendation systems for fun.",
    },
    {
      id: 46,
      title: "Daily Reflection",
      content: "Reflecting on what I learned today. Growth is key!",
    },
    {
      id: 47,
      title: "Tech Blog",
      content:
        "Started writing my first tech blog. Excited to share knowledge!",
    },
    {
      id: 48,
      title: "Evening Walk",
      content: "A short walk in the evening clears the mind.",
    },
    {
      id: 49,
      title: "Learning Graphs",
      content: "Graphs in DSA are fascinating. BFS & DFS in action!",
    },
    {
      id: 50,
      title: "Night Coding",
      content: "Late-night coding sessions are productive and fun!",
    },
  ];

  return (
    <div className="p-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
