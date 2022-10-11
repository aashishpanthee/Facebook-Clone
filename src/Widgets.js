import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className='widget'>
      <iframe
        src='https://ronbpost.com/news/2022/06/19/1655618576.html'
        width='340'
        height='100%'
        style={{ border: "none", overflow: "hidden" }}
        scrolling='yes'
        frameborder='0'
        allowTransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
}

export default Widgets;
// "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";