import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Breadcrumbs, Link, TextField, Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const MuiBook = () => {
  return (
    <>
      <AppBar position="static" sx={{ height: '200px', backgroundColor: 'black' }}>
        
        <Toolbar
          sx={{
            height: '1%',
            justifyContent: 'flex-end',
            borderBottom: '1px solid grey',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
        
            {[...Array(10)].map((_, index) => (
              <React.Fragment key={index}>
                <IconButton sx={{ color: 'grey', '&:hover': { color: 'white' } }}>
                  <LinkIcon />
                </IconButton>
                {index < 9 && <Box sx={verticalLineStyle} />}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>

      
        <Toolbar
          sx={{
            height: '75%',
            justifyContent: 'flex-start', 
          }}
        >
          
          <Box sx={{ padding: 4, mr: 20 }}>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontSize: 30,
                textAlign: 'left',
                mt: 2,
                borderBottom: '3px solid white',
                paddingBottom: 0,
              }}
            >
              BRITE
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                marginTop: 0,
                fontSize: 30,
                paddingBottom: 0,
                borderBottom: '3px solid white',
              }}
            >
              REVOLUTION
            </Typography>
          </Box>
          <Breadcrumbs
            separator={<Box sx={verticalLineStyle} />} 
            sx={{
              color: 'white',
              display: 'flex',
              flexGrow: 1,
              whiteSpace: 'nowrap', 
            }}
          >
            {['HOME', 'BLOG', 'CAUSES', 'FAQ', 'ARTISTS', 'FEATURES', 'PRIVACY POLICY', 'SUPPORT', 'TERMS & CONDITIONS', 'ABOUT'].map((item, index) => (
              <Link
                key={index}
                underline="none"
                color={index === 0 ? 'inherit' : 'grey'}
                href="#"
                sx={{ mr: 1, ml: 1, '&:hover': { color: 'white' } }}
              >
                {item}
              </Link>
            ))}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          padding: '40px',
          backgroundColor: '#212121',
          height: '80%',
          textAlign: 'left',
          flexDirection: { xs: 'column', md: 'row' }, 
        }}
      >
        
        <Box sx={{ width: {xl:'70%', lg:'70%', md:'70%', sm:'100%', xs:'100%'}, pr: 4 }}>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
            How Music and Weather Affects The Result of Gambling Online
          </Typography>

          <Typography variant='body1' sx={{color:'white',mt:6}}>No one cares about weather when they bet but actually, it affects the result of the game so much in gambling online so you need to pay attention to it.</Typography>
          <Typography variant='body1' sx={{color:'white',mt:6}}> Not many people think about music and weather in gambling especially when they choose sportsbook as the main game. They only think about the game and internal factors such as teams, performance, players and more. Listening to music can affect the way people behave and help to improve their moods. However, if you like betting on NFL, then you have to think about weather because it will give you the better vision to make the right decision on gambling online. You need to realize that external elements such as weather can change the result of the game.</Typography>
          <Typography variant='h6' sx={{color:'white',mt:6}}>The Important of Music and Weather when You Do Gambling Online</Typography>
          <Box
            component={'img'}
            src='/assets/bookie.jpg'
            sx={{
              mt:4
            }}
          />
          <Typography variant='body1' sx={{color:'white',mt:6}}>In fact, listening music and weather has become the important part especially in sportsbook since most games are played outdoor under the open sky. It means, weather can change the result of the game and this is something you need to realize. No matter how good the team is, they can’t win easily when the weather is bad. Basically, it is not only for NFL league only but also other sports leagues have the same thing when it comes to weather. The weather can affect the games including the gamblers.</Typography>
          <Typography variant='body1' sx={{color:'white',mt:6}}>That is why, many people should find the information to win the game especially about forecast because it is important for you to decide before placing your bet on the game you choose. There are four season with different weather changes. Several years ago, Green Bay Packers won against Dallas Cowboys when the weather was dipped to -17 degrees Fahrenheit on the Final of NFL Championship game in 1967. You need to always check the forecast in the late November and December because winter comes.</Typography>
          <Typography variant='body1' sx={{color:'white',mt:6}}>The warm-weather teams such as Tampa Bay or perhaps Miami Dolphins heads to the cold-weather area, then it is better to choose the home team on your betting because the cold-weather team can win since they have no difficulty at all in playing under the chill wind. It can work on the other ways to. If the cold-weather teams head to the warm-weather area, they might get difficulty because may feel exhausted easily under the hot weather. If the weather is extremely changing, it can also affect.</Typography>
          <Typography variant='h6' sx={{color:'white',mt:6}}>Always Look at The Forecast Before Gambling Online in Sportsbook</Typography>
          <Typography variant='body1' sx={{color:'white',mt:6}}>Many people don’t realize the important thing of weather in gambling online and they just act like this is something normal. For some teams, weather can make them win the game with higher scores. However at the same time, the weather can make them lose. Basically, it is not only for NFL but also for other sports especially those which are played outdoor on the field. The bad weather such as rain or snow can make the field slippery. It is hard for players to move around especially for both teams.</Typography>
          <Typography variant='body1' sx={{color:'white',mt:6}}>That is why, people should know more about weather. When the weather is bad, there is no superior or inferior team anymore. It is because bad weather can’t block their true skills. If the weather is getting worse, sometimes the match is cancelled. It means, the bets will return to you again. The football player who is good in scoring goals can’t even move easily under the heavy rain or the wet field. The ball can’t be controlled well and this will make you hard to predict the result of the game.</Typography>
          <Typography variant='body1' sx={{color:'white',mt:6}}>Even the hot sunny day is not good for you to bet. It will make the teams exhausted more. In some games, there is a water break for 1 minute so the players of both teams can drink water and also take a break so they can keep hydrated. You can’t predict the result at all. That is why, you have to watch the forecast first. Somehow, though you have watched the forecast, some changes can still happen on the game. If you choose the sport like basketball, you don’t need to care about weather at all.</Typography>
          <Typography variant='body1' sx={{color:'white',mt:6}}>It is because this game is played indoor inside the stadium so you don’t have to care about anything. You just need to care about their performance and skill. If you choose badminton, you don’t need to do the same thing as well since it is played inside the stadium. However, when you choose sports that are played outdoor, then you need to think carefully about it. Making the right decision on the game is not so easy but if you think well, then you can win gambling online in maximum amount.</Typography>
        </Box>
        
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            padding: 2,
            borderRadius: '8px',
           height:{md:'1150px', lg:'900px'}
          }}
        >
          <Box sx={{ display: 'flex', mb: 2, color: 'white' }}>
            <TextField
              fullWidth
              placeholder="Search..."
              variant="outlined"
              sx={{backgroundColor:'lightgray'}}
              
            />
            <Button variant="contained" sx={{ ml: 1, borderRadius: '40%', backgroundColor: '#ba68c8', color: 'grey' }}>
              GO
            </Button>
          </Box>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: 'grey',mt:3,mb:3 }} />
          <Typography variant='h6' sx={{mb:2,fontWeight:'bold',color:'white'}}>Features</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {['Articles', 'Reviews', 'Spotlight'].map((linkText, index) => (
          <Link
            key={index}
            href="#"
            underline="none" 
            sx={{
              color: 'purple',
              fontSize: '16px',
              fontWeight:'bold',
              mb: 2,
              '&:hover': {
                textDecoration: 'underline',
                color:'#d81b60'
               
              },
            }}
          >
            {linkText}
          </Link>
        ))}
      </Box>
      <Box sx={{ width: '100%', height: '1px', backgroundColor: 'grey',mb:3 }} />
          <Typography variant='h6' sx={{mb:2,fontWeight:'bold',color:'white'}}>NEWS REVOLUTION</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column',color:'grey' }}>
        {['The Existance of Sbobet Until Now', 'Cara Hindari Kebangkrutan dalam Permainan Poker Online'].map((linkText, index) => (
          <Link
            key={index}
            href="#"
            underline="none" 
            sx={{
              color: 'purple',
              fontSize: '16px',
              fontWeight:'bold',
              mb: 2,
              '&:hover': {
                textDecoration: 'underline',
                color:'#d81b60'
              
              },
            }}
          >
            {linkText}
          </Link>
        ))}
      </Box>
      <Box sx={{ width: '100%', height: '1px', backgroundColor: 'grey' }} />
      <Typography variant='h6' sx={{mt:3,fontWeight:'bold',fontSize:15,color:'white'}}>From the Blog</Typography>
      <Typography variant='h4' sx={{fontWeight:'bold',color:'white'}}>Gorgeous New Avett Brothers Song</Typography>
      <Typography variant='body1' sx={{mt:2,mb:2,color:'grey'}}>Did you catch this? We’ve got you covered.   Prepare to weep.     Tags: The Once and Future Carpenter (CMT Unplugged), The Avett Brothers, …</Typography>
    
      <Typography variant='h4' sx={{fontWeight:'bold',color:'white'}}>St. Vincent Covers Tom Waits</Typography>
      <Typography variant='body1' sx={{mt:2,color:'grey'}}>“Big Black Mariah” from the halls of Tom Waits as performed by St. Vincent? Yes. Live from London from a few nights ago.</Typography>
          
        </Box>
      </Box>

      <Box sx={{ width: '100%', height: '2px', backgroundColor: 'grey' }} />

      
      <Box sx={{ width: '100%', backgroundColor: 'black', padding: '50px 0' }}>
        <Typography
          variant="body2"
          sx={{
            color: 'grey',
            textAlign: 'center', 
            fontSize: '14px',
          }}
        >
          Copyright © 2024 · All Rights Reserved · Brite Revolution
        </Typography>
      </Box>
    </>
  );
};

const verticalLineStyle = {
  width: '1px',
  height: '20px',
  backgroundColor: 'grey',
};

export default MuiBook;
