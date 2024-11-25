import React from 'react'
import { AppBar, Toolbar, Typography, Box, List, ListItem, useMediaQuery, useTheme } from '@mui/material'

const Page = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Box
      sx={{ 
        flexGrow: 1, 
        backgroundImage: 'url(/assets/black-glittery.avif)', 
        backgroundColor: 'black',
        minHeight: '100vh',
        color: 'white',
        padding: isXs ? 1 : 4, 
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'grey', mt: 2 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: isXs ? 'column' : 'row' }}>
            <Typography variant="h6" component="div" sx={{ mx: 1 ,textAlign:'left'}}>
              McDonald
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 1 ,textAlign:'left'}}>
              Fast Food
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: isXs ? 'column' : 'row' }}>
            <Typography variant="h6" component="div" sx={{ mx: 1 }}>
              Art
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 1 }}>
              Journal
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 1 }}>
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: 1 }}>
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <img
          src="/assets/mc.jpg"
          alt="McDonald's Logo"
          style={{
            width: '100%',
            maxWidth: '1200px', 
            height: 'auto',
            borderRadius: '8px',
            border: '2px solid white',
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: isXs ? 'column' : 'row', justifyContent: 'space-between', mt: 4 }}>
        <Box sx={{ width: isXs ? '100%' : '48%', mb: isXs ? 2 : 0 }}>
          <AppBar position="static" sx={{ backgroundColor: 'grey' }}>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{textAlign:'left'}}>
                  McDonald's
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant="h6" component="div">
                  May 15, 1940
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <Box sx={{ mt: 0, display: 'flex', justifyContent: 'center' ,height:{sm:'80%'}}}>
            <img
              src="/assets/McHistory.jpg"
              alt="History"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                border: '2px solid white',
              }}
            />
          </Box>
        </Box>

        <Box sx={{ width: isXs ? '100%' : '48%' }}>
          <AppBar position="static" sx={{ backgroundColor: 'grey' }}>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{textAlign:'left'}}>
                  History
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <Box sx={{ mt: 0, p: 2, backgroundColor: '#333', borderRadius: '8px' }}>
            <Typography variant="body1">
              McDonald's was founded in 1940 by Richard and Maurice McDonald in San Bernardino, California, originally as a small drive-in restaurant. In 1948, they introduced a revolutionary "Speedee Service System" focused on fast, efficient food preparation, which became the foundation of the modern fast-food industry. In 1954, Ray Kroc, a salesman, discovered the restaurant and saw its potential. He joined the company as a franchise agent and later bought the business from the McDonald brothers in 1961. Under Kroc's leadership, McDonald's rapidly expanded globally, becoming one of the most recognizable brands and largest fast-food chains in the world, known for its burgers, fries, and iconic golden arches.
            </Typography>
          </Box>
        </Box>
      </Box>


<Box sx={{ mt: 4 }}>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          flexWrap: isXs ? 'wrap' : 'nowrap', 
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: isXs ? '48%' : '23%', mb: isXs ? 2 : 0 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
            Breakfast
          </Typography>
          <List>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Egg McMuffin</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Hotcakes</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Sausage Biscuit</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Hash Browns</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Breakfast Burrito</ListItem>
          </List>
        </Box>

        <Box sx={{ width: isXs ? '48%' : '23%', mb: isXs ? 2 : 0 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
            Desserts
          </Typography>
          <List>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Apple Pie</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>McFlurry</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Sundae</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Chocolate Shake</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Soft-Serve Cone</ListItem>
          </List>
        </Box>

        <Box sx={{ width: isXs ? '48%' : '23%', mb: isXs ? 2 : 0 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
            Burgers
          </Typography>
          <List>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Big Mac</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Quarter Pounder</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Cheeseburger</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Double Cheeseburger</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>McDouble</ListItem>
          </List>
        </Box>

        <Box sx={{ width: isXs ? '48%' : '23%' }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
            McCafe
          </Typography>
          <List>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Latte</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Cappuccino</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Iced Coffee</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Mocha</ListItem>
            <ListItem sx={{ color: 'white', textAlign: 'left' }}>Hot Chocolate</ListItem>
          </List>
        </Box>
      </Box>
    </Box>
      
    </Box>
  )
}

export default Page;

