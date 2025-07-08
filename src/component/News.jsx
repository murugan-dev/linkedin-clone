import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material"
import "../css/Home.css"

function News() {

  const [news, setNews] = useState([])
  const getNews = async () => {
    try{
      const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      const {articles} = await res.json();
      const data = articles.slice(0, 5);
      setNews(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getNews();
  }, [])

  console.log(news, "newss")
  return (
    <div>
      <Card sx={{ padding: "0px 20px" }}>
        <CardHeader
          title={
            <Stack direction="row" className="space-between">
              <Typography>News</Typography>
              <Typography>i</Typography>
            </Stack>
          }
        />
        <CardContent className=''>
          <ul style={{listStyle: "none", paddingLeft: "20px"}} className="gap">

            {news?.map((item)=>{
              return(
                <li key={item?.publishedAt}>{item?.title}</li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default News
