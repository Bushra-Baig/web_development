// import React from 'react'
// import { AppBar, Toolbar,Typography,Box,Button,Menu,MenuItem ,IconButton,Divider,Stack,ImageList,ImageListItem} from '@mui/material'
// import LanguageIcon from '@mui/icons-material/Language';
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
// import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
// import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
// import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
// import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
// import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
// import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
// import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
// import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';
// import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
// import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faTiktok,faFacebook, faYoutube, faSnapchatGhost, faXTwitter } from '@fortawesome/free-brands-svg-icons';


// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { MouseEvent } from 'react';
// import  { useState } from 'react';
// const MuiLasvegas = () => {
//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//     const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     const images=[
//         '/assets/bimg1.jpg',
//         '/assets/bimg2.jpg',
//         '/assets/bimg3.png',
//         '/assets/bimg4.png',
//         '/assets/bimg5.jpg',
//         '/assets/bimg6.jpg',
//         '/assets/bimg7.jpg',
//         '/assets/bimg8.jpg',
//         '/assets/bimg9.jpg',
//         '/assets/bimg10.jpg',
//         '/assets/bimg11.png',
//         '/assets/bimg12.jpg',
//         '/assets/bimg13.jpg',
//         '/assets/bimg14.jpg',
//     ];

   

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex <= 0 ? images.length - 1 : prevIndex - 1
//         );
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex >= images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

   

//   return (
    
//     <AppBar position='static' sx={{backgroundColor:'white'}}>
        
//         <Toolbar sx={{height:'100px', backgroundColor:'black'}}>
//             <Typography>Lasvegas®</Typography>
//             <Box sx={{mx:'auto', display:'flex'}}>
//                 <Typography sx={{ mr:1, fontWeight:'bold','&:hover':{textDecoration:'underline'}}}>Hotels & Casinos</Typography>
//                 <Typography sx={{ mr:1 , fontWeight:'bold','&:hover':{textDecoration:'underline'}}}>Shows</Typography>
//                 <Typography sx={{ mr:1, fontWeight:'bold','&:hover':{textDecoration:'underline'}}}>Restaurants</Typography>
//                 <Typography sx={{ mr:1, fontWeight:'bold','&:hover':{textDecoration:'underline'}}}>Things to Do</Typography>
//                 <Typography sx={{ mr:1, fontWeight:'bold','&:hover':{textDecoration:'underline'}}}>Weddings</Typography>
//                 <Typography sx={{ mr:1, fontWeight:'bold','&:hover':{textDecoration:'underline'}}}>Sports</Typography>
//             </Box>

//            <Button endIcon={<ExpandMoreIcon />}
//                 onClick={handleClick}
//                 sx={{ display: 'flex', alignItems: 'center', color:'white' }}>
//              <LanguageIcon sx={{fontSize:15}}/>
//              <Typography>English</Typography>
//            </Button>
//            <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//                         >
//                 <MenuItem onClick={handleClose}>Spanish</MenuItem>
//                 <MenuItem onClick={handleClose}>French</MenuItem>
//                 <MenuItem onClick={handleClose}>German</MenuItem>
//                 <MenuItem onClick={handleClose}>Chinese</MenuItem>
//             </Menu>
//            <Button sx={{color:'white'}}>
//              <ManageSearchIcon sx={{fontSize:40}}/>
//              <Typography variant='body1'  >Menu</Typography>
//            </Button>
//         </Toolbar>
      

// <Box sx={{ display: 'flex', width: '100%', height: '500px',backgroundColor:'white' }}> {/* Adjust height as needed */}
            
//             <Box
//                 sx={{
//                     width: '50%',
//                     height: '100%',
//                     background: 'url(/assets/img1.avif) center/cover no-repeat',
//                     mr:1,
                    
//                 }}
//             />
            
            
//             <Box sx={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                
//                 <Box
//                     sx={{
//                         height: '50%',
//                         background: 'url(/assets/img2.avif) center/cover no-repeat',
//                         mb:3
//                     }}
//                 />
//                 <Typography sx={{color:'grey', textAlign:'left'}}>Nov. 21-23, 2024</Typography>
//                 <Typography variant='h5' sx={{textAlign:'left',color:'black'}}>Formula 1® Returns To Las Vegas</Typography>
//                 <Box sx={{ height: '50%', display: 'flex' }}>
//                     <Box
//                         sx={{
//                             width: '50%',
//                             background: 'url(/assets/img3.avif) center/cover no-repeat',
//                             mr:1
//                         }}
                        
//                     />
                    
                    
//                     <Box
//                         sx={{
//                             width: '50%',
//                             background: 'url(/assets/img4.avif) center/cover no-repeat',
//                         }}
//                     />
                    
//                 </Box>
                
                
                
                
//             </Box>
           
//         </Box>

// <Box sx={{width:'100%',height:'1000',display:'flex',backgroundColor:'white'}}>
//         <Box sx={{width:'40%', height:300,backgroundColor:'white',position:'absolute',top:500}}>
//         <Typography sx={{color:'grey',textAlign:'left',mt:3,ml:3}}>- Art & Culture</Typography>
//         <Typography variant='h4' sx={{color:'black',fontSize:{xl:40,lg:40,md:30,sm:20,xs:20},textAlign:'left',mt:3,ml:3}}>Celebrate Hispanic Heritage Month</Typography>
        
//         </Box>
        
//        <Box sx={{ml:85,width:'20%', height:80,backgroundColor:'white',position:'absolute',top:570,display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>
//           <Typography sx={{color:'grey',textAlign:'left',mt:3}}>Things to Do</Typography> 
//        </Box>
//        <Typography variant='h6' sx={{ml:85,mt:8,maxWidth:280,backgroundColor:'white',color:'black',display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>5 Sportsbooks to Check Out this Season</Typography>
       

//        <Box sx={{ml:127,width:'20%', height:80,backgroundColor:'white',position:'absolute',top:570,display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>
//           <Typography sx={{color:'grey',textAlign:'left',mt:3}}>Things to Do</Typography>
          
//        </Box>
//        <Typography variant='h6' sx={{mt:8,ml:8,backgroundColor:'white',color:'black',display:{xl:'flex',lg:'flex',md:'flex',xs:'none',sm:'none'}}}>Guide to the Best Pools</Typography>
// </Box>
// {/* <Box sx={{width:'100%',backgroundColor:'white'}}>
// <Box sx={{width:'30%',height:80,backgroundColor:'black', mt:10}}>
//             <Typography  sx={{fontSize:30,pt:3}}>Plan Your Las Vegas Trip</Typography>
//  </Box>
//  </Box> */}

// <Box sx={{ width: '100%', backgroundColor: 'white' }}>
//   <Box
//     sx={{
//       width: { xs: '100%', sm: '80%', md: '50%', lg: '40%', xl: '30%' }, // Adjust width based on screen size
//       height: { xs: 60, sm: 70, md: 80 }, // Height can be reduced for smaller screens
//       backgroundColor: 'black',
//       mt: { xs: 25, sm: 25, md: 13 }, // Adjust margin-top for different sizes
//       display: 'flex', 
//       justifyContent: 'center', // Centers content horizontally
//       alignItems: 'center', // Centers content vertically
//     }}
//   >
//     <Typography
//       sx={{
//         fontSize: { xs: 18, sm: 24, md: 30 }, // Adjust font size for different screen sizes
//         pt: { xs: 2, sm: 2.5, md: 3 }, // Adjust padding-top for different sizes
//         textAlign: 'center', // Center text
//         color: 'white', // Make text white for contrast with black background
//       }}
//     >
//       Plan Your Las Vegas Trip
//     </Typography>
//   </Box>
// </Box>




//  {/* <Box sx={{ mt: 8, backgroundColor: 'white',    alignItems:'center' }}>
//     <Button startIcon={<MapsUgcOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>WHAT'S NEW</Button>
//     <Button startIcon={<LocalOfferOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>HOTEL DEALS</Button>
//     <Button startIcon={<ChurchOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>WEDDINGS</Button>
//     <Button startIcon={<AirportShuttleOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>GETTING AROUND</Button>
//     <Button startIcon={<EscalatorWarningIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>KID-FRIENDLY</Button>
//     <Button startIcon={<DownhillSkiingOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>DOWNTOWN</Button>
//     <Button startIcon={<LandscapeOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>OUTDOORS</Button>
   
// </Box>  */}


// <Box sx={{ 
//     mt: 8, 
//     backgroundColor: 'white', 
//     alignItems: 'center', 
//     overflowX: { xs: 'auto', sm: 'auto', md: 'hidden' }, 
//     display: { xs: 'flex', sm: 'flex', md: 'block' }, 
//     whiteSpace: 'nowrap' 
// }}>
//     <Button startIcon={<MapsUgcOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         WHAT'S NEW
//     </Button>
//     <Button startIcon={<LocalOfferOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         HOTEL DEALS
//     </Button>
//     <Button startIcon={<ChurchOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         WEDDINGS
//     </Button>
//     <Button startIcon={<AirportShuttleOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         GETTING AROUND
//     </Button>
//     <Button startIcon={<EscalatorWarningIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         KID-FRIENDLY
//     </Button>
//     <Button startIcon={<DownhillSkiingOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         DOWNTOWN
//     </Button>
//     <Button startIcon={<LandscapeOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         OUTDOORS
//     </Button>
// </Box>



// <Box sx={{ width: '70%', margin: '0 auto',mt:7, position: 'relative' }}>
//             <IconButton
//                 onClick={handlePrev}
//                 sx={{
//                     position: 'absolute',
//                     left: 0,
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                     '&:hover': {
//                         backgroundColor: 'lightgray',
//                     }
//                 }}
//             >
//                 <ChevronLeftIcon />
//             </IconButton>

//             <Box sx={{ display: 'flex', overflow: 'hidden' }}>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         transition: 'transform 0.5s ease',
//                         transform: `translateX(-${currentIndex * (100 / 3)}%)`,
//                         width: `${images.length * (100 / 3)}%`,
//                     }}
//                 >
//                     {images.map((src, index) => (
//                         <Box key={index} sx={{ flex: '1 0 33.333%', padding: '10px' }}>
//                             <img
//                                 src={src}
//                                 alt={`slide-${index}`}
//                                 style={{
//                                     width: '100%',
//                                     height: 'auto',
//                                     borderRadius: '8px',
//                                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
//                                 }}
//                             />
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>

//             <IconButton
//                 onClick={handleNext}
//                 sx={{
//                     position: 'absolute',
//                     right: 0,
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                     '&:hover': {
//                         backgroundColor: 'lightgray',
//                     }
//                 }}
//             >
//                 <ChevronRightIcon />
//             </IconButton>
//         </Box>

//         {/* <Box sx={{backgroundColor:'black',color:'white',width:'30%',height:80,mt:7}}>
//             <Typography variant='h5' sx={{pt:3}}>What We're Loving This Week</Typography>
//         </Box> */}
      
//       <Box sx={{ width: '100%', backgroundColor: 'white' }}>
//   <Box
//     sx={{
//       width: { xs: '100%', sm: '80%', md: '50%', lg: '40%', xl: '30%' }, // Adjust width based on screen size
//       height: { xs: 60, sm: 70, md: 80 }, // Height can be reduced for smaller screens
//       backgroundColor: 'black',
//       mt: { xs: 7, sm: 9, md: 13 }, // Adjust margin-top for different sizes
//       display: 'flex', 
//       justifyContent: 'center', // Centers content horizontally
//       alignItems: 'center', // Centers content vertically
//     }}
//   >
//     <Typography
//       sx={{
//         fontSize: { xs: 18, sm: 24, md: 30 }, // Adjust font size for different screen sizes
//         pt: { xs: 2, sm: 2.5, md: 3 }, // Adjust padding-top for different sizes
//         textAlign: 'center', // Center text
//         color: 'white', // Make text white for contrast with black background
//       }}
//     >
//       What We're Loving This Week
//     </Typography>
//   </Box>
// </Box>





//         <Box sx={{width:'68%',height:300,backgroundColor:'white',mt:7,ml:3,display:'flex'}}>
//              <Box sx={{width:'36%',height:'100%',backgroundColor:'black'}}>
//                 <Typography variant='h5' sx={{color:'white',pt:5,pl:3,display:'flex',fontWeight:'bold',fontSize:{md:'20px',sm:'15px',xs:'13px'}}}>Art & Culture</Typography>
//                 <Typography variant='h5' sx={{color:'white',pt:5,pl:3,display:'flex',fontWeight:'bold',textAlign:'left',fontSize:{md:'20px',sm:'15px',xs:'13px'}}}>Experience Mexican Independence Day in Las Vegas</Typography>
//                <Button sx={{display:'flex',mt:5,ml:2,color:'white',fontSize:{md:'20px',sm:'15px',xs:'13px'}}} startIcon={<AddCircleOutlineOutlinedIcon/>}>
//                   CLICK TO ADD MORE
//                </Button>
//              </Box>

//              <Box sx={{ height: '100%', width: '64%' }}>
//                 <img
//                 src='/assets/cimg1.avif'
//                 alt='abc'
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//             </Box>
            
//         </Box>
//         <Box sx={{mt:3,backgroundColor:'white',height:310,width:'68%',ml:3,display:'flex',justifyContent:'space-evenly'}}>
//             <Box sx={{width:'35%',height:'70%',pl:2}}>
//                 <img
//                 src='/assets/dimg1.avif'
//                 alt='d1'
//                 style={{ width: '100%', height: '100%' }}
//                 />
//             </Box>

//             <Box sx={{width:'35%',height:'70%',pl:4}}>
//                 <img
//                 src='/assets/dimg2.avif'
//                 alt='d2'
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//             </Box>

//             <Box sx={{width:'35%',height:'70%',pl:4}}>
//                 <img
//                 src='/assets/dimg3.avif'
//                 alt='d3'
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//             </Box> 
//         </Box>





//         <Box sx={{width:'12%',height:50,backgroundColor:'white',position:'relative',top:-130,ml:5}}>
//              <Typography sx={{color:'grey',mt:1}}>ENTERTAINMENT</Typography>
//              <Typography sx={{color:'black',fontWeight:'bold',width:'150%',ml:1,textAlign:'left',mt:1}}>Dive Into Fun: A Guide to Vegas’ Hottest Pool Parties</Typography>
//         </Box>
        
//         <Box sx={{width:'5%',height:50,backgroundColor:'white',position:'relative',top:-180,ml:43.7}}>
//              <Typography sx={{color:'grey',mt:1}}>PLAN</Typography>
//              <Typography sx={{color:'black',fontWeight:'bold',width:'320%',ml:1,textAlign:'left',mt:1}}>How to Visit Las Vegas on a Budget</Typography>
//         </Box>
//         <Box sx={{width:'12%',height:50,backgroundColor:'white',position:'relative',top:-220,ml:82.7}}>
//              <Typography sx={{color:'grey',mt:1}}>THINGS TO DO</Typography>
//              <Typography sx={{color:'black',fontWeight:'bold',width:'150%',ml:1,textAlign:'left',mt:1}}>Celebrate Your Pride Year-Round at Las Vegas’ Best Gay Bars</Typography>
//         </Box>

//         <Box sx={{border:'1px solid grey', width: '26%', height: 620, backgroundColor: 'white', position: 'absolute', top: '285%', right: 0, mt: 7, mr: 3 }}>
//         <Typography variant='h5' sx={{ color: 'black', fontWeight: 'bold', p: 2 ,backgroundColor:'lightgray'}}>WHAT'S TRENDING</Typography>
       
//         <Box sx={{display:'flex'}}>
//         <Typography sx={{color: 'black', fontWeight: 'bold',mt:1,textAlign:'left',p:2,fontSize:25}}>1</Typography>
//         <Typography variant='h6' sx={{color:'gray',mt:2,textAlign:'left',p:2,ml:{xl:-1,lg:-1,md:-1,sm:-2,xs:-2},fontSize:{md:'15px',sm:'15px',xs:'13px',lg:15,xl:15}}}>SPORTS</Typography>
//         </Box>
//        <Box sx={{ width: '100%'}}>
//         <Typography variant='body1' sx={{width:'70%',color:'black',mt:-4,textAlign:'left',p:2,fontWeight:'bold',ml:{lg:4.5,xl:4.5,md:3.5,sm:2,xs:2},fontSize:{md:'16px',sm:'15px',xs:'13px',lg:15,xl:15}}}>How to Tackle Football Season in Vegas</Typography>
//        </Box>
//        <Divider sx={{ borderColor: 'lightgray.500', my: 2,width:'90%',mx:'auto',mt:1 }} />





//        <Box sx={{display:'flex'}}>
//         <Typography sx={{color: 'black', fontWeight: 'bold',mt:-1,textAlign:'left',p:2,fontSize:{md:'20px',sm:'15px',xs:'13px',lg:13,xl:15}}}>2</Typography>
//         <Typography variant='h6' sx={{color:'gray',mt:-0.5,textAlign:'left',p:2,ml:{xl:-1,lg:-1,md:-1,sm:-2,xs:-2},fontSize:{md:'15px',sm:'15px',xs:'13px',lg:15,xl:15}}}>WEDDINGS</Typography>
//         </Box>
//        <Box sx={{ width: '100%'}}>
//         <Typography variant='body1' sx={{width:'70%',color:'black',mt:-4,textAlign:'left',p:2,ml:{lg:4.5,xl:4.5,md:3.5,sm:2,xs:2},fontSize:{md:'16px',sm:'15px',xs:'13px',lg:15,xl:15},fontWeight:'bold'}}>Falling in Love: How to Plan the Perfect Fall Wedding in Las Vegas</Typography>
//        </Box>
//        <Divider sx={{ borderColor: 'lightgray.500', my: 2,width:'90%',mx:'auto',mt:1 }} />








//        <Box sx={{display:'flex'}}>
//         <Typography sx={{color: 'black', fontWeight: 'bold',mt:-1,textAlign:'left',p:2,fontSize:25}}>3</Typography>
//         <Typography variant='h6' sx={{color:'gray',mt:-0.5,textAlign:'left',p:2,ml:{xl:-1,lg:-1,md:-1,sm:-2,xs:-2},fontSize:{md:'15px',sm:'15px',xs:'13px',lg:15,xl:15}}}>INSPIRATION</Typography>
//         </Box>
//        <Box sx={{ width: '100%'}}>
//         <Typography variant='body1' sx={{width:'70%',color:'black',mt:-5,textAlign:'left',p:2,ml:{lg:4.5,xl:4.5,md:3.5,sm:2,xs:2},fontSize:{md:'16px',sm:'15px',xs:'13px',lg:15,xl:15},fontWeight:'bold'}}>20 Ways to Celebrate Your Birthday in Vegas</Typography>
//        </Box>
//        <Divider sx={{ borderColor: 'lightgray.500', my: 2,width:'90%',mx:'auto',mt:1 }} />







//        <Box sx={{display:'flex'}}>
//         <Typography sx={{color: 'black', fontWeight: 'bold',mt:-1,textAlign:'left',p:2,fontSize:25}}>4</Typography>
//         <Typography variant='h6' sx={{color:'gray',mt:-0.5,textAlign:'left',p:2,ml:{xl:-1,lg:-1,md:-1,sm:-2,xs:-2},fontSize:{md:'15px',sm:'15px',xs:'13px',lg:15,xl:15}}}>THINGS TO DO</Typography>
//         </Box>
//        <Box sx={{ width: '100%'}}>
//         <Typography variant='body1' sx={{width:'70%',color:'black',mt:-5,textAlign:'left',p:2,ml:{lg:4.5,xl:4.5,md:3.5,sm:2,xs:2},fontSize:{md:'16px',sm:'15px',xs:'13px',lg:15,xl:15},fontWeight:'bold'}}>12 Things to Do in Downtown Las Vegas</Typography>
//        </Box>
       


//     </Box>



//     <Box
//     sx={{
//       width: { xs: '100%', sm: '80%', md: '70%', lg: '60%', xl: '40%' }, // Adjust width based on screen size
//       height: { xs: 60, sm: 70, md: 80 }, // Height can be reduced for smaller screens
//       backgroundColor: 'black',
//       mt: { xs: 5, sm: 7, md: 7 }, // Adjust margin-top for different sizes
//       display: 'flex', 
//       justifyContent: 'center', // Centers content horizontally
//       alignItems: 'center', // Centers content vertically
//     }}
//   >
//     <Typography
//       sx={{
//         fontSize: { xs: 18, sm: 24, md: 30 }, // Adjust font size for different screen sizes
//         pt: { xs: 2, sm: 2.5, md: 3 }, // Adjust padding-top for different sizes
//         textAlign: 'center', // Center text
//         color: 'white', // Make text white for contrast with black background
//       }}
//     >
//       ENTERTAINMENT CAPITAL OF THE WORLD
//     </Typography>
//   </Box>

//       {/* <Box sx={{ mt: 8, backgroundColor: 'white',    alignItems:'center' }}>
//       <Button startIcon={<MusicVideoOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>CONCERTS</Button>
//       <Button startIcon={<TheaterComedyOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>SHOWS</Button>
//       <Button startIcon={<HighlightOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>COMEDY</Button>
//       <Button startIcon={<LiquorOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>NIGHTLIFE</Button>
//       <Button startIcon={<AutoFixHighOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>MAGIC</Button>
//       <Button startIcon={<SearchOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>VIEW ALL</Button>

//       </Box> */}



// <Box sx={{ mt: 8, backgroundColor: 'white', alignItems: 'center', overflowX: { xs: 'auto', sm: 'auto' }, whiteSpace: 'nowrap' }}>
//     <Box sx={{ display: 'inline-flex', flexDirection: { xs: 'row', sm: 'row' }, alignItems: 'center' }}>
//         <Button startIcon={<MusicVideoOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>CONCERTS</Button>

//         <Button startIcon={<TheaterComedyOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>SHOWS</Button>

//         <Button startIcon={<HighlightOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>COMEDY</Button>

//         <Button startIcon={<LiquorOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>NIGHTLIFE</Button>

//         <Button startIcon={<AutoFixHighOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>MAGIC</Button>

//         <Button startIcon={<SearchOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>VIEW ALL</Button>
//     </Box>
// </Box>


//       {/* <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
//       <Box sx={{ display: 'flex', overflow: 'hidden' }}>
//         <Box
//           sx={{
//             display: 'flex',
//             transition: 'transform 0.5s ease',
//             transform: `translateX(-${currentIndex * (100 / 3)}%)`,
//             width: `600%`,
//           }}
//         >
          
         
//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg1.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Eagles</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Sphere Entertainment Co</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>
          



//         <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg2.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,ml:-4}}>iHeart Radio Musical Festival</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>T-Mobile Arena</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>


//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg3.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,ml:5,textAlign:'left'}}>Marshmello</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Encore Beach Pool</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>
          


        
//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg4.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Life is Beautiful Presents: A Big Beautiful Block Party</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Plaza Hotel & Casino</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box> */}



// <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
//     <Box sx={{ display: 'flex', overflow: 'hidden' }}>
//         <Box
//             sx={{
//                 display: 'flex',
//                 transition: 'transform 0.5s ease',
//                 transform: `translateX(-${currentIndex * (100 / 3)}%)`,
//                 width: `400%`, // Adjust width based on the number of items
//             }}
//         >

//             {/* First Item */}
//             <Box sx={{
//                 mr: 2,
//                 flex: '1 0 100%', // Take full width on xs
//                 md: { flex: '1 0 33.333%' }, // 3 items in md
//                 backgroundColor: 'white',
//                 border: '1px solid black',
//                 mt: 9,
//             }}>
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg1.avif"
//                         alt="slide-1"
//                         style={{
//                             width: '100%',
//                             height: '400px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                     <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'black', mt: 2, textAlign: 'left', ml: 1, fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>Eagles</Typography>
//                         <Typography sx={{ color: 'black', mt: 1, textAlign: 'left', ml: 1, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>Sphere Entertainment Co</Typography>

//                         <Button variant='outlined' sx={{
//                             fontWeight: 'bold', color: 'black', border: '2px solid black', textAlign: 'left', mt: 2, ml: -1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Responsive button size
//                             '&:hover': { backgroundColor: 'black', color: 'white' }
//                         }}>LEARN MORE</Button>
//                         <Button endIcon={<RemoveRedEyeIcon />} sx={{
//                             fontWeight: 'bold', color: 'gray', borderColor: 'black', textAlign: 'right', mt: 2, ml: 1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Responsive button size
//                             '&:hover': { color: 'black' }
//                         }}>QUICK VIEW</Button>
//                     </Box>
//                 </Box>
//             </Box>

//             {/* Second Item */}
//             <Box sx={{
//                 mr: 2,
//                 flex: '1 0 100%', // Take full width on xs
//                 md: { flex: '1 0 33.333%' }, // 3 items in md
//                 backgroundColor: 'white',
//                 border: '1px solid black',
//                 mt: 9,
//             }}>
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg2.avif"
//                         alt="slide-2"
//                         style={{
//                             width: '100%',
//                             height: '400px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                     <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'black', mt: 2, ml: 1, textAlign: 'left', fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>iHeart Radio Musical Festival</Typography>
//                         <Typography sx={{ color: 'black', mt: 1, textAlign: 'left', ml: 1, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>T-Mobile Arena</Typography>

//                         <Button variant='outlined' sx={{
//                             fontWeight: 'bold', color: 'black', border: '2px solid black', textAlign: 'left', mt: 2, ml: -1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' },
//                             '&:hover': { backgroundColor: 'black', color: 'white' }
//                         }}>LEARN MORE</Button>
//                         <Button endIcon={<RemoveRedEyeIcon />} sx={{
//                             fontWeight: 'bold', color: 'gray', borderColor: 'black', textAlign: 'right', mt: 2, ml: 1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' },
//                             '&:hover': { color: 'black' }
//                         }}>QUICK VIEW</Button>
//                     </Box>
//                 </Box>
//             </Box>

//             {/* Third Item */}
//             <Box sx={{
//                 mr: 2,
//                 flex: '1 0 100%', // Take full width on xs
//                 md: { flex: '1 0 33.333%' }, // 3 items in md
//                 backgroundColor: 'white',
//                 border: '1px solid black',
//                 mt: 9,
//             }}>
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg3.avif"
//                         alt="slide-3"
//                         style={{
//                             width: '100%',
//                             height: '400px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                     <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'black', mt: 2, ml: 1, textAlign: 'left', fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>Marshmello</Typography>
//                         <Typography sx={{ color: 'black', mt: 1, textAlign: 'left', ml: 1, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>Encore Beach Pool</Typography>

//                         <Button variant='outlined' sx={{
//                             fontWeight: 'bold', color: 'black', border: '2px solid black', textAlign: 'left', mt: 2, ml: -1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' },
//                             '&:hover': { backgroundColor: 'black', color: 'white' }
//                         }}>LEARN MORE</Button>
//                         <Button endIcon={<RemoveRedEyeIcon />} sx={{
//                             fontWeight: 'bold', color: 'gray', borderColor: 'black', textAlign: 'right', mt: 2, ml: 1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' },
//                             '&:hover': { color: 'black' }
//                         }}>QUICK VIEW</Button>
//                     </Box>
//                 </Box>
//             </Box>

//             {/* Fourth Item */}
//             <Box sx={{
//                 mr: 2,
//                 flex: '1 0 100%', // Take full width on xs
//                 md: { flex: '1 0 33.333%' }, // 3 items in md
//                 backgroundColor: 'white',
//                 border: '1px solid black',
//                 mt: 9,
//             }}>
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg4.avif"
//                         alt="slide-4"
//                         style={{
//                             width: '100%',
//                             height: '400px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                     <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'black', mt: 2, ml: 1, textAlign: 'left', fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>Life is Beautiful Presents: A Big Beautiful Block Party</Typography>
//                         <Typography sx={{ color: 'black', mt: 1, textAlign: 'left', ml: 1, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>Plaza Hotel & Casino</Typography>

//                         <Button variant='outlined' sx={{
//                             fontWeight: 'bold', color: 'black', border: '2px solid black', textAlign: 'left', mt: 2, ml: -1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' },
//                             '&:hover': { backgroundColor: 'black', color: 'white' }
//                         }}>LEARN MORE</Button>
//                         <Button endIcon={<RemoveRedEyeIcon />} sx={{
//                             fontWeight: 'bold', color: 'gray', borderColor: 'black', textAlign: 'right', mt: 2, ml: 1,
//                             fontSize: { xs: '10px', sm: '12px', md: '14px' },
//                             '&:hover': { color: 'black' }
//                         }}>QUICK VIEW</Button>
//                     </Box>
//                 </Box>
//             </Box>

      




//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg5.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Maroon 5</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Park MGM Las Vegas</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>






//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg6.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Smashing Pumpkins</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Fontainebleau Las Vegas</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>




//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg7.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Wu-Tang Clan: The Saga Continues Residency</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>MGM Grand Hotel & Casino</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg8.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Nicki Minaj Presents: Pink Friday 2 World Tour</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>MGM Grand Hotel & Casino</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg9.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Tom Jones: Ages & Stages Tour</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Encore at Wynn Las Vegas</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg10.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Love & Laughter With Tony Braxton and Cedric The Entertainer</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>The Cosmopolitan of Las Vegas</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg11.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>When We Were Young Festival</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Las Vegas Festival Grounds</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg12.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Weekends With Adele</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Ceasers Palace</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg13.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Las Vegas Raiders vs Kansas City Chiefs</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Allegiant Stadium</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg14.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Grand Prix Plaza</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg15.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Shania Twain: Come On Over -The Las Vegas Residency- All The Hits!</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Planet Hollywood Resort & Casino</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg16.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Bruno Mars</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Park MGM Las Vegas</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>




//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg17.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Mariah Carey: The Celebration Of Mimi Live in Las Vegas</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Park MGM Las Vegas</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg18.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                 <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Jerry Seinfeld</Typography>
//                 <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Ceasers Palace</Typography>
                
//                 <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white','&:hover':{backgroundColor:'black',color:'white'}}}}>LEARN MORE</Button>
//                 <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
//             </Box>
//           </Box>
//           </Box>





          
          
//         </Box>
//       </Box>

//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: 'absolute',
//           left: 0,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           zIndex: 1,
//           backgroundColor: 'white',
//           '&:hover': {
//             backgroundColor: 'lightgray',
//           },
//         }}
//       >
//         <ChevronLeftIcon />
//       </IconButton>

//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: 'absolute',
//           right: 0,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           zIndex: 1,
//           backgroundColor: 'white',
//           '&:hover': {
//             backgroundColor: 'lightgray',
//           },
//         }}
//       >
//         <ChevronRightIcon />
//       </IconButton>
//     </Box>

//     {/* <Typography variant='h4' sx={{textAlign:'center', color:'black',mt:8}}>
//         <Box component="span" fontWeight="bold">THE GREATEST ARENA </Box>
//         <Box component="span" fontWeight="normal">ON EARTH™</Box>
//     </Typography>

   
//     <Box sx={{height:'250px',width:'65%',backgroundColor:'#eeeeee',mt:3,display:'flex'}}>
        
//     </Box>
//   <Box sx={{display:'flex'}}>
//     <Box sx={{width:'20%',height:'180px',backgroundColor:'white',border:'1px solid black',m:4,mt:-27}}>
//       <Box sx={{textAlign:'center',width:'18%',height:'45px',backgroundColor:'black',color:'white',ml:'-1'}}>OCT 15</Box>
//            <Typography  sx={{mt:-3,color:'gray',fontWeight:'bold',fontSize:'14px'}}>BASKETBALL</Typography>
//            <Typography sx={{maxWidth:'60%',mt:1,color:'black',fontWeight:'bold',fontSize:'16px',textAlign:'left',ml:5}}>Los Angeles Lakers vs. Golden State Warriors</Typography>
//            <Typography sx={{mt:3,color:'black',fontSize:'15px',textAlign:'left',ml:5}}>T-Mobile Arena</Typography>
//     </Box>
//     <Box sx={{width:'20%',height:'180px',backgroundColor:'white',border:'1px solid black',m:4,mt:-27}}>
//       <Box sx={{textAlign:'center',width:'18%',height:'45px',backgroundColor:'black',color:'white',ml:'-1'}}>OCT 27</Box>
//            <Typography  sx={{mt:-3,color:'gray',fontWeight:'bold',fontSize:'14px'}}>SPORTS</Typography>
//            <Typography sx={{maxWidth:'65%',mt:1,color:'black',fontWeight:'bold',fontSize:'16px',textAlign:'left',ml:5}}>Las Vegas Raiders vs Kansas City Chiefs</Typography>
//            <Typography sx={{mt:3,color:'black',fontSize:'15px',textAlign:'left',ml:5}}>Allegiant Stadium</Typography>
//     </Box>
//     <Box sx={{width:'20%',height:'180px',backgroundColor:'white',border:'1px solid black',m:4,mt:-27}}>
//       <Box sx={{textAlign:'center',width:'18%',height:'45px',backgroundColor:'black',color:'white',ml:'-1'}}>NOV 23</Box>
//            <Typography  sx={{mt:-3,color:'gray',fontWeight:'bold',fontSize:'14px'}}>SPORTS</Typography>
//            <Typography sx={{maxWidth:'70%',mt:1,color:'black',fontWeight:'bold',fontSize:'16px',textAlign:'left',ml:5}}>FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024</Typography>
//            <Typography sx={{mt:3,color:'black',fontSize:'15px',textAlign:'left',ml:5}}>Grand Prix Plaza</Typography>
//     </Box>
//     <Box sx={{width:'20%',height:'180px',backgroundColor:'white',border:'1px solid black',m:4,mt:-27}}>
//       <Box sx={{maxWidth:'15%',textAlign:'center',width:'18%',height:'45px',backgroundColor:'black',color:'white',ml:'-1'}}>DEC 5</Box>
//            <Typography  sx={{mt:-3,color:'gray',fontWeight:'bold',fontSize:'14px'}}>SPORTS</Typography>
//            <Typography sx={{maxWidth:'60%',mt:1,color:'black',fontWeight:'bold',fontSize:'16px',textAlign:'left',ml:5}}>2024 WRANGLER NATIONAL FINALS RODEO (NFR)</Typography>
//            <Typography sx={{mt:3,color:'black',fontSize:'15px',textAlign:'left',ml:5}}>Thomas & Mack Center</Typography>
//     </Box>
   
//   </Box> 

//   <Box sx={{mx:'auto'}}> 
//     <Button variant='outlined' sx={{color:'black',backgroundColor:'white',border:'2px solid black',mt:4,fontWeight:'bold',width:'110%','&:hover':{background:'black',color:'white'}}}>VIEW ALL SPORTS EVENTS & GAMES</Button>
//   </Box> */}


// <Box sx={{ textAlign: 'center', p: 3 }}>
//       {/* Responsive Heading */}
//       <Typography
       
//         sx={{ textAlign: 'center', color: 'black', mt: 8, fontSize:{ xs: 'h5', sm: 'h4', md: 'h3', lg: 'h4', xl: 'h3' } }}
//       >
//         <Box component="span" fontWeight="bold">THE GREATEST ARENA </Box>
//         <Box component="span" fontWeight="normal">ON EARTH™</Box>
//       </Typography>

//       {/* Grey Background Box */}
//       <Box
//         sx={{
//           width: { xs: '80%', sm: '70%', md: '70%', lg: '65%', xl: '65%' },
//           height: { xs: '250px', sm: '250px', md: '250px', lg: '250px', xl: '250px' },
//           backgroundColor: '#eeeeee',
//           mt: 3,
          
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       ></Box>

//       {/* Event Boxes */}
//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: {
//             xs: '1fr 1fr',         // Single column on extra small screens
//             sm: '1fr 1fr',     // Two columns on small and medium screens
//             md: '1fr 1fr',     // Two columns on medium screens
//             lg: '1fr 1fr 1fr 1fr', // Four columns on large and extra-large screens
//           },
//           gap: 4,
//           mx: 'auto',
//           mt: -15,
//         }}
//       >
//         {/* Event Box 1 */}
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             OCT 15
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>BASKETBALL</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Los Angeles Lakers vs. Golden State Warriors</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>T-Mobile Arena</Typography>
//         </Box>

//         {/* Event Box 2 */}
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             OCT 27
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Las Vegas Raiders vs Kansas City Chiefs</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Allegiant Stadium</Typography>
//         </Box>

//         {/* Event Box 3 */}
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             NOV 23
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Grand Prix Plaza</Typography>
//         </Box>

//         {/* Event Box 4 */}
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             DEC 5
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>2024 WRANGLER NATIONAL FINALS RODEO (NFR)</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Thomas & Mack Center</Typography>
//         </Box>
//       </Box>

//       {/* View All Button */}
//       <Box sx={{ textAlign: 'center', mt: 4 }}>
//         <Button
//           variant="outlined"
//           sx={{
//             color: 'black',
//             backgroundColor: 'white',
//             border: '2px solid black',
//             fontWeight: 'bold',
//             width: { xs: '70%', sm: '60%', md: '40%', lg: '35%', xl: '35%' },  // Responsive button width
//             '&:hover': { background: 'black', color: 'white' },
//           }}
//         >
//           VIEW ALL SPORTS EVENTS & GAMES
//         </Button>
//       </Box>
//     </Box>

  

// {/* <Box sx={{width:'100%',display:'flex',mt:15}}>
  
//   <Box sx={{width:'25%',height:'20px'}}>
//     <img
//     src='/assets/fimg1.avif'
//     alt='1'
    
//     />
//   </Box>



  
//   <Stack spacing={4} sx={{mt:-2,ml:19,height:810,mr:0}}>
//     <Box sx={{width:837,height:750}}>
//      <ImageList variant='masonry' cols={5} gap={4}>
//         {
//           itemData.map(item=>(
//             <ImageListItem key={item.img}>
//                 <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
//             </ImageListItem>
//           ))
//         }
//      </ImageList>
//     </Box> 
//   </Stack>


  
  

  

// </Box> 

// <Box sx={{width:'37%',height:'65px',backgroundColor:'#f50057',mt:-100}}>
//   <Typography variant='h5' sx={{textAlign:'center', color:'white',mt:2}}>
//         <Box component="span" fontWeight="bold">SHARE YOUR </Box>
//         <Box component="span" fontWeight="normal">VEGAS EXPERIENCE</Box>
//     </Typography>
//   </Box> */}






// <Box sx={{ height:'80px',width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 15, position: 'relative' }}>
  
//   <Box sx={{ width: { xs: '100%', md: '40%' }, height: 'auto', position: 'relative' }}>
//     <img src='/assets/fimg1.avif' alt='1' style={{ width: '100%', height: 'auto' }} />

    
//     <Box
//       sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '65px',
//         backgroundColor: '#f50057',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 1,
//       }}
//     >
//       <Typography variant='h5' sx={{ textAlign: 'center', color: 'white' }}>
//         <Box component="span" fontWeight="bold">SHARE YOUR </Box>
//         <Box component="span" fontWeight="normal">VEGAS EXPERIENCE</Box>
//       </Typography>
//     </Box>
//   </Box>

  
//   <Stack
//     spacing={4}
//     sx={{
//       mt: { xs: 4, md: 0 }, // Add top margin on small screens
//       ml: { xs: 0, md: 4 }, // Margin left for larger screens
//       height: 'auto',
//       width: { xs: '100%', md: '60%' }, // Full width for small screens, 60% for larger
//     }}
//   >
//      <Box sx={{width:807,height:750}}>
//      <ImageList variant='masonry' cols={5} gap={4}>
//         {
//           itemData.map(item=>(
//             <ImageListItem key={item.img}>
//                 <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
//             </ImageListItem>
//           ))
//         }
//      </ImageList>
//     </Box> 
//   </Stack>
// </Box>


  

//   <Box sx={{display:'flex',backgroundColor:'white',width:'100%',height:'250px',mt:94}}>
//       <Box sx={{width:'25%',height:'auto'}}>
//       <Button variant='contained' sx={{fontSize:'20px',textAlign:'center', color:'white',mt:12,backgroundColor:'black',height:'80px'}}> 
//         <Box component="span" fontWeight="bold">WHAT HAPPENS </Box>
//         <Box component="span" fontWeight="normal">HERE</Box>
//       </Button>
//       </Box>
//       <Box sx={{backgroundColor:'lightgray',width:'0.2%',height:'150px',mt:5}}></Box>


//       <Box sx={{width:'25%',height:'auto'}}>
//       <Typography  sx={{mt:8,color:'gray',fontWeight:'bold',fontSize:'14px',ml:-15}}>THINGS TO DO</Typography>
//       <Typography sx={{maxWidth:'70%',mt:1,color:'black',fontWeight:'bold',fontSize:'16px',textAlign:'left',ml:5}}>Outdoor Fun In Las Vegas</Typography>
//       </Box>
//       <Box sx={{backgroundColor:'lightgray',width:'0.2%',height:'150px',mt:5}}></Box>


//       <Box sx={{width:'25%',height:'auto'}}>
//       <Typography  sx={{mt:8,color:'gray',fontWeight:'bold',fontSize:'14px',ml:-10}}>FIRST TIME IN VEGAS</Typography>
//       <Typography sx={{maxWidth:'70%',mt:1,color:'black',fontWeight:'bold',fontSize:'16px',textAlign:'left',ml:5}}>Getting Around Vegas</Typography>
//       </Box>
//       <Box sx={{backgroundColor:'lightgray',width:'0.2%',height:'150px',mt:5}}></Box>


//       <Box sx={{width:'25%',height:'auto'}}>
//       <Typography  sx={{mt:8,color:'gray',fontWeight:'bold',fontSize:'14px',ml:-15}}>EAT & DRINK</Typography>
//       <Typography sx={{maxWidth:'60%',mt:1,color:'black',fontWeight:'bold',fontSize:'16px',textAlign:'left',ml:5}}>9 Las Vegas Celebrity Chefs And Their Restaurants</Typography>
//       </Box>
//   </Box>


//   <Box sx={{width:'100%',height:'500px',backgroundColor:'black'}}>
//     <Box sx={{width:'100%',height:'100px',backgroundColor:'#424242',display:'flex',alignItems:'center'}}>
//        <Typography variant='h5' sx={{color:'wihte',textAlign:'left',fontSize:'30px'}}>
//           <Box component={'span'} fontWeight={'bold'} sx={{ml:3,mt:1}}>HOTEL DEALS </Box>
//           <Box component={'span'}  fontWeight={'normal'}>AND VEGAS UPDATES</Box>
//        </Typography>
//        <Button variant='contained' sx={{color:'white',backgroundColor:'#aa00ff',height:'35px',width:'8%',ml:3}}>SIGN UP</Button>
//     </Box>

//     <Box sx={{width:'100%',height:'400px',display:'flex'}}>
//        <Box sx={{width:'33%',hieght:'20%',fontWeight:'bold'}}>
//           <Typography sx={{textAlign:'left',mt:3,ml:2,fontWeight:'bold'}}>LAS VEGAS®</Typography>
//           <Box sx={{textAlign:'left',mt:3,ml:2}}>
//           <Box >3150 Paradise Road</Box>
//           <Box>Las Vegas, NV 89109</Box>
//           <Box>Toll-Free: 877-847-4858</Box>
//         </Box>
//         <Box sx={{textAlign:'right',mr:5,mt:-13,fontWeight:'bold',fontSize:'18px'}}>
//           <Box>WHAT HAPPENS HERE, </Box> 
//           <Box>ONLY HAPPENS HERE™.</Box> 
//         </Box>
//         <Typography sx={{mt:25,textAlign:'left',ml:2,color:'gray',fontSize:'16px'}}>
//           <Box>THE ONLY OFFICIAL WEBSITE OF LAS VEGAS ®</Box>
//           <Box>© 2024 Las Vegas Convention and Visitors Authority. All rights reserved.</Box>
//         </Typography>
//        </Box>
// <Box sx={{width:'33%',hieght:'20%',fontWeight:'bold'}}>
//           <Typography sx={{textAlign:'left',mt:3,ml:2,fontWeight:'bold'}}></Typography>
//           <Box sx={{textAlign:'left',mt:5,ml:2}}>
//           <Box >Privacy Policy </Box>
//           <Box>International Travel Info </Box>
//           <Box>Sitemap</Box>
//         </Box>
//         <Box sx={{textAlign:'left',ml:30,mt:-8,fontWeight:'bold',fontSize:'18px'}}>
//           <Box>VisitLaughlin.com </Box> 
//           <Box>VisitMesquite.com </Box> 
//           <Box>VisitBoulderCity.com</Box> 
//         </Box>
//         <Typography sx={{mt:22,textAlign:'left',ml:2,color:'gray',fontSize:'16px'}}>
//           If you’d like to learn more about responsible gaming, please consult the Nevada Council or call 1-800-522-4700
//         </Typography>
//        </Box>
      

//        <Box sx={{width:'33%',hieght:'20%'}}>
//          <Box
//          component={'img'}
//          src='/assets/gimg1.png'
//          sx={{mt:-15,width:'85%',height:'70%'}}
//          />
//          <Box sx={{width:'87%',height:'65px',backgroundColor:'#f50057',ml:4,position:'relative',mt:-1,justifyContent:'center',display:'flex',alignItems:'center'}}>
//             <Typography variant='h5' sx={{textAlign:'center', color:'white'}}>
//             <Box component="span" fontWeight="bold">Join The Millions </Box>
//             <Box component="span" fontWeight="normal">Who Follow Us</Box>
//             </Typography>
//          </Box>
//          <Typography sx={{mt:3,fontWeight:'bold',fontSize:'19px'}}>FOLLOW US fOR MUST-SEE LAS VEGAS EXPERIENCES</Typography>

//          <Box sx={{display:'flex',mt:3,ml:10}}>
//           <IconButton sx={{backgroundColor:'#f50057',color:'white',mr:1,'&:hover':{backgroundColor:'#f50057'}}}>
//             <FontAwesomeIcon icon={faTiktok} />
//           </IconButton>

//           <IconButton sx={{backgroundColor:'#f50057',color:'white',mr:1,'&:hover':{backgroundColor:'#f50057'}}}>
//             <FontAwesomeIcon icon={faInstagram}/>
//           </IconButton>

//           <IconButton sx={{backgroundColor:'#f50057',color:'white',mr:1,'&:hover':{backgroundColor:'#f50057'}}}>
//             <FontAwesomeIcon icon={faXTwitter}/>
//           </IconButton>

//           <IconButton sx={{backgroundColor:'#f50057',color:'white',mr:1,'&:hover':{backgroundColor:'#f50057'}}}>
//             <FontAwesomeIcon icon={faFacebook}/>
//           </IconButton>

//           <IconButton sx={{backgroundColor:'#f50057',color:'white',mr:1,'&:hover':{backgroundColor:'#f50057'}}}>
//             <FontAwesomeIcon icon={faYoutube}/>
//           </IconButton>

//           <IconButton sx={{backgroundColor:'#f50057',color:'white',mr:1,'&:hover':{backgroundColor:'#f50057'}}}>
//             <FontAwesomeIcon icon={faSnapchatGhost}/>
//           </IconButton>
//        </Box>
       
//        </Box>

      
//     </Box>
//   </Box>


  
      
// </AppBar>
    
//   )
// }
// const itemData=[
//   {
//     img: '/assets/fimg2.jpg',
//     title: '2'
//   },
//   {
//     img: '/assets/fimg3.jpg',
//     title: '3'
//   },
//   {
//     img: '/assets/fimg4.jpg',
//     title: '4'
//   },
//   {
//     img: '/assets/fimg5.jpg',
//     title: '5'
//   },
//   {
//     img: '/assets/fimg6.jpg',
//     title: '6'
//   },
//   {
//     img: '/assets/fimg7.jpg',
//     title: '7'
//   },
//   {
//     img: '/assets/fimg8.jpg',
//     title: '8'
//   },
//   {
//     img: '/assets/fimg9.jpg',
//     title: '9'
//   },
//   {
//     img: '/assets/fimg10.jpg',
//     title: '10'
//   },
//   {
//     img: '/assets/fimg11.jpg',
//     title: '11'
//   },
//   {
//     img: '/assets/fimg12.jpg',
//     title: '12'
//   },
//   {
//     img: '/assets/fimg13.jpg',
//     title: '13'
//   },
//   {
//     img: '/assets/fimg14.jpg',
//     title: '14'
//   },
//   {
//     img: '/assets/fimg15.jpg',
//     title: '15'
//   },
//   {
//     img: '/assets/fimg16.jpg',
//     title: '16'
//   },
//   {
//     img: '/assets/fimg17.jpg',
//     title: '17'
//   },
//   {
//     img: '/assets/fimg18.jpg',
//     title: '18'
//   },
//   {
//     img: '/assets/fimg19.jpg',
//     title: '19'
//   },
//   {
//     img: '/assets/fimg20.jpg',
//     title: '20'
//   },
  
// ]

// export default MuiLasvegas




// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
// import LanguageIcon from '@mui/icons-material/Language';
// import ManageSearchIcon from '@mui/icons-material/ManageSearch'; 
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
// import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
// import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
// import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
// import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
// import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
// import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
// import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
// import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';
// import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
// import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faInstagram, faTiktok, faFacebook, faYoutube, faSnapchatGhost, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { useTheme } from '@mui/material/styles';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTiktok, faInstagram, faTwitter, faFacebook, faYoutube, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

// import Divider from '@mui/material/Divider'; 
// import Stack from '@mui/material/Stack';
// import ImageList from '@mui/material/ImageList'; 
// import ImageListItem from '@mui/material/ImageListItem'; 


// const MuiLasvegas = () => {
//   const [anchorEl, setAnchorEl] = useState(null); 
//   const [activeMenu, setActiveMenu] = useState(null); 
//   const [drawerOpen, setDrawerOpen] = useState(false); 
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
//   const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  

  

//   const toggleDrawer = (open) => () => {
//     if (isMediumScreen) {
      
//       setDrawerOpen(open);
//     }
//   };

//   const handleClick = (event, menuName) => {
//     setAnchorEl(event.currentTarget);
//     setActiveMenu(menuName);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };


//   const images = [
//     '/assets/bimg1.jpg',
//     '/assets/bimg2.jpg',
//     '/assets/bimg3.png',
//     '/assets/bimg4.png',
//     '/assets/bimg5.jpg',
//     '/assets/bimg6.jpg',
//     '/assets/bimg7.jpg',
//     '/assets/bimg8.jpg',
//     '/assets/bimg9.jpg',
//     '/assets/bimg10.jpg',
//     '/assets/bimg11.png',
//     '/assets/bimg12.jpg',
//     '/assets/bimg13.jpg',
//     '/assets/bimg14.jpg',
    
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex <= 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'white' }}>
//       <Toolbar
//         sx={{
//           height: '100px',
//           backgroundColor: 'black',
//           display: 'flex',
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//         }}
//       >
        
//         <Typography
//           sx={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
//         >
//           Lasvegas®
//         </Typography>

//         {!isMediumScreen && (
//          <Box
//          sx={{
//            display: 'flex',
//            flexGrow: 1,
//            justifyContent: 'center',
//          }}
//        >
//          <Typography
//            onClick={(e) => handleClick(e, 'hotels')}
//            sx={{
//              mx: 2, 
//              fontWeight: 'bold',
//              '&:hover': { textDecoration: 'underline' },
//              cursor: 'pointer',
//              color: 'white',
//            }}
//          >
//            Hotels & Casinos
//          </Typography>
//          <Typography
//            onClick={(e) => handleClick(e, 'shows')}
//            sx={{
//              mx: 2, 
//              fontWeight: 'bold',
//              '&:hover': { textDecoration: 'underline' },
//              cursor: 'pointer',
//              color: 'white',
//            }}
//          >
//            Shows
//          </Typography>
//          <Typography
//            onClick={(e) => handleClick(e, 'restaurants')}
//            sx={{
//              mx: 2, 
//              fontWeight: 'bold',
//              '&:hover': { textDecoration: 'underline' },
//              cursor: 'pointer',
//              color: 'white',
//            }}
//          >
//            Restaurants
//          </Typography>
//          <Typography
//            onClick={(e) => handleClick(e, 'thingsToDo')}
//            sx={{
//              mx: 2, 
//              fontWeight: 'bold',
//              '&:hover': { textDecoration: 'underline' },
//              cursor: 'pointer',
//              color: 'white',
//            }}
//          >
//            Things to Do
//          </Typography>
//          <Typography
//            onClick={(e) => handleClick(e, 'weddings')}
//            sx={{
//              mx: 2,
//              fontWeight: 'bold',
//              '&:hover': { textDecoration: 'underline' },
//              cursor: 'pointer',
//              color: 'white',
//            }}
//          >
//            Weddings
//          </Typography>
//          <Typography
//            onClick={(e) => handleClick(e, 'sports')}
//            sx={{
//              mx: 2, 
//              fontWeight: 'bold',
//              '&:hover': { textDecoration: 'underline' },
//              cursor: 'pointer',
//              color: 'white',
//            }}
//          >
//            Sports
//          </Typography>
//        </Box>
//         )}

        
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             ml: 'auto', 
//           }}
//         >
//           <Button
//             endIcon={<ExpandMoreIcon />}
//             onClick={(e) => handleClick(e, 'language')}
//             sx={{ display: 'flex', alignItems: 'center', color: 'white' }}
//           >
//             <LanguageIcon sx={{ fontSize: 15 }} />
//             <Typography>English</Typography>
//           </Button>

//           <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//             {activeMenu === 'language' && (
//               <>
//                 <MenuItem onClick={handleClose}>Spanish</MenuItem>
//                 <MenuItem onClick={handleClose}>French</MenuItem>
//                 <MenuItem onClick={handleClose}>German</MenuItem>
//                 <MenuItem onClick={handleClose}>Chinese</MenuItem>
//               </>
//             )}
//           </Menu>

          
//           <Button sx={{ color: 'white' }} onClick={toggleDrawer(true)}>
//             <ManageSearchIcon sx={{ fontSize: 40 }} /> 
//             <Typography
//               variant="body1"
//               sx={{ color: 'white', cursor: 'pointer' }}
//             >
//               Menu
//             </Typography>
//           </Button>
//         </Box>
//       </Toolbar>

     
//       <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <List>
//           <ListItem button onClick={handleClose}>
//             <ListItemText primary="Hotels & Casinos" />
//           </ListItem>
//           <ListItem button onClick={handleClose}>
//             <ListItemText primary="Shows" />
//           </ListItem>
//           <ListItem button onClick={handleClose}>
//             <ListItemText primary="Restaurants" />
//           </ListItem>
//           <ListItem button onClick={handleClose}>
//             <ListItemText primary="Things to Do" />
//           </ListItem>
//           <ListItem button onClick={handleClose}>
//             <ListItemText primary="Weddings" />
//           </ListItem>
//           <ListItem button onClick={handleClose}>
//             <ListItemText primary="Sports" />
//           </ListItem>
//         </List>
//       </Drawer>
      

// <Box sx={{ display: 'flex', width: '100%', height: '500px',backgroundColor:'white' }}> 
            
//             <Box
//                 sx={{
//                     width: '50%',
//                     height: '100%',
//                     background: 'url(/assets/img1.avif) center/cover no-repeat',
//                     mr:1,
                    
//                 }}
//             />
            
            
//             <Box sx={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                
//                 <Box
//                     sx={{
//                         height: '50%',
//                         background: 'url(/assets/img2.avif) center/cover no-repeat',
//                         mb:3
//                     }}
//                 />
//                 <Typography sx={{color:'grey', textAlign:'left'}}>Nov. 21-23, 2024</Typography>
//                 <Typography variant='h5' sx={{textAlign:'left',color:'black'}}>Formula 1® Returns To Las Vegas</Typography>
//                 <Box sx={{ height: '50%', display: 'flex' }}>
//                     <Box
//                         sx={{
//                             width: '50%',
//                             background: 'url(/assets/img3.avif) center/cover no-repeat',
//                             mr:1
//                         }}
                        
//                     />
                    
                    
//                     <Box
//                         sx={{
//                             width: '50%',
//                             background: 'url(/assets/img4.avif) center/cover no-repeat',
//                         }}
//                     />
                    
//                 </Box>
                
                
                
                
//             </Box>
           
//         </Box>

// <Box sx={{width:'100%',height:'1000',display:'flex',backgroundColor:'white'}}>
//         <Box sx={{width:'40%', height:300,backgroundColor:'white',position:'absolute',top:500}}>
//         <Typography sx={{color:'grey',textAlign:'left',mt:3,ml:3}}>- Art & Culture</Typography>
//         <Typography variant='h4' sx={{color:'black',fontSize:{xl:40,lg:40,md:30,sm:20,xs:20},textAlign:'left',mt:3,ml:3}}>Celebrate Hispanic Heritage Month</Typography>
        
//         </Box>
        
//        <Box sx={{ml:85,width:'20%', height:80,backgroundColor:'white',position:'absolute',top:570,display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>
//           <Typography sx={{color:'grey',textAlign:'left',mt:3}}>Things to Do</Typography> 
//        </Box>
//        <Typography variant='h6' sx={{ml:85,mt:8,maxWidth:280,backgroundColor:'white',color:'black',display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>5 Sportsbooks to Check Out this Season</Typography>
       

//        <Box sx={{ml:127,width:'20%', height:80,backgroundColor:'white',position:'absolute',top:570,display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>
//           <Typography sx={{color:'grey',textAlign:'left',mt:3}}>Things to Do</Typography>
          
//        </Box>
//        <Typography variant='h6' sx={{mt:8,ml:8,backgroundColor:'white',color:'black',display:{xl:'flex',lg:'flex',md:'flex',xs:'none',sm:'none'}}}>Guide to the Best Pools</Typography>
// </Box>


// <Box sx={{ width: '100%', backgroundColor: 'white' }}>
//   <Box
//     sx={{
//       width: { xs: '100%', sm: '80%', md: '50%', lg: '40%', xl: '30%' }, 
//       height: { xs: 60, sm: 70, md: 80 }, 
//       backgroundColor: 'black',
//       mt: { xs: 25, sm: 25, md: 13 }, 
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center', 
//     }}
//   >
//     <Typography
//       sx={{
//         fontSize: { xs: 18, sm: 24, md: 30 }, 
//         pt: { xs: 2, sm: 2.5, md: 3 }, 
//         textAlign: 'center', 
//         color: 'white', 
//       }}
//     >
//       Plan Your Las Vegas Trip
//     </Typography>
//   </Box>
// </Box>





// <Box sx={{ 
//     mt: 8, 
//     backgroundColor: 'white', 
//     alignItems: 'center', 
//     marginX:"auto",
//     overflowX: { xs: 'auto', sm: 'auto', md: 'hidden' }, 
//     display:"flex", flexWrap:"wrap",justifyContent:"center", gap:"15px"
// }}>
//     <Button startIcon={<MapsUgcOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         WHAT'S NEW
//     </Button>
//     <Button startIcon={<LocalOfferOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         HOTEL DEALS
//     </Button>
//     <Button startIcon={<ChurchOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         WEDDINGS
//     </Button>
//     <Button startIcon={<AirportShuttleOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         GETTING AROUND
//     </Button>
//     <Button startIcon={<EscalatorWarningIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         KID-FRIENDLY
//     </Button>
//     <Button startIcon={<DownhillSkiingOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         DOWNTOWN
//     </Button>
//     <Button startIcon={<LandscapeOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
//         sx={{
//             color: 'black', 
//             flexDirection: 'column', 
//             mr: 2, 
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' }, 
//             width: { xs: '100px', sm: '110px', md: '120px' }, 
//             borderRadius: '10%', 
//             fontWeight: 'bold', 
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple', 
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>
//         OUTDOORS
//     </Button>
// </Box>



// <Box sx={{ width: '70%', margin: '0 auto',mt:7, position: 'relative' }}>
//             <IconButton
//                 onClick={handlePrev}
//                 sx={{
//                     position: 'absolute',
//                     left: 0,
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                     '&:hover': {
//                         backgroundColor: 'lightgray',
//                     }
//                 }}
//             >
//                 <ChevronLeftIcon />
//             </IconButton>

//             <Box sx={{ display: 'flex', overflow: 'hidden' }}>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         transition: 'transform 0.5s ease',
//                         transform: `translateX(-${currentIndex * (100 / 3)}%)`,
//                         width: `${images.length * (100 / 3)}%`,
//                     }}
//                 >
//                     {images.map((src, index) => (
//                         <Box key={index} sx={{ flex: '1 0 33.333%', padding: '10px' }}>
//                             <img
//                                 src={src}
//                                 alt={`slide-${index}`}
//                                 style={{
//                                     width: '100%',
//                                     height: 'auto',
//                                     borderRadius: '8px',
//                                     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
//                                 }}
//                             />
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>

//             <IconButton
//                 onClick={handleNext}
//                 sx={{
//                     position: 'absolute',
//                     right: 0,
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                     '&:hover': {
//                         backgroundColor: 'lightgray',
//                     }
//                 }}
//             >
//                 <ChevronRightIcon />
//             </IconButton>
//         </Box>

       

// <Box sx={{ width: '100%', backgroundColor: 'white' }}>
//   <Box
//     sx={{
//       width: { xs: '100%', sm: '80%', md: '50%', lg: '40%', xl: '30%' }, 
//       height: { xs: 60, sm: 70, md: 80 }, 
//       backgroundColor: 'black',
//       mt: { xs: 25, sm: 25, md: 13 }, 
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center', 
//     }}
//   >
//     <Typography
//       sx={{
//         fontSize: { xs: 18, sm: 24, md: 30 }, 
//         pt: { xs: 2, sm: 2.5, md: 3 }, 
//         textAlign: 'center', 
//         color: 'white',
//       }}
//     >
//       Plan Your Las Vegas Trip
//     </Typography>
//   </Box>
// </Box>
      
//       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', backgroundColor: 'white' }}>
 
//   <Box sx={{ width: { xs: '100%', md: '65%' }, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 1, }}>
    
    
//     <Box sx={{
//       width: '98%', height: { xs: 200, md: 300 }, backgroundColor: 'white', display: 'flex', flexWrap: 'wrap', position: 'relative', mb: 2
//     }}>
//       <Box sx={{ width: { xs: '98%', md: '36%' }, height: '100%', backgroundColor: 'black', position: 'relative', zIndex: 1 }}>
//         <Typography variant='h5' sx={{ color: 'white', pt: 5, pl: 3, fontWeight: 'bold', fontSize: { md: '20px', sm: '15px', xs: '13px' } }}>
//           Art & Culture
//         </Typography>
//         <Typography variant='h5' sx={{ color: 'white', pt: 2, pl: 3, fontWeight: 'bold', textAlign: 'left', fontSize: { md: '20px', sm: '15px', xs: '13px' } }}>
//           Experience Mexican Independence Day in Las Vegas
//         </Typography>
//         <Button sx={{ display: 'flex', mt: 2, ml: 2, color: 'white', fontSize: { md: '20px', sm: '15px', xs: '13px' } }} startIcon={<AddCircleOutlineOutlinedIcon />}>
//           CLICK TO ADD MORE
//         </Button>
//       </Box>
//       <Box sx={{ height: '100%', width: { xs: '98%', md: '64%' } }}>
//         <img
//           src='/assets/cimg1.avif'
//           alt='abc'
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//       </Box>
//     </Box>

   
//     <Box sx={{ display: 'flex',marginTop:{xs:"13rem",md:"0rem"},marginX:{xs:"auto",md:"0"}, flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, p: 1, flexWrap: 'wrap' }}>
//       {[
//         {
//           heading: "ENTERTAINMENT",
//           imageSrc: "/assets/dimg1.avif",
//           description: "Dive Into Fun: A Guide to Vegas’ Hottest Pool Parties"
//         },
//         {
//           heading: "PLAN",
//           imageSrc: "/assets/dimg2.avif",
//           description: "How to  Visit the Las of Vegas on a  Budget"
//         },
//         {
//           heading: "THINGS TO DO",
//           imageSrc: "/assets/dimg3.avif",
//           description: "Celebrate Your Pride Year-Round at Las Vegas’ Best Gay Bars"
//         }
//       ].map((item, index) => (
//         <Box key={index} sx={{ width: { xs: '90%', md: '30%' }, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', mb: { xs: 2, md: 0 } }}>
          
//           <Typography sx={{ backgroundColor: '#f0f0f0', position: 'absolute', top:0, left: 0, zIndex: 1, width: 'auto', padding: '4px 8px', textAlign: 'start', fontWeight: 'bold' }}>{item.heading}</Typography>
//           <img
//             src={item.imageSrc}
//             alt={`image-${index}`}
//             style={{ width: '100%', height: { xs: '60%', md: '80%' }, objectFit: 'cover' }}
//           />
//           <Typography variant='body2' sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', mt: 1 }}>{item.description}</Typography>
//         </Box>
//       ))}
//     </Box>
//   </Box>


//   <Box sx={{ width: { xs: '95%', md: '30%' }, height: '100%', backgroundColor: 'white', p:1 }}>
//     <Box sx={{ border: '1px solid grey', width: '100%', backgroundColor: 'white' }}>
//       <Typography variant='h5' sx={{ color: 'black', fontWeight: 'bold', p: 2, backgroundColor: 'lightgray' }}>WHAT'S TRENDING</Typography>
      
      
//       {[
//         { number: 1, category: 'SPORTS', title: 'How to Tackle Football Season in Vegas' },
//         { number: 2, category: 'WEDDINGS', title: 'Falling in Love: How to Plan the Perfect Fall Wedding in Las Vegas' },
//         { number: 3, category: 'INSPIRATION', title: '20 Ways to Celebrate Your Birthday in Vegas' },
//         { number: 4, category: 'DINING', title: 'The Best Restaurants to Celebrate Your Birthday in Las Vegas' }
//       ].map((item, index) => (
//         <Box key={index}>
//           <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
//             <Typography sx={{ color: 'black', fontWeight: 'bold', mt: -1, textAlign: 'left', p: 2, fontSize: { xs: '20px', md: '25px' } }}>{item.number}</Typography>
//             <Typography variant='h6' sx={{ color: 'gray', mt: -0.5, textAlign: 'left', p: 2 }}>{item.category}</Typography>
//           </Box>
//           <Box sx={{ width: '100%' }}>
//             <Typography variant='body1' sx={{ width: '70%', color: 'black', mt: -4, textAlign: 'left', p: 2, fontWeight: 'bold' }}>{item.title}</Typography>
//           </Box>
//           <Divider sx={{ borderColor: 'lightgray.500', my: 2, width: '90%', mx: 'auto', mt: 1 }} />
//         </Box>
//       ))}
//     </Box>
//   </Box>
// </Box>



//     <Box
//     sx={{
//       width: { xs: '100%', sm: '80%', md: '70%', lg: '60%', xl: '40%' },
//       height: { xs: 60, sm: 70, md: 80 }, 
//       backgroundColor: 'black',
//       mt: { xs: 5, sm: 7, md: 7 },
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center',
//     }}
//   >
//     <Typography
//       sx={{
//         fontSize: { xs: 18, sm: 24, md: 30 }, 
//         pt: { xs: 2, sm: 2.5, md: 3 }, 
//         textAlign: 'center',
//         color: 'white', 
//       }}
//     >
//       ENTERTAINMENT CAPITAL OF THE WORLD
//     </Typography>
//   </Box>

   



// <Box sx={{ mt: 8, backgroundColor: 'white',marginX:"auto", alignItems: 'center', overflowX: { xs: 'auto', sm: 'auto' }, whiteSpace: 'wrap' }}>
//     <Box sx={{  display:"flex", flexWrap:"wrap",justifyContent:"center", gap:"15px", flexDirection: { xs: 'row', sm: 'row' }, alignItems: 'center' }}>
//         <Button startIcon={<MusicVideoOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
            
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>CONCERTS</Button>

//         <Button startIcon={<TheaterComedyOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>SHOWS</Button>

//         <Button startIcon={<HighlightOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>COMEDY</Button>

//         <Button startIcon={<LiquorOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>NIGHTLIFE</Button>

//         <Button startIcon={<AutoFixHighOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>MAGIC</Button>

//         <Button startIcon={<SearchOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
//             color: 'black',
//             flexDirection: 'column',
//             mr: 2,
//             backgroundColor: '#bdbdbd',
//             height: { xs: '80px', sm: '90px', md: '100px' },
//             width: { xs: '100px', sm: '110px', md: '120px' },
//             borderRadius: '10%',
//             fontWeight: 'bold',
//             fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
//             '&:hover': {
//                 backgroundColor: 'purple',
//                 height: { xs: '100px', sm: '110px', md: '120px' },
//                 boxShadow: '4px 4px 4px 4px #d1c4e9'
//             }
//         }}>VIEW ALL</Button>
//     </Box>
// </Box>


    

// <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
//         <Box
//             sx={{
//                 display: 'flex',
//                 transition: 'transform 0.5s ease',
//                 transform: `translateX(-${currentIndex * (100 / 2.5)}%)`,
//                 width: '85%',
//                 '@media (max-width: 1200px)': { 
//                     width: '100%' 
//                 }  
//             }}
//         >
            
//             <Box sx={{
//                 mr: 2,
//                 width: { xs: '100%', sm: '48%', md: '30%' }, 
//                 height: '530px',
//                 backgroundColor: 'white',
//                 border: '1px solid black',
//                 mt: 9,
//                 flex: '1 0 33.333%'
//             }}>
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg1.avif"
//                         alt="slide-1"
//                         style={{
//                             width: '100%',
//                             height: '300px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                     <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' }
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2, }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 },
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>


           
//             <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg2.avif"
//                         alt="slide-2"
//                         style={{
//                             width: '100%',
//                             height: '300px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                        <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>

            
//             <Box sx={{mr:2,width:'20px',height:'530px',
//               backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}> 
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg3.avif"
//                         alt="slide-3"
//                         style={{
//                             width: '100%',
//                             height: '300px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                    <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' }
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' }
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1,
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>

            
//             <Box sx={{mr:2,width:'20px',height:'530px',
//               backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}> 
//                 <Box sx={{ flex: '1 0 100%', mt: 0 }}>
//                     <img
//                         src="/assets/eimg4.avif"
//                         alt="slide-4"
//                         style={{
//                             width: '100%',
//                             height: '300px',
//                             borderRadius: '1px',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//                         }}
//                     />
//                       <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>







//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg5.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 },
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>


          









//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg6.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' }// Responsive font size
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 },
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>




//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg7.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg8.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 },
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg9.jpg"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' },
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 },
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg10.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//              <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' }
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg11.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//              <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg12.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 },
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 },
//                                     ml: { xs: 2, sm: 2 },
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg13.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//              <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 },
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg14.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//              <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' }
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg15.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' },
//                                 alignItems: { xs: 'flex-start', sm: 'center' }
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1,
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg16.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' }
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' }
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 },
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 },
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>




//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg17.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' } 
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' } 
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' } 
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>



//           <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
//           <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
//             <img
//               src="/assets/eimg18.avif"
//               alt="slide-1"
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 borderRadius: '1px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             />
//              <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
//                         <Typography variant='h5' 
//                             sx={{ 
//                                 fontWeight: 'bold', 
//                                 color: 'black', 
//                                 mt: 3, 
//                                 textAlign: 'left', 
//                                 ml: 5,
//                                 fontSize: { xs: '18px', sm: '22px', md: '24px' }
//                             }}>
//                             Eagles
//                         </Typography>
//                         <Typography 
//                             sx={{ 
//                                 color: 'black', 
//                                 mt: 2, 
//                                 textAlign: 'left', 
//                                 ml: 5, 
//                                 fontSize: { xs: '14px', sm: '16px', md: '18px' }
//                             }}>
//                             Sphere Entertainment Co
//                         </Typography>

//                         <Box 
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: { xs: 'column', sm: 'row' }, 
//                                 alignItems: { xs: 'flex-start', sm: 'center' }
//                             }}>
//                             <Button variant='outlined' 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'black',
//                                     border: '2px solid black',
//                                     textAlign: 'left',
//                                     mt: 1, 
//                                     ml: { xs: 2 }, 
//                                     '&:hover': { backgroundColor: 'black', color: 'white' }
//                                 }}>
//                                 LEARN MORE
//                             </Button>
//                             <Button 
//                                 endIcon={<RemoveRedEyeIcon />} 
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     color: 'gray',
//                                     borderColor: 'black',
//                                     textAlign: 'right',
//                                     mt: { xs: 2, sm: 1 }, 
//                                     ml: { xs: 2, sm: 2 }, 
//                                     '&:hover': { color: 'black' }
//                                 }}>
//                                 QUICK VIEW
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>






          
          
//         </Box>
//       </Box>

//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: 'absolute',
//           left: 0,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           zIndex: 1,
//           backgroundColor: 'white',
//           '&:hover': {
//             backgroundColor: 'lightgray',
//           },
//         }}
//       >
//         <ChevronLeftIcon />
//       </IconButton>

//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: 'absolute',
//           right: 0,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           zIndex: 1,
//           backgroundColor: 'white',
//           '&:hover': {
//             backgroundColor: 'lightgray',
//           },
//         }}
//       >
//         <ChevronRightIcon />
//       </IconButton>
//     </Box>

//     <Box sx={{ textAlign: 'center', p: 3 }}>
      
//       <Typography
       
//         sx={{ textAlign: 'center', color: 'black', mt: 8, fontSize:{ xs: 'h5', sm: 'h4', md: 'h3', lg: 'h4', xl: 'h3' } }}
//       >
//         <Box component="span" fontWeight="bold">THE GREATEST ARENA </Box>
//         <Box component="span" fontWeight="normal">ON EARTH™</Box>
//       </Typography>

     
//       <Box
//         sx={{
//           width: { xs: '80%', sm: '70%', md: '70%', lg: '65%', xl: '65%' },
//           height: { xs: '250px', sm: '250px', md: '250px', lg: '250px', xl: '250px' },
//           backgroundColor: '#eeeeee',
//           mt: 3,
          
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       ></Box>

      
//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: {
//             xs: '1fr 1fr',         
//             sm: '1fr 1fr',     
//             md: '1fr 1fr',     
//             lg: '1fr 1fr 1fr 1fr', 
//           },
//           gap: 4,
//           mx: 'auto',
//           mt: -15,
//         }}
//       >
        
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             OCT 15
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>BASKETBALL</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Los Angeles Lakers vs. Golden State Warriors</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>T-Mobile Arena</Typography>
//         </Box>

        
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             OCT 27
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Las Vegas Raiders vs Kansas City Chiefs</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Allegiant Stadium</Typography>
//         </Box>

        
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             NOV 23
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Grand Prix Plaza</Typography>
//         </Box>

        
//         <Box
//           sx={{
//             height: '180px',
//             backgroundColor: 'white',
//             border: '1px solid black',
//             p: 0,
//           }}
//         >
//           <Box
//             sx={{
//               textAlign: 'center',
//               width: '45px',
//               height: '45px',
//               backgroundColor: 'black',
//               color: 'white',
//               ml: '-1px',
//             }}
//           >
//             DEC 5
//           </Box>
//           <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
//           <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>2024 WRANGLER NATIONAL FINALS RODEO (NFR)</Typography>
//           <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Thomas & Mack Center</Typography>
//         </Box>
//       </Box>

     
//       <Box sx={{ textAlign: 'center', mt: 4 }}>
//         <Button
//           variant="outlined"
//           sx={{
//             color: 'black',
//             backgroundColor: 'white',
//             border: '2px solid black',
//             fontWeight: 'bold',
//             width: { xs: '70%', sm: '60%', md: '40%', lg: '35%', xl: '35%' },
//             '&:hover': { background: 'black', color: 'white' },
//           }}
//         >
//           VIEW ALL SPORTS EVENTS & GAMES
//         </Button>
//       </Box>
//     </Box>




//     <div className="main-div">
//   <div className="right">
//   <p style={{ width: '100%', height: '65px',textAlign: 'center' 
//       ,top:0,right:0 , backgroundColor: '#f50057',paddingTop:"10px", fontSize:"24px", marginBottom:"-1rem", zIndex:"0" }}>
//          <span style={{ fontWeight:"bold"}}>SHARE YOUR</span> <span>VEGAS EXPERIENCE </span> </p>
//     <img style={{ zIndex:"99"}}
//       src="/assets/fimg1.avif"
//       alt="1"
//     />
    

     
//   </div>
  
//   <div className="left">
//     <Stack spacing={4}>
//       <Box>
//         <ImageList variant="masonry" cols={4} gap={8} >
//           {
//             itemData.map(item => (
//               <ImageListItem key={item.img} sx={{ width:"190  px", height: '160px'  }}>
//                 <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"   />
//               </ImageListItem>
//             ))
//           }
//         </ImageList>
//       </Box>
//     </Stack>
   
//   </div>
// </div>



//     <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 2 }}>
    
//       <Button
//   variant="contained"
//   sx={{
//     mb: 2,
//     padding: { xs: 1, md: 2, lg: 3 }, 
//     fontSize: { xs: '12px', md: '16px', lg: '20px' }, 
//     width: { xs: '100%', md: 'auto' }, 
//   }}
// >
//   <Box component="span" fontWeight="bold" sx={{ fontSize: { xs: 'inherit', md: 'inherit', lg: 'inherit' } }}>
//     WHAT HAPPENS
//   </Box>
//   <Box component="span" fontWeight="normal" sx={{ fontSize: { xs: 'inherit', md: 'inherit', lg: 'inherit' } }}>
//     HERE
//   </Box>
// </Button>


      
//       <Box sx={{ backgroundColor: 'lightgray', width: '100%', height: '2px', display: { xs: 'block', md: 'none' }, mt: 2 }}></Box>

      
//       <Box sx={{ width: { xs: '100%', md: '25%' }, height: 'auto', mb: { xs: 2, md: 0 } }}>
//         <Typography sx={{ mt: 8, color: 'gray', fontWeight: 'bold', fontSize: '14px', ml: { xs: 0, md: 15 } }}>THINGS TO DO</Typography>
//         <Typography sx={{ maxWidth: '70%', mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px', textAlign: 'left', ml: { xs: 0, md: 5 } }}>Outdoor Fun In Las Vegas</Typography>
//       </Box>

      
//       <Box sx={{ backgroundColor: 'lightgray', width: '100%', height: '2px', display: { xs: 'block', md: 'none' }, mt: 2 }}></Box>

      
//       <Box sx={{ width: { xs: '100%', md: '25%' }, height: 'auto', mb: { xs: 2, md: 0 } }}>
//         <Typography sx={{ mt: 8, color: 'gray', fontWeight: 'bold', fontSize: '14px', ml: { xs: 0, md: 10 } }}>FIRST TIME IN VEGAS</Typography>
//         <Typography sx={{ maxWidth: '70%', mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px', textAlign: 'left', ml: { xs: 0, md: 5 } }}>Getting Around Vegas</Typography>
//       </Box>

      
//       <Box sx={{ backgroundColor: 'lightgray', width: '100%', height: '2px', display: { xs: 'block', md: 'none' }, mt: 2 }}></Box>

      
//       <Box sx={{ width: { xs: '100%', md: '25%' }, height: 'auto', mb: { xs: 2, md: 0 } }}>
//         <Typography sx={{ mt: 8, color: 'gray', fontWeight: 'bold', fontSize: '14px', ml: { xs: 0, md: 10 } }}>EAT & DRINK</Typography>
//         <Typography sx={{ maxWidth: '60%', mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px', textAlign: 'left', ml: { xs: 0, md: -5 } }}>9 Las Vegas Celebrity Chefs And Their Restaurants</Typography>
//       </Box>
//     </Box>


//   <Box sx={{ width: '100%', backgroundColor: 'black', color: 'white', py: 3 }}>
      
//       <div style={{display:"flex",gap:"80px",flexWrap:"wrap",justifyContent:"center" }}>
//         <div>
//       <Box
//         sx={{
//          width: {sx:"full",md:'800px'},
//          marginBottom:{sm:"2rem",lg:"0rem"},
          
//           backgroundColor: '#424242',
//           display: 'flex',
//           flexDirection: isMobile ? 'column' : 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           py: 3,
//           px: 3,
//           flexWrap: 'wrap',
         
         
//         }}
//       >
//         <Typography variant="h5" sx={{ fontSize: isMobile ? '20px' : '24px', color: 'white', textAlign: isMobile ? 'center' : 'left', mb: isMobile ? 2 : 0 }}>
//           <Box component="span" fontWeight="bold" sx={{ mr: 1 }}>
//             HOTEL DEALS
//           </Box>
//           <Box component="span" fontWeight="normal">
//             AND VEGAS UPDATES
//           </Box>
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             color: 'white',
//             backgroundColor: '#aa00ff',
//             height: '35px',
//             width: isMobile ? '100%' : '150px',
//           }}
//         >
//           SIGN UP
//         </Button>
//       </Box>
//       </div>
//       <div style={{marginTop:"-5rem"}}>
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start'  }}>
//           <Box component={'img'} src="/assets/gimg1.png" sx={{ width: '100%', maxWidth: '300px', mb: 2, display:{sm:"none",lg:"block"} }} />
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: '300px',
//               backgroundColor: '#f50057',
//               py: 2,
//               textAlign: 'center',
//               mb: 2,
//               borderRadius: '8px',
//             }}
//           >
//             <Typography variant="h5" sx={{ color: 'white', fontSize: isMobile ? '18px' : '20px' }}>
//               <Box component="span" fontWeight="bold">Join The Millions</Box>
//               <Box component="span"> Who Follow Us</Box>
//             </Typography>
//           </Box>
//           <Typography sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center', mb: 2 }}>
//             FOLLOW US FOR MUST-SEE LAS VEGAS EXPERIENCES
//           </Typography>

          
//           <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//             {[faTiktok, faInstagram, faTwitter, faFacebook, faYoutube, faSnapchatGhost].map((icon, index) => (
//               <IconButton key={index} sx={{ backgroundColor: '#f50057', color: 'white', m: 0.5, '&:hover': { backgroundColor: '#f50057' } }}>
//                 <FontAwesomeIcon icon={icon} />
//               </IconButton>
//             ))}
//           </Box>
//         </Box>
//       </div>
      
        
//       </div>

      
//       <Box
//         sx={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           display: 'flex',
//           marginTop: {sm:"0rem",md:"-11rem"},
//           flexWrap:"wrap",
//           flexDirection: isMobile ? 'column' : 'row',
//           justifyContent: 'center',
       
//         textAlign:{xs:"center",md:"start"},
//           py: 4,
//           px: isMobile ? 2 : 3,
//         }}
//       >
      
//         <Box sx={{ flex: 1, mb: isMobile ? 4 : 0 }}>
//           <Typography sx={{ fontWeight: 'bold', mb: 2 }}>LAS VEGAS®</Typography>
//           <Box sx={{ mb: 2 }}>
//             <Typography>3150 Paradise Road</Typography>
//             <Typography>Las Vegas, NV 89109</Typography>
//             <Typography>Toll-Free: 877-847-4858</Typography>
//           </Box>
//           <Box sx={{ mt: 2, fontSize: '18px', fontWeight: 'bold' }}>
//             <Typography>WHAT HAPPENS HERE,</Typography>
//             <Typography>ONLY HAPPENS HERE™.</Typography>
//           </Box>
//           <Typography sx={{ mt: 4, color: 'gray', fontSize: '14px' }}>
//             THE ONLY OFFICIAL WEBSITE OF LAS VEGAS®
//             <br />
//             © 2024 Las Vegas Convention and Visitors Authority. All rights reserved.
//           </Typography>
//         </Box>

       
//         <Box sx={{ flex: 1, mb: isMobile ? 4 : 0 }}>
//           <Box sx={{ mb: 2 }}>
//             <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Privacy Policy</Typography>
//             <Typography sx={{ fontWeight: 'bold' }}>International Travel Info</Typography>
//             <Typography sx={{ fontWeight: 'bold' }}>Sitemap</Typography>
//           </Box>
//           <Box sx={{ mt: 2, fontWeight: 'bold', fontSize: '18px' }}>
//             <Typography>VisitLaughlin.com</Typography>
//             <Typography>VisitMesquite.com</Typography>
//             <Typography>VisitBoulderCity.com</Typography>
//           </Box>
//           <Typography sx={{ mt: 4, color: 'gray', fontSize: '14px' }}>
//             If you'd like to learn more about responsible gaming, please consult the Nevada Council or call 1-800-522-4700
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
    
    


  
      
// </AppBar>
    
//   )
// }
// const itemData=[
//   {
//     img: '/assets/fimg2.jpg',
//     title: '2'
//   },
//   {
//     img: '/assets/fimg3.jpg',
//     title: '3'
//   },
//   {
//     img: '/assets/fimg4.jpg',
//     title: '4'
//   },
//   {
//     img: '/assets/fimg5.jpg',
//     title: '5'
//   },
//   {
//     img: '/assets/fimg6.jpg',
//     title: '6'
//   },
//   {
//     img: '/assets/fimg7.jpg',
//     title: '7'
//   },
//   {
//     img: '/assets/fimg8.jpg',
//     title: '8'
//   },
//   {
//     img: '/assets/fimg9.jpg',
//     title: '9'
//   },
//   {
//     img: '/assets/fimg10.jpg',
//     title: '10'
//   },
//   {
//     img: '/assets/fimg11.jpg',
//     title: '11'
//   },
//   {
//     img: '/assets/fimg12.jpg',
//     title: '12'
//   },
//   {
//     img: '/assets/fimg13.jpg',
//     title: '13'
//   },
//   {
//     img: '/assets/fimg14.jpg',
//     title: '14'
//   },
//   {
//     img: '/assets/fimg15.jpg',
//     title: '15'
//   },
//   {
//     img: '/assets/fimg16.jpg',
//     title: '16'
//   },
//   {
//     img: '/assets/fimg17.jpg',
//     title: '17'
//   },
//   {
//     img: '/assets/fimg18.jpg',
//     title: '18'
//   },
//   {
//     img: '/assets/fimg19.jpg',
//     title: '19'
//   },
//   {
//     img: '/assets/fimg20.jpg',
//     title: '20'
//   },
  
// ]

// export default MuiLasvegas




import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ManageSearchIcon from '@mui/icons-material/ManageSearch'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faTiktok, faFacebook, faYoutube, faSnapchatGhost, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faTwitter, faFacebook, faYoutube, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

import Divider from '@mui/material/Divider'; 
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList'; 
import ImageListItem from '@mui/material/ImageListItem'; 
import { red } from '@mui/material/colors';

const MuiLasvegas = () => {
  const [anchorEl, setAnchorEl] = useState(null); 
  const [activeMenu, setActiveMenu] = useState(null); 
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

  

  const toggleDrawer = (open) => () => {
    if (isMediumScreen) {
      
      setDrawerOpen(open);
    }
  };

  const handleClick = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuName);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const images = [
    '/assets/bimg1.jpg',
    '/assets/bimg2.jpg',
    '/assets/bimg3.png',
    '/assets/bimg4.png',
    '/assets/bimg5.jpg',
    '/assets/bimg6.jpg',
    '/assets/bimg7.jpg',
    '/assets/bimg8.jpg',
    '/assets/bimg9.jpg',
    '/assets/bimg10.jpg',
    '/assets/bimg11.png',
    '/assets/bimg12.jpg',
    '/assets/bimg13.jpg',
    '/assets/bimg14.jpg',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar
        sx={{
          height: '100px',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center',
        }}
      >
        
        <Typography
          sx={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
        >
          Lasvegas®
        </Typography>

        {!isMediumScreen && (
         <Box
         sx={{
           display: 'flex',
           flexGrow: 1,
           justifyContent: 'center',
         }}
       >
         <Typography
           onClick={(e) => handleClick(e, 'hotels')}
           sx={{
             mx: 2, 
             fontWeight: 'bold',
             '&:hover': { textDecoration: 'underline' },
             cursor: 'pointer',
             color: 'white',
           }}
         >
           Hotels & Casinos
         </Typography>
         <Typography
           onClick={(e) => handleClick(e, 'shows')}
           sx={{
             mx: 2, 
             fontWeight: 'bold',
             '&:hover': { textDecoration: 'underline' },
             cursor: 'pointer',
             color: 'white',
           }}
         >
           Shows
         </Typography>
         <Typography
           onClick={(e) => handleClick(e, 'restaurants')}
           sx={{
             mx: 2, 
             fontWeight: 'bold',
             '&:hover': { textDecoration: 'underline' },
             cursor: 'pointer',
             color: 'white',
           }}
         >
           Restaurants
         </Typography>
         <Typography
           onClick={(e) => handleClick(e, 'thingsToDo')}
           sx={{
             mx: 2, 
             fontWeight: 'bold',
             '&:hover': { textDecoration: 'underline' },
             cursor: 'pointer',
             color: 'white',
           }}
         >
           Things to Do
         </Typography>
         <Typography
           onClick={(e) => handleClick(e, 'weddings')}
           sx={{
             mx: 2,
             fontWeight: 'bold',
             '&:hover': { textDecoration: 'underline' },
             cursor: 'pointer',
             color: 'white',
           }}
         >
           Weddings
         </Typography>
         <Typography
           onClick={(e) => handleClick(e, 'sports')}
           sx={{
             mx: 2, 
             fontWeight: 'bold',
             '&:hover': { textDecoration: 'underline' },
             cursor: 'pointer',
             color: 'white',
           }}
         >
           Sports
         </Typography>
       </Box>
        )}

        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 'auto', // Ensures it aligns on the right side
          }}
        >
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={(e) => handleClick(e, 'language')}
            sx={{ display: 'flex', alignItems: 'center', color: 'white' }}
          >
            <LanguageIcon sx={{ fontSize: 15 }} />
            <Typography>English</Typography>
          </Button>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {activeMenu === 'language' && (
              <>
                <MenuItem onClick={handleClose}>Spanish</MenuItem>
                <MenuItem onClick={handleClose}>French</MenuItem>
                <MenuItem onClick={handleClose}>German</MenuItem>
                <MenuItem onClick={handleClose}>Chinese</MenuItem>
              </>
            )}
          </Menu>

          
          <Button sx={{ color: 'white' }} onClick={toggleDrawer(true)}>
            <ManageSearchIcon sx={{ fontSize: 40 }} /> 
            <Typography
              variant="body1"
              sx={{ color: 'white', cursor: 'pointer' }}
            >
              Menu
            </Typography>
          </Button>
        </Box>
      </Toolbar>

     
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Hotels & Casinos" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Shows" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Restaurants" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Things to Do" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Weddings" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Sports" />
          </ListItem>
        </List>
      </Drawer>
      

<Box sx={{ display: 'flex', width: '100%', height: '500px',backgroundColor:'white' }}> {/* Adjust height as needed */}
            
            <Box
                sx={{
                    width: '50%',
                    height: '100%',
                    background: 'url(/assets/img1.avif) center/cover no-repeat',
                    mr:1,
                    
                }}
            />
            
            
            <Box sx={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                
                <Box
                    sx={{
                        height: '50%',
                        background: 'url(/assets/img2.avif) center/cover no-repeat',
                        mb:3
                    }}
                />
                <Typography sx={{color:'grey', textAlign:'left'}}>Nov. 21-23, 2024</Typography>
                <Typography variant='h5' sx={{textAlign:'left',color:'black'}}>Formula 1® Returns To Las Vegas</Typography>
                <Box sx={{ height: '50%', display: 'flex' }}>
                    <Box
                        sx={{
                            width: '50%',
                            background: 'url(/assets/img3.avif) center/cover no-repeat',
                            mr:1
                        }}
                        
                    />
                    
                    
                    <Box
                        sx={{
                            width: '50%',
                            background: 'url(/assets/img4.avif) center/cover no-repeat',
                        }}
                    />
                    
                </Box>
                
                
                
                
            </Box>
           
        </Box>

<Box sx={{width:'100%',height:'1000',display:'flex',backgroundColor:'white'}}>
        <Box sx={{width:'40%', height:300,backgroundColor:'white',position:'absolute',top:500}}>
        <Typography sx={{color:'grey',textAlign:'left',mt:3,ml:3}}>- Art & Culture</Typography>
        <Typography variant='h4' sx={{color:'black',fontSize:{xl:40,lg:40,md:30,sm:20,xs:20},textAlign:'left',mt:3,ml:3}}>Celebrate Hispanic Heritage Month</Typography>
        
        </Box>
        
       <Box sx={{ml:85,width:'20%', height:80,backgroundColor:'white',position:'absolute',top:570,display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>
          <Typography sx={{color:'grey',textAlign:'left',mt:3}}>Things to Do</Typography> 
       </Box>
       <Typography variant='h6' sx={{ml:85,mt:8,maxWidth:280,backgroundColor:'white',color:'black',display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>5 Sportsbooks to Check Out this Season</Typography>
       

       <Box sx={{ml:127,width:'20%', height:80,backgroundColor:'white',position:'absolute',top:570,display:{xl:'flex',lg:'flex',md:'none',xs:'none',sm:'none'}}}>
          <Typography sx={{color:'grey',textAlign:'left',mt:3}}>Things to Do</Typography>
          
       </Box>
       <Typography variant='h6' sx={{mt:8,ml:8,backgroundColor:'white',color:'black',display:{xl:'flex',lg:'flex',md:'flex',xs:'none',sm:'none'}}}>Guide to the Best Pools</Typography>
</Box>
{/* <Box sx={{width:'100%',backgroundColor:'white'}}>
<Box sx={{width:'30%',height:80,backgroundColor:'black', mt:10}}>
            <Typography  sx={{fontSize:30,pt:3}}>Plan Your Las Vegas Trip</Typography>
 </Box>
 </Box> */}

<Box sx={{ width: '100%', backgroundColor: 'white' }}>
  <Box
    sx={{
      width: { xs: '100%', sm: '80%', md: '50%', lg: '40%', xl: '30%' }, // Adjust width based on screen size
      height: { xs: 60, sm: 70, md: 80 }, // Height can be reduced for smaller screens
      backgroundColor: 'black',
      mt: { xs: 25, sm: 25, md: 13 }, // Adjust margin-top for different sizes
      display: 'flex', 
      justifyContent: 'center', // Centers content horizontally
      alignItems: 'center', // Centers content vertically
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: 18, sm: 24, md: 30 }, // Adjust font size for different screen sizes
        pt: { xs: 2, sm: 2.5, md: 3 }, // Adjust padding-top for different sizes
        textAlign: 'center', // Center text
        color: 'white', // Make text white for contrast with black background
      }}
    >
      Plan Your Las Vegas Trip
    </Typography>
  </Box>
</Box>




 {/* <Box sx={{ mt: 8, backgroundColor: 'white',    alignItems:'center' }}>
    <Button startIcon={<MapsUgcOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>WHAT'S NEW</Button>
    <Button startIcon={<LocalOfferOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>HOTEL DEALS</Button>
    <Button startIcon={<ChurchOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>WEDDINGS</Button>
    <Button startIcon={<AirportShuttleOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>GETTING AROUND</Button>
    <Button startIcon={<EscalatorWarningIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>KID-FRIENDLY</Button>
    <Button startIcon={<DownhillSkiingOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>DOWNTOWN</Button>
    <Button startIcon={<LandscapeOutlinedIcon sx={{mb:2}}/>} variant='contained' sx={{color:'black',flexDirection:'column', mr:2,backgroundColor:'#bdbdbd',height:'100px',width:'120px',borderRadius:'10%',fontWeight:'bold',fontSize:'13px','&:hover':{backgroundColor:'purple',height:'120px',boxShadow:'4px 4px 4px 4px #d1c4e9'}}}>OUTDOORS</Button>
   
</Box>  */}


<Box sx={{ 
    mt: 8, 
    backgroundColor: 'white', 
    alignItems: 'center', 
    marginX:"auto",
    overflowX: { xs: 'auto', sm: 'auto', md: 'hidden' }, 
    display:"flex", flexWrap:"wrap",justifyContent:"center", gap:"15px"
}}>
    <Button startIcon={<MapsUgcOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
        sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>
        WHAT'S NEW
    </Button>
    <Button startIcon={<LocalOfferOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
        sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>
        HOTEL DEALS
    </Button>
    <Button startIcon={<ChurchOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
        sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>
        WEDDINGS
    </Button>
    <Button startIcon={<AirportShuttleOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
        sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>
        GETTING AROUND
    </Button>
    <Button startIcon={<EscalatorWarningIcon sx={{ mb: 2 }} />} variant='contained' 
        sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '8px', sm: '9px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>
        KID-FRIENDLY
    </Button>
    <Button startIcon={<DownhillSkiingOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
        sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>
        DOWNTOWN
    </Button>
    <Button startIcon={<LandscapeOutlinedIcon sx={{ mb: 2 }} />} variant='contained' 
        sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>
        OUTDOORS
    </Button>
</Box>



<Box sx={{ width: '70%', margin: '0 auto',mt:7, position: 'relative' }}>
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                    }
                }}
            >
                <ChevronLeftIcon />
            </IconButton>

            <Box sx={{ display: 'flex', overflow: 'hidden' }}>
                <Box
                    sx={{
                        display: 'flex',
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                        width: `${images.length * (100 / 3)}%`,
                    }}
                >
                    {images.map((src, index) => (
                        <Box key={index} sx={{ flex: '1 0 33.333%', padding: '10px' }}>
                            <img
                                src={src}
                                alt={`slide-${index}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                    }
                }}
            >
                <ChevronRightIcon />
            </IconButton>
        </Box>

        {/* <Box sx={{backgroundColor:'black',color:'white',width:'30%',height:80,mt:7}}>
            <Typography variant='h5' sx={{pt:3}}>What We're Loving This Week</Typography>
        </Box> */}

<Box sx={{ width: '100%', backgroundColor: 'white' }}>
  <Box
    sx={{
      width: { xs: '100%', sm: '80%', md: '50%', lg: '40%', xl: '30%' }, // Adjust width based on screen size
      height: { xs: 60, sm: 70, md: 80 }, // Height can be reduced for smaller screens
      backgroundColor: 'black',
      mt: { xs: 25, sm: 25, md: 13 }, // Adjust margin-top for different sizes
      display: 'flex', 
      justifyContent: 'center', // Centers content horizontally
      alignItems: 'center', // Centers content vertically
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: 18, sm: 24, md: 30 }, // Adjust font size for different screen sizes
        pt: { xs: 2, sm: 2.5, md: 3 }, // Adjust padding-top for different sizes
        textAlign: 'center', // Center text
        color: 'white', // Make text white for contrast with black background
      }}
    >
      Plan Your Las Vegas Trip
    </Typography>
  </Box>
</Box>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', backgroundColor: 'white' }}>
  {/* Left Column */}
  <Box sx={{ width: { xs: '100%', md: '65%' }, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 1, }}>
    
    {/* Top Image Section */}
    <Box sx={{
      width: '98%', height: { xs: 200, md: 300 }, backgroundColor: 'white', display: 'flex', flexWrap: 'wrap', position: 'relative', mb: 2
    }}>
      <Box sx={{ width: { xs: '98%', md: '36%' }, height: '100%', backgroundColor: 'black', position: 'relative', zIndex: 1 }}>
        <Typography variant='h5' sx={{ color: 'white', pt: 5, pl: 3, fontWeight: 'bold', fontSize: { md: '20px', sm: '15px', xs: '13px' } }}>
          Art & Culture
        </Typography>
        <Typography variant='h5' sx={{ color: 'white', pt: 2, pl: 3, fontWeight: 'bold', textAlign: 'left', fontSize: { md: '20px', sm: '15px', xs: '13px' } }}>
          Experience Mexican Independence Day in Las Vegas
        </Typography>
        <Button sx={{ display: 'flex', mt: 2, ml: 2, color: 'white', fontSize: { md: '20px', sm: '15px', xs: '13px' } }} startIcon={<AddCircleOutlineOutlinedIcon />}>
          CLICK TO ADD MORE
        </Button>
      </Box>
      <Box sx={{ height: '100%', width: { xs: '98%', md: '64%' } }}>
        <img
          src='/assets/cimg1.avif'
          alt='abc'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>

    {/* Additional Images Section */}
    <Box sx={{ display: 'flex',marginTop:{xs:"13rem",md:"0rem"},marginX:{xs:"auto",md:"0"}, flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, p: 1, flexWrap: 'wrap' }}>
      {[
        {
          heading: "ENTERTAINMENT",
          imageSrc: "/assets/dimg1.avif",
          description: "Dive Into Fun: A Guide to Vegas’ Hottest Pool Parties"
        },
        {
          heading: "PLAN",
          imageSrc: "/assets/dimg2.avif",
          description: "How to  Visit the Las of Vegas on a  Budget"
        },
        {
          heading: "THINGS TO DO",
          imageSrc: "/assets/dimg3.avif",
          description: "Celebrate Your Pride Year-Round at Las Vegas’ Best Gay Bars"
        }
      ].map((item, index) => (
        <Box key={index} sx={{ width: { xs: '90%', md: '30%' }, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', mb: { xs: 2, md: 0 } }}>
          {/* Heading for Each Image */}
          <Typography sx={{ backgroundColor: '#f0f0f0', position: 'absolute', top:0, left: 0, zIndex: 1, width: 'auto', padding: '4px 8px', textAlign: 'start', fontWeight: 'bold' }}>{item.heading}</Typography>
          <img
            src={item.imageSrc}
            alt={`image-${index}`}
            style={{ width: '100%', height: { xs: '60%', md: '80%' }, objectFit: 'cover' }}
          />
          <Typography variant='body2' sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center', mt: 1 }}>{item.description}</Typography>
        </Box>
      ))}
    </Box>
  </Box>

  {/* Right Column */}
  <Box sx={{ width: { xs: '95%', md: '30%' }, height: '100%', backgroundColor: 'white', p:1 }}>
    <Box sx={{ border: '1px solid grey', width: '100%', backgroundColor: 'white' }}>
      <Typography variant='h5' sx={{ color: 'black', fontWeight: 'bold', p: 2, backgroundColor: 'lightgray' }}>WHAT'S TRENDING</Typography>
      
      {/* Trending Items */}
      {[
        { number: 1, category: 'SPORTS', title: 'How to Tackle Football Season in Vegas' },
        { number: 2, category: 'WEDDINGS', title: 'Falling in Love: How to Plan the Perfect Fall Wedding in Las Vegas' },
        { number: 3, category: 'INSPIRATION', title: '20 Ways to Celebrate Your Birthday in Vegas' },
        { number: 4, category: 'DINING', title: 'The Best Restaurants to Celebrate Your Birthday in Las Vegas' }
      ].map((item, index) => (
        <Box key={index}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography sx={{ color: 'black', fontWeight: 'bold', mt: -1, textAlign: 'left', p: 2, fontSize: { xs: '20px', md: '25px' } }}>{item.number}</Typography>
            <Typography variant='h6' sx={{ color: 'gray', mt: -0.5, textAlign: 'left', p: 2 }}>{item.category}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant='body1' sx={{ width: '70%', color: 'black', mt: -4, textAlign: 'left', p: 2, fontWeight: 'bold' }}>{item.title}</Typography>
          </Box>
          <Divider sx={{ borderColor: 'lightgray.500', my: 2, width: '90%', mx: 'auto', mt: 1 }} />
        </Box>
      ))}
    </Box>
  </Box>
</Box>



    <Box
    sx={{
      width: { xs: '100%', sm: '80%', md: '70%', lg: '60%', xl: '40%' }, // Adjust width based on screen size
      height: { xs: 60, sm: 70, md: 80 }, // Height can be reduced for smaller screens
      backgroundColor: 'black',
      mt: { xs: 5, sm: 7, md: 7 }, // Adjust margin-top for different sizes
      display: 'flex', 
      justifyContent: 'center', // Centers content horizontally
      alignItems: 'center', // Centers content vertically
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: 18, sm: 24, md: 30 }, // Adjust font size for different screen sizes
        pt: { xs: 2, sm: 2.5, md: 3 }, // Adjust padding-top for different sizes
        textAlign: 'center', // Center text
        color: 'white', // Make text white for contrast with black background
      }}
    >
      ENTERTAINMENT CAPITAL OF THE WORLD
    </Typography>
  </Box>

      {/* <Box sx={{ mt: 8, backgroundColor: 'white',    alignItems:'center' }}>
      <Button startIcon={<MusicVideoOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>CONCERTS</Button>
      <Button startIcon={<TheaterComedyOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>SHOWS</Button>
      <Button startIcon={<HighlightOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>COMEDY</Button>
      <Button startIcon={<LiquorOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>NIGHTLIFE</Button>
      <Button startIcon={<AutoFixHighOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>MAGIC</Button>
      <Button startIcon={<SearchOutlinedIcon sx={{mb:2}}/>} variant='contained'  sx={{
            color: 'black', 
            flexDirection: 'column', 
            mr: 2, 
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' }, 
            width: { xs: '100px', sm: '110px', md: '120px' }, 
            borderRadius: '10%', 
            fontWeight: 'bold', 
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple', 
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>VIEW ALL</Button>

      </Box> */}



<Box sx={{ mt: 8, backgroundColor: 'white',marginX:"auto", alignItems: 'center', overflowX: { xs: 'auto', sm: 'auto' }, whiteSpace: 'wrap' }}>
    <Box sx={{  display:"flex", flexWrap:"wrap",justifyContent:"center", gap:"15px", flexDirection: { xs: 'row', sm: 'row' }, alignItems: 'center' }}>
        <Button startIcon={<MusicVideoOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
            color: 'black',
            flexDirection: 'column',
            mr: 2,
            
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' },
            width: { xs: '100px', sm: '110px', md: '120px' },
            borderRadius: '10%',
            fontWeight: 'bold',
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple',
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>CONCERTS</Button>

        <Button startIcon={<TheaterComedyOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
            color: 'black',
            flexDirection: 'column',
            mr: 2,
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' },
            width: { xs: '100px', sm: '110px', md: '120px' },
            borderRadius: '10%',
            fontWeight: 'bold',
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple',
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>SHOWS</Button>

        <Button startIcon={<HighlightOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
            color: 'black',
            flexDirection: 'column',
            mr: 2,
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' },
            width: { xs: '100px', sm: '110px', md: '120px' },
            borderRadius: '10%',
            fontWeight: 'bold',
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple',
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>COMEDY</Button>

        <Button startIcon={<LiquorOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
            color: 'black',
            flexDirection: 'column',
            mr: 2,
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' },
            width: { xs: '100px', sm: '110px', md: '120px' },
            borderRadius: '10%',
            fontWeight: 'bold',
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple',
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>NIGHTLIFE</Button>

        <Button startIcon={<AutoFixHighOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
            color: 'black',
            flexDirection: 'column',
            mr: 2,
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' },
            width: { xs: '100px', sm: '110px', md: '120px' },
            borderRadius: '10%',
            fontWeight: 'bold',
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple',
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>MAGIC</Button>

        <Button startIcon={<SearchOutlinedIcon sx={{ mb: 2 }} />} variant='contained' sx={{
            color: 'black',
            flexDirection: 'column',
            mr: 2,
            backgroundColor: '#bdbdbd',
            height: { xs: '80px', sm: '90px', md: '100px' },
            width: { xs: '100px', sm: '110px', md: '120px' },
            borderRadius: '10%',
            fontWeight: 'bold',
            fontSize: { xs: '10px', sm: '11px', md: '12px', lg: '13px' },
            '&:hover': {
                backgroundColor: 'purple',
                height: { xs: '100px', sm: '110px', md: '120px' },
                boxShadow: '4px 4px 4px 4px #d1c4e9'
            }
        }}>VIEW ALL</Button>
    </Box>
</Box>


      {/* <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            width: `600%`,
          }}
        >
          
         
          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg1.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Eagles</Typography>
                <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Sphere Entertainment Co</Typography>
                
                <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
                <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
            </Box>
          </Box>
          </Box>
          



        <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg2.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,ml:-4}}>iHeart Radio Musical Festival</Typography>
                <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>T-Mobile Arena</Typography>
                
                <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
                <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
            </Box>
          </Box>
          </Box>


          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg3.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,ml:5,textAlign:'left'}}>Marshmello</Typography>
                <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Encore Beach Pool</Typography>
                
                <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:10,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
                <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:10,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
            </Box>
          </Box>
          </Box>
          


        
          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg4.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                <Typography variant='h5' sx={{fontWeight:'bold',color:'black',mt:3,textAlign:'left',ml:5}}>Life is Beautiful Presents: A Big Beautiful Block Party</Typography>
                <Typography sx={{color:'black',mt:2,textAlign:'left',ml:5}}>Plaza Hotel & Casino</Typography>
                
                <Button variant='outlined' sx={{fontWeight:'bold',color:'black',border:'2px solid black',textAlign:'left',mt:6,ml:-12,'&:hover':{backgroundColor:'black',color:'white'}}}>LEARN MORE</Button>
                <Button  endIcon={<RemoveRedEyeIcon />}  sx={{fontWeight:'bold',color:'gray',borderColor:'black',textAlign:'right',mt:6,ml:2,'&:hover':{color:'black'}}}>QUICK VIEW</Button>
                
                
            </Box>
          </Box>
          </Box> */}


{/* bre */}


{/* bew */}

<Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
        <Box
            sx={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentIndex * (100 / 2.5)}%)`,
                width: '85%',
                '@media (max-width: 1200px)': { 
                    width: '100%' 
                }  // Adjust width based on the number of items
            }}
        >
            {/* First Item */}
            <Box sx={{
                mr: 2,
                width: { xs: '100%', sm: '48%', md: '30%' }, // Responsive widths
                height: '530px',
                backgroundColor: 'white',
                border: '1px solid black',
                mt: 9,
                flex: '1 0 33.333%'
            }}>
                <Box sx={{ flex: '1 0 100%', mt: 0 }}>
                    <img
                        src="/assets/eimg1.avif"
                        alt="slide-1"
                        style={{
                            width: '100%',
                            height: '300px',
                            borderRadius: '1px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                    <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2, }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>


            {/* Second Item */}
            <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
                <Box sx={{ flex: '1 0 100%', mt: 0 }}>
                    <img
                        src="/assets/eimg2.avif"
                        alt="slide-2"
                        style={{
                            width: '100%',
                            height: '300px',
                            borderRadius: '1px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                       <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Third Item */}
            <Box sx={{mr:2,width:'20px',height:'530px',
              backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}> 
                <Box sx={{ flex: '1 0 100%', mt: 0 }}>
                    <img
                        src="/assets/eimg3.avif"
                        alt="slide-3"
                        style={{
                            width: '100%',
                            height: '300px',
                            borderRadius: '1px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                   <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Fourth Item */}
            <Box sx={{mr:2,width:'20px',height:'530px',
              backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}> 
                <Box sx={{ flex: '1 0 100%', mt: 0 }}>
                    <img
                        src="/assets/eimg4.avif"
                        alt="slide-4"
                        style={{
                            width: '100%',
                            height: '300px',
                            borderRadius: '1px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                      <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>







          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg5.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>


          









          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg6.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>




          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg7.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg8.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg9.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg10.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg11.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg12.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg13.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg14.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg15.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg16.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>




          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg17.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>



          <Box sx={{mr:2,width:'20px',height:'530px',backgroundColor:'white',border:'1px solid black',mt:9,flex: '1 0 33.333%'}}>  
          <Box sx={{ flex: '1 0 33.333%' ,mt:0}}>
            <img
              src="/assets/eimg18.avif"
              alt="slide-1"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '1px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
             <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
                        <Typography variant='h5' 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: 'black', 
                                mt: 3, 
                                textAlign: 'left', 
                                ml: 5,
                                fontSize: { xs: '18px', sm: '22px', md: '24px' } // Responsive font size
                            }}>
                            Eagles
                        </Typography>
                        <Typography 
                            sx={{ 
                                color: 'black', 
                                mt: 2, 
                                textAlign: 'left', 
                                ml: 5, 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' } // Responsive font size
                            }}>
                            Sphere Entertainment Co
                        </Typography>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger screens
                                alignItems: { xs: 'flex-start', sm: 'center' } // Aligns content to the left in column mode
                            }}>
                            <Button variant='outlined' 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                    border: '2px solid black',
                                    textAlign: 'left',
                                    mt: 1, // Reduced margin for better spacing
                                    ml: { xs: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { backgroundColor: 'black', color: 'white' }
                                }}>
                                LEARN MORE
                            </Button>
                            <Button 
                                endIcon={<RemoveRedEyeIcon />} 
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'gray',
                                    borderColor: 'black',
                                    textAlign: 'right',
                                    mt: { xs: 2, sm: 1 }, // Adjust top margin for better spacing
                                    ml: { xs: 2, sm: 2 }, // Adjust left margin for different screen sizes
                                    '&:hover': { color: 'black' }
                                }}>
                                QUICK VIEW
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>






          
          
        </Box>
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'lightgray',
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'lightgray',
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>

    <Box sx={{ textAlign: 'center', p: 3 }}>
      {/* Responsive Heading */}
      <Typography
       
        sx={{ textAlign: 'center', color: 'black', mt: 8, fontSize:{ xs: 'h5', sm: 'h4', md: 'h3', lg: 'h4', xl: 'h3' } }}
      >
        <Box component="span" fontWeight="bold">THE GREATEST ARENA </Box>
        <Box component="span" fontWeight="normal">ON EARTH™</Box>
      </Typography>

      {/* Grey Background Box */}
      <Box
        sx={{
          width: { xs: '80%', sm: '70%', md: '70%', lg: '65%', xl: '65%' },
          height: { xs: '250px', sm: '250px', md: '250px', lg: '250px', xl: '250px' },
          backgroundColor: '#eeeeee',
          mt: 3,
          
          display: 'flex',
          justifyContent: 'center',
        }}
      ></Box>

      {/* Event Boxes */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr 1fr',         // Single column on extra small screens
            sm: '1fr 1fr',     // Two columns on small and medium screens
            md: '1fr 1fr',     // Two columns on medium screens
            lg: '1fr 1fr 1fr 1fr', // Four columns on large and extra-large screens
          },
          gap: 4,
          mx: 'auto',
          mt: -15,
        }}
      >
        {/* Event Box 1 */}
        <Box
          sx={{
            height: '180px',
            backgroundColor: 'white',
            border: '1px solid black',
            p: 0,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              width: '45px',
              height: '45px',
              backgroundColor: 'black',
              color: 'white',
              ml: '-1px',
            }}
          >
            OCT 15
          </Box>
          <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>BASKETBALL</Typography>
          <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Los Angeles Lakers vs. Golden State Warriors</Typography>
          <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>T-Mobile Arena</Typography>
        </Box>

        {/* Event Box 2 */}
        <Box
          sx={{
            height: '180px',
            backgroundColor: 'white',
            border: '1px solid black',
            p: 0,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              width: '45px',
              height: '45px',
              backgroundColor: 'black',
              color: 'white',
              ml: '-1px',
            }}
          >
            OCT 27
          </Box>
          <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
          <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Las Vegas Raiders vs Kansas City Chiefs</Typography>
          <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Allegiant Stadium</Typography>
        </Box>

        {/* Event Box 3 */}
        <Box
          sx={{
            height: '180px',
            backgroundColor: 'white',
            border: '1px solid black',
            p: 0,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              width: '45px',
              height: '45px',
              backgroundColor: 'black',
              color: 'white',
              ml: '-1px',
            }}
          >
            NOV 23
          </Box>
          <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
          <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024</Typography>
          <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Grand Prix Plaza</Typography>
        </Box>

        {/* Event Box 4 */}
        <Box
          sx={{
            height: '180px',
            backgroundColor: 'white',
            border: '1px solid black',
            p: 0,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              width: '45px',
              height: '45px',
              backgroundColor: 'black',
              color: 'white',
              ml: '-1px',
            }}
          >
            DEC 5
          </Box>
          <Typography sx={{ mt: -3, color: 'gray', fontWeight: 'bold', fontSize: '14px' }}>SPORTS</Typography>
          <Typography sx={{ mt: 1, color: 'black', fontWeight: 'bold', fontSize: '16px' }}>2024 WRANGLER NATIONAL FINALS RODEO (NFR)</Typography>
          <Typography sx={{ mt: 3, color: 'black', fontSize: '15px' }}>Thomas & Mack Center</Typography>
        </Box>
      </Box>

      {/* View All Button */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          sx={{
            color: 'black',
            backgroundColor: 'white',
            border: '2px solid black',
            fontWeight: 'bold',
            width: { xs: '70%', sm: '60%', md: '40%', lg: '35%', xl: '35%' },  // Responsive button width
            '&:hover': { background: 'black', color: 'white' },
          }}
        >
          VIEW ALL SPORTS EVENTS & GAMES
        </Button>
      </Box>
    </Box>




    <div className="main-div">
  <div className="right">
  <p style={{ width: '100%', height: '65px',textAlign: 'center' 
      ,top:0,right:0 , backgroundColor: '#f50057',paddingTop:"10px", fontSize:"24px", marginBottom:"-1rem", zIndex:"0" }}>
         <span style={{ fontWeight:"bold"}}>SHARE YOUR</span> <span>VEGAS EXPERIENCE </span> </p>
    <img style={{ zIndex:"99"}}
      src="/assets/fimg1.avif"
      alt="1"
    />
     {/* <Box sx={{}}>
      <Typography variant="h5" sx={{ textAlign: 'center', color: 'white', mt: 2 }}>
        <Box component="span" fontWeight="bold">SHARE YOUR </Box>
        <Box component="span" fontWeight="normal">VEGAS EXPERIENCE</Box>
      </Typography>
    </Box> */}

     
  </div>
  
  <div className="left">
    <Stack spacing={4}>
      <Box>
        <ImageList variant="masonry" cols={4} gap={8} >
          {
            itemData.map(item => (
              <ImageListItem key={item.img} sx={{ width:"190  px", height: '160px'  }}>
                <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"   />
              </ImageListItem>
            ))
          }
        </ImageList>
      </Box>
    </Stack>
    {/* <img
      src="/assets/fimg1.avif"
      alt="1"
    /> */}
  </div>
</div>


<Box 
  sx={{ 
    display: 'flex', 
    backgroundColor: 'white', 
    width: '100%', 
    height: 'auto', 
    mt: 12, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    textAlign: 'center',
    // marginX:"auto",
    flexDirection: { xs: 'column', sm: 'row' },  // Flex direction column on small screens
  }}
>
  {/* First Box */}
  <Box sx={{ 
    width: { xs: '100%', sm: '45%' },  // Full width on small screens, 25% on larger
    height: 'auto', 
    textAlign: 'center', 
    mt: { xs: 2, sm: 0 },
    mr: '30px'
  }}>
    <Button 
      variant='contained' 
      sx={{ 
        fontSize: { xs: '16px', sm: '20px' },  // Smaller font size on small screens
        color: 'white', 
        mt: 3, 
        width:'100%',
        backgroundColor: 'black', 
        height: { xs: '60px', sm: '80px' },  // Smaller height on small screens
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}
    > 
      <Box component="span" fontWeight="bold">WHAT HAPPENS </Box>
      <Box component="span" fontWeight="normal">HERE</Box>
    </Button>
  </Box>

  {/* Divider */}
  <Box sx={{ 
    backgroundColor: 'lightgray', 
    width: '0.2%', 
    height: '150px', 
    display: { xs: 'none', sm: 'block' } , // Hide divider on small screens
    
  }}></Box>

  {/* Second Box */}
  <Box sx={{ 
    width: { xs: '100%', sm: '25%' }, 
    height: 'auto', 
    mt: { xs: 2, sm: 0 },
    ml:"20px",
    textAlign: { xs: 'center', sm: 'left' }  // Centered text on small screens
  }}>
    <Typography 
      sx={{ 
        color: 'gray', 
        fontWeight: 'bold', 
        fontSize: { xs: '12px', sm: '14px' },  // Smaller font on small screens
      }}
    >
      THINGS TO DO
    </Typography>
    <Typography 
      sx={{ 
        mt: 1, 
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: { xs: '14px', sm: '16px' },  // Adjust font size for responsiveness
      }}
    >
      Outdoor Fun In Las Vegas
    </Typography>
  </Box>

  {/* Divider */}
  <Box sx={{ 
    backgroundColor: 'lightgray', 
    width: '0.2%', 
    height: '150px', 
    display: { xs: 'none', sm: 'block' } 
  }}></Box>

  {/* Third Box */}
  <Box sx={{ 
    width: { xs: '100%', sm: '25%' }, 
    height: 'auto', 
    ml:"20px",
    mt: { xs: 2, sm: 0 }, 
    textAlign: { xs: 'center', sm: 'left' } 
  }}>
    <Typography 
      sx={{ 
        color: 'gray', 
        fontWeight: 'bold', 
        fontSize: { xs: '12px', sm: '14px' } 
      }}
    >
      FIRST TIME IN VEGAS
    </Typography>
    <Typography 
      sx={{ 
        mt: 1, 
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: { xs: '14px', sm: '16px' } 
      }}
    >
      Getting Around Vegas
    </Typography>
  </Box>

  {/* Divider */}
  <Box sx={{ 
    backgroundColor: 'lightgray', 
    width: '0.2%', 
    height: '150px', 
    display: { xs: 'none', sm: 'block' } 
  }}></Box>

  {/* Fourth Box */}
  <Box sx={{ 
    width: { xs: '100%', sm: '25%' }, 
    height: 'auto', 
    mt: { xs: 2, sm: 0 },
    ml:"20px", 
    textAlign: { xs: 'center', sm: 'left' } 
  }}>
    <Typography 
      sx={{ 
        color: 'gray', 
        fontWeight: 'bold', 
        fontSize: { xs: '12px', sm: '14px' } 
      }}
    >
      EAT & DRINK
    </Typography>
    <Typography 
      sx={{ 
        mt: 1, 
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: { xs: '14px', sm: '16px' } 
      }}
    >
      9 Las Vegas Celebrity Chefs And Their Restaurants
    </Typography>
  </Box>
</Box>



  <Box sx={{ width: '100%', backgroundColor: 'black', color: 'white', py: 3,marginTop:"3rem" }}>
      {/* Hotel Deals and Signup Section */}
      <div style={{display:"flex",gap:"80px",flexWrap:"wrap",justifyContent:"center" }}>
        <div>
      <Box
        sx={{
         width: {sx:"full",md:'800px'},
         marginBottom:{sm:"2rem",lg:"0rem"},
          // margin: '0 0',
          backgroundColor: '#424242',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 3,
          px: 3,
          flexWrap: 'wrap',
         
          // flexDirection: isMobile ? 'column' : 'row',
          // alignItems: 'center',
          // justifyContent: 'space-between',
          // px: 3,
          // py: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontSize: isMobile ? '20px' : '24px', color: 'white', textAlign: isMobile ? 'center' : 'left', mb: isMobile ? 2 : 0 }}>
          <Box component="span" fontWeight="bold" sx={{ mr: 1 }}>
            HOTEL DEALS
          </Box>
          <Box component="span" fontWeight="normal">
            AND VEGAS UPDATES
          </Box>
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: 'white',
            backgroundColor: '#aa00ff',
            height: '35px',
            width: isMobile ? '100%' : '150px',
          }}
        >
          SIGN UP
        </Button>
      </Box>
      </div>
      <div style={{marginTop:"-5rem"}} >
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start'  }}>
          <Box component={'img'} src="/assets/gimg1.png" sx={{ width: '100%', maxWidth: '300px', mb: 2, display:{xs:"none",lg:"block"} }} />
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
              backgroundColor: '#f50057',
              py: 2,
              textAlign: 'center',
              mb: 2,
              borderRadius: '8px',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontSize: isMobile ? '18px' : '20px' }}>
              <Box component="span" fontWeight="bold">Join The Millions</Box>
              <Box component="span"> Who Follow Us</Box>
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center', mb: 2 }}>
            FOLLOW US FOR MUST-SEE LAS VEGAS EXPERIENCES
          </Typography>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[faTiktok, faInstagram, faTwitter, faFacebook, faYoutube, faSnapchatGhost].map((icon, index) => (
              <IconButton key={index} sx={{ backgroundColor: '#f50057', color: 'white', m: 0.5, '&:hover': { backgroundColor: '#f50057' } }}>
                <FontAwesomeIcon icon={icon} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </div>
      
        
      </div>

      {/* Footer Main Section */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          marginTop: {sm:"0rem",md:"-11rem"},
          flexWrap:"wrap",
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
       
        textAlign:{xs:"center",md:"start"},
          py: 4,
          px: isMobile ? 2 : 3,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, mb: isMobile ? 4 : 0 }} className='follow'>
          <Typography sx={{ fontWeight: 'bold', mb: 2 }}>LAS VEGAS®</Typography>
          <Box sx={{ mb: 2 }}>
            <Typography>3150 Paradise Road</Typography>
            <Typography>Las Vegas, NV 89109</Typography>
            <Typography>Toll-Free: 877-847-4858</Typography>
          </Box>
          <Box sx={{ mt: 2, fontSize: '18px', fontWeight: 'bold' }}>
            <Typography>WHAT HAPPENS HERE,</Typography>
            <Typography>ONLY HAPPENS HERE™.</Typography>
          </Box>
          <Typography sx={{ mt: 4, color: 'gray', fontSize: '14px' }}>
            THE ONLY OFFICIAL WEBSITE OF LAS VEGAS®
            <br />
            © 2024 Las Vegas Convention and Visitors Authority. All rights reserved.
          </Typography>
        </Box>

        {/* Middle Section */}
        <Box sx={{ flex: 1, mb: isMobile ? 4 : 0 }} className='follow'>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Privacy Policy</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>International Travel Info</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Sitemap</Typography>
          </Box>
          <Box sx={{ mt: 2, fontWeight: 'bold', fontSize: '18px' }}>
            <Typography>VisitLaughlin.com</Typography>
            <Typography>VisitMesquite.com</Typography>
            <Typography>VisitBoulderCity.com</Typography>
          </Box>
          <Typography sx={{ mt: 4, color: 'gray', fontSize: '14px' }}>
            If you'd like to learn more about responsible gaming, please consult the Nevada Council or call 1-800-522-4700
          </Typography>
        </Box>

        {/* Right Section */}
        {/* <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
          <Box component={'img'} src="/assets/gimg1.png" sx={{ width: '100%', maxWidth: '300px', mb: 2 }} />
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
              backgroundColor: '#f50057',
              py: 2,
              textAlign: 'center',
              mb: 2,
              borderRadius: '8px',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontSize: isMobile ? '18px' : '20px' }}>
              <Box component="span" fontWeight="bold">Join The Millions</Box>
              <Box component="span"> Who Follow Us</Box>
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center', mb: 2 }}>
            FOLLOW US FOR MUST-SEE LAS VEGAS EXPERIENCES
          </Typography>

          {/* Social Media Icons */}
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[faTiktok, faInstagram, faTwitter, faFacebook, faYoutube, faSnapchatGhost].map((icon, index) => (
              <IconButton key={index} sx={{ backgroundColor: '#f50057', color: 'white', m: 0.5, '&:hover': { backgroundColor: '#f50057' } }}>
                <FontAwesomeIcon icon={icon} />
              </IconButton>
            ))}
          </Box>
        </Box>  */}
      </Box>
    </Box>
    
    


  
      
</AppBar>
    
  )
}
const itemData=[
  {
    img: '/assets/fimg2.jpg',
    title: '2'
  },
  {
    img: '/assets/fimg3.jpg',
    title: '3'
  },
  {
    img: '/assets/fimg4.jpg',
    title: '4'
  },
  {
    img: '/assets/fimg5.jpg',
    title: '5'
  },
  {
    img: '/assets/fimg6.jpg',
    title: '6'
  },
  {
    img: '/assets/fimg7.jpg',
    title: '7'
  },
  {
    img: '/assets/fimg8.jpg',
    title: '8'
  },
  {
    img: '/assets/fimg9.jpg',
    title: '9'
  },
  {
    img: '/assets/fimg10.jpg',
    title: '10'
  },
  {
    img: '/assets/fimg11.jpg',
    title: '11'
  },
  {
    img: '/assets/fimg12.jpg',
    title: '12'
  },
  {
    img: '/assets/fimg13.jpg',
    title: '13'
  },
  {
    img: '/assets/fimg14.jpg',
    title: '14'
  },
  {
    img: '/assets/fimg15.jpg',
    title: '15'
  },
  {
    img: '/assets/fimg16.jpg',
    title: '16'
  },
  {
    img: '/assets/fimg17.jpg',
    title: '17'
  },
  {
    img: '/assets/fimg18.jpg',
    title: '18'
  },
  {
    img: '/assets/fimg19.jpg',
    title: '19'
  },
  {
    img: '/assets/fimg20.jpg',
    title: '20'
  },
  
]

export default MuiLasvegas
