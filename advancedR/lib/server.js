import express from 'express';
import {data} from './testdata';
import config  from './config';
import serverRender from './renderers/serverRender';

const app = express();
app.use(express.static('public'));//express serves the public folder. 
//anything we put in public dir will be served

app.set('view engine','ejs');

app.get('/', (req,res) => {
  console.log(req.query);
  if(req.query.charles==1) {
    res.redirect('https://charles161.github.io');
    return;
  }
  const initialContent = serverRender();
  res.render('index',{ initialContent});//passing variables to the template
});

app.get('/cool', (req, res) => {
  res.send('hi');
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port,function() {
  console.log(`listening on ${config.port}`);
});
