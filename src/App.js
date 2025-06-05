import React, { useEffect, useState, useRef } from 'react';
import { Container, Box, Typography, Button, MenuItem, Select, FormControl, InputLabel, Grid, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BrowserSkipCard from './components/BrowserSkipCard';
import MobileSkipCard from './components/MobileSkipCard';

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

function App() {
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const cardListRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch skips');
        return res.json();
      })
      .then(data => {
        setSkips(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardListRef.current && !cardListRef.current.contains(event.target)) {
        setSelectedSkipId(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filtering logic
  const filteredSkips = skips.filter(skip => {
    // Price filter
    let priceMatch = true;
    if (price === 'low') priceMatch = skip.price_before_vat < 300;
    if (price === 'medium') priceMatch = skip.price_before_vat >= 300 && skip.price_before_vat <= 450;
    if (price === 'high') priceMatch = skip.price_before_vat > 450;

    // Size filter
    let sizeMatch = true;
    if (size) sizeMatch = String(skip.size) === String(size);

    // Weight filter
    let weightMatch = true;
    if (weight === 'light') weightMatch = skip.allows_heavy_waste === false;
    if (weight === 'medium') weightMatch = skip.allows_heavy_waste === true && skip.size <= 8;
    if (weight === 'heavy') weightMatch = skip.allows_heavy_waste === true && skip.size > 8;

    return priceMatch && sizeMatch && weightMatch;
  });

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(180deg, #181818 0%, #232323 100%)', color: '#fff', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" sx={{ color: '#ff881a', fontWeight: 700, mb: 4, fontSize: { xs: '2.2rem', md: '3rem' } }}>
          yard skip rent
        </Typography>
        <Box sx={{ background: '#181818', borderRadius: 3, pt: 2, pb: 4, px: 3, mb: 4, boxShadow: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Filters</Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="filled" sx={{ background: '#232323', borderRadius: 1, maxWidth: 200, minWidth: 120, padding: '4px' }}>
                <InputLabel sx={{ color: '#fff', fontSize: '1.1rem' }}>{price === '' ? 'Price' : ''}</InputLabel>
                <Select value={price} onChange={e => setPrice(e.target.value)} label="Price" sx={{ color: '#fff', fontSize: '1.1rem', py: 0.5, minHeight: 40, height: 40 }} inputProps={{ sx: { fontSize: '1.1rem', py: 0.5, minHeight: 40, height: 40 } }}>
                  <MenuItem value="">Any</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="filled" sx={{ background: '#232323', borderRadius: 1, maxWidth: 200, minWidth: 120, padding: '4px' }}>
                <InputLabel sx={{ color: '#fff', fontSize: '1.1rem' }}>{size === '' ? 'Size' : ''}</InputLabel>
                <Select value={size} onChange={e => setSize(e.target.value)} label="Size" sx={{ color: '#fff', fontSize: '1.1rem', py: 0.5, minHeight: 40, height: 40 }} inputProps={{ sx: { fontSize: '1.1rem', py: 0.5, minHeight: 40, height: 40 } }}>
                  <MenuItem value="">Any</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="12">12</MenuItem>
                  <MenuItem value="14">14</MenuItem>
                  <MenuItem value="16">16</MenuItem>
                  <MenuItem value="20">20</MenuItem>
                  <MenuItem value="40">40</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="filled" sx={{ background: '#232323', borderRadius: 1, maxWidth: 200, minWidth: 120, padding: '4px' }}>
                <InputLabel sx={{ color: '#fff', fontSize: '1.1rem' }}>{weight === '' ? 'Weight' : ''}</InputLabel>
                <Select value={weight} onChange={e => setWeight(e.target.value)} label="Weight" sx={{ color: '#fff', fontSize: '1.1rem', py: 0.5, minHeight: 40, height: 40 }} inputProps={{ sx: { fontSize: '1.1rem', py: 0.5, minHeight: 40, height: 40 } }}>
                  <MenuItem value="">Any</MenuItem>
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="heavy">Heavy</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box ref={cardListRef}>
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
              <CircularProgress sx={{ color: '#ff881a' }} />
            </Box>
          )}
          {error && (
            <Typography color="error" align="center">{error}</Typography>
          )}
          {!loading && !error && filteredSkips.map((skip, idx) => {
            const isSelected = selectedSkipId === skip.id;
            const SkipCard = isMobile ? MobileSkipCard : BrowserSkipCard;
            return (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={isSelected}
                onClick={() => setSelectedSkipId(skip.id)}
                index={idx}
              />
            );
          })}
        </Box>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            fullWidth
            disabled={!selectedSkipId}
            sx={{
              background: selectedSkipId ? '#ff881a !important' : '#888888 !important',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.3rem',
              borderRadius: 2,
              py: 1.5,
              boxShadow: 0,
              cursor: selectedSkipId ? 'pointer' : 'not-allowed',
              '&:hover': {
                background: selectedSkipId ? '#ff9900 !important' : '#888888 !important',
              },
            }}
          >
            Select
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
