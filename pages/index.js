/* eslint-disable */
import React, {useState, useEffect, useRef} from "react";
import { useRouter } from "next/router";
import VideoPlayer from "../components/VideoPlayer";
const VideoPage = () => {
    const router = useRouter();

    const [videoOptions, setVideoOptions] = useState({});

    useEffect(() => {
      setVideoOptions(
        {
          autoplay: false,
          controls: true,
          responsive: true,
          fluid: true,
          sources: [{
          src: "https://memovideostream-aueas.streaming.media.azure.net/c21748dc-bbd9-4613-b0df-c4231fbf6886/Wk 3 Nutrition.ism/manifest(format=m3u8-aapl)",
          type: 'application/x-mpegURL'
          }],
          poster: "https://d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png",
          playbackRates: [0.5, 1, 1.5, 2],
          userActions: {
              hotkeys: true
          }
        }
      )
    }, [])
   

    const playerRef = useRef(null);



  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

    return(
        <>
           
                        {Object.keys(videoOptions).length && <VideoPlayer options={videoOptions} onReady={handlePlayerReady} />}
                          
                            {/* <VideoPlayer options={videoOptions} onReady={handlePlayerReady} /> */}
                        {/* </div> */}

                      
        </>
    )
}

export default (VideoPage);