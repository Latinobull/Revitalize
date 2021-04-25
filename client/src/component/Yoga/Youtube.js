import React from "react"
import {Poses} from "../../api/Poses"
import YogaPoses from "./index"

function YoutubeVideo(){
  const [valueSelected, setValueSelected] = useState("");
  const [video, setVideo] = useState(Poses.map((item) => item.english_name))
  const Pose = video.map(Pose => Pose)

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${video}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${REACT_APP_YOUTUBE_KEY}`

   const handleChange = () => {
    axios.get(url).then((valueSelected) => {
        setVideo(valueSelected)
        console.log(valueSelected)
    });
   
    {Poses.map((item)=>{
  return (
     <div>
    <YogaPoses handleChange={handleChange} setValueSelected={setValueSelected} />
    </div>
  )

}
    )}
    }}