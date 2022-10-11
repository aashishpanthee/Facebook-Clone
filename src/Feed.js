import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        key='1'
        profilePic='https://scontent.fbwa5-1.fna.fbcdn.net/v/t1.6435-9/48380292_2257330424542525_7488053452241633280_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MnQVvNXYVOMAX-0aVPz&_nc_ht=scontent.fbwa5-1.fna&oh=00_AT9-oAxtTootktAZtTb-saTSTVs6uKH3u-DMV8X_LsRlBw&oe=634C3F44'
        image='https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/310442685_651200393231648_7453192845384811488_n.jpg?stp=dst-jpg_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PZANeQ2VKVkAX_O4iYg&_nc_ht=scontent.fbwa5-1.fna&oh=00_AT_-2GJ0zN2gX4eTAkGak3d09BeqYsxkdCmwfcn0DTybtg&oe=6349C4EA'
        username='Sujan Shrestha'
        timestamp='5:20'
        message='Here we go !!!'
      />
      {/* <Post key={id} profilePic={profilePic} image={image} username={username} timestamp={timestamp} message={message}/>
      <Post key={id} profilePic={profilePic} image={image} username={username} timestamp={timestamp} message={message}/> */}
    </div>
  );
}

export default Feed;
