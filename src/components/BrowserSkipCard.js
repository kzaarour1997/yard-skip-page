import React from 'react';
import { Card, Box, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const SKIP_IMAGE = process.env.PUBLIC_URL + '/yard-skip.png';

const BrowserSkipCard = ({ skip, isSelected, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Card 
        className={isSelected ? 'selected-skip-card' : ''}
        sx={{ display: 'flex', alignItems: 'center', background: '#181818', color: '#fff', mb: 3, boxShadow: 3, borderRadius: 3 }}>
        <Box sx={{ flex: 1, p: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>{skip.size}-Yard Skip</Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 2 }}>
            Hire Period: {skip.hire_period_days} days
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            £{skip.price_before_vat} + VAT
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography
              sx={{
                backgroundColor: skip.allowed_on_road ? '#4caf50' : '#f44336',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.875rem',
                fontWeight: 500
              }}
            >
              {skip.allowed_on_road ? 'Road Allowed' : 'No Road Access'}
            </Typography>
            <Typography
              sx={{
                backgroundColor: skip.allows_heavy_waste ? '#4caf50' : '#f44336',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.875rem',
                fontWeight: 500
              }}
            >
              {skip.allows_heavy_waste ? 'Heavy Waste' : 'Light Waste'}
            </Typography>
          </Box>
        </Box>
        <CardMedia
          component="img"
          image={SKIP_IMAGE}
          alt={skip.size + '-Yard Skip'}
          sx={{
            width: { xs: 120, sm: 180, md: 220, lg: 300 },
            height: { xs: 120, sm: 180, md: 220, lg: 300 },
            objectFit: 'contain',
            m: 3,
            background: '#232323',
            borderRadius: 2
          }}
        />
      </Card>
    </motion.div>
  );
};

export default BrowserSkipCard; 