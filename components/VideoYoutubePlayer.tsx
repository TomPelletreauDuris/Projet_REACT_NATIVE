import React, { useState, useCallback } from 'react';
import { StyleSheet, View,  Alert } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";


  
function YoutubeVideoPlayer(props)  {
    
    // The video we will play on the player.
  
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  
    return (
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={props.videoid}
          onChangeState={onStateChange}
        />
      </View>
    );
 }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    title: { fontSize: 22, marginTop: 10, marginBottom: 10, textAlign: "center" },
    mediaplayer: {
      marginTop: 20,
    },
  });

  export default YoutubeVideoPlayer;