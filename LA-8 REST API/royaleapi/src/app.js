import React,{useState,useEffect} from "react";
import List from "./List";
import axios from "axios";
function App() {
  var [card,Setcard]=useState([]);
  const token="";
  var cors=require('cors');
  const [currenturl,setcurrenturl]= useState("https://proxy.royaleapi.dev/v1/cards?limit=20")
  const [load,setload]=useState(true)
  
  //var express=require('express');
  //var app=express();
  //App.use(cors());
  const cfg={
    headers:{
      "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

    "Access-Control-Allow-Headers":"Content-Type,X-Auth-Token,Origin,Authorization",
      "Authorization":"Bearer ${eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhiYTE3NGI4LTZhOWQtNDViMi1iZjkyLTVlMWNiNDM4NWM2ZiIsImlhdCI6MTY5NjcwOTA4OSwic3ViIjoiZGV2ZWxvcGVyLzIzZWI3ZWM3LTk3NjYtOTMzNy1lNDRhLTVlODcwZDk2ODY5MyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.2EXhoFupm88uj_ClTD3hzNnDYWhGTMog9_0y9Q5pnlHd4O2qkyLyNaUF2QvbBZdHP5iJ0PNFZvBip8mYFItOvg"
      
    }

  }
  useEffect(()=>{//Fetch once //[] everytime cururl change fetch 
    setload(true)
    let c1
    axios.get(currenturl,cfg,
      {
        cancelToken: new axios.CancelToken(c =>c1=c)
      }
      ).then(
      
      response =>{
        setload(false)
        Setcard(response.data.items.map(p=>p.iconUrls.medium))
        console.log(card)
      }
     
      ).catch(err=>console.log(err))
      return ()=> c1()
  },[currenturl])
  if(load) return  "Loading..."
  
  return (
    <List card={card}></List>
  );
}

export default App;