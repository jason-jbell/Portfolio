import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const testy = () => {
  console.log('pushed button')
}

const theme = createTheme()
const cards = [
  {
    content: 'this is the first card',
    img: 'https://images.unsplash.com/photo-1574785525103-c35dd9b6bb91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9ybXVsYSUyMDF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    content: 'this is the second card',
    img: 'https://images.unsplash.com/photo-1537402792645-b6d9a3ac3fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ybXVsYSUyMDF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  }
]

const Home = () => {
  return (
    <div>
      <h1>BIG HOME</h1>
      <Link to={'/test'}>TESAT</Link>
      <Button variant='contained' onClick={testy}>CHECK ME OUT</Button>
      <Typography variant="h5" align="center" color="red" paragraph>
        Something short and leading about the collection below
      </Typography>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
          </Toolbar>
        </AppBar>
        <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={cards.indexOf(card)} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </ThemeProvider>
     
    </div>
  )
}

export default Home
