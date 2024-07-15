import React from 'react'
import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material"
import "../css/Home.css"

function News() {
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
            <li>News 1</li>
            <li>News 2</li>
            <li>News 3</li>
            <li>News 4</li>
            <li>News 5</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default News
