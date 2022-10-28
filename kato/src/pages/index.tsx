import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ForkRight } from '@mui/icons-material';

export default function ImgMediaCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345, float: 'left'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="/rocketri.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ロケットリ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            NAFTが飼っている鳥。鳴き声:グワア
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345,float: 'left' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="/bakibaki.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ばきばき
          </Typography>
          <Typography variant="body2" color="text.secondary">
          　FTEが飼っている童貞。鳴き声:イクウ
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>


  );
}
