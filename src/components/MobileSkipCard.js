import React from 'react';
import { Card, Box, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const SKIP_IMAGE = process.env.PUBLIC_URL + '/yard-skip.png';

const MobileSkipCard = ({ skip, isSelected, onClick, index }) => {
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
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          background: '#181818', 
          color: '#fff', 
          mb: 3, 
          boxShadow: 3, 
          borderRadius: 3 
        }}
      >
        <CardMedia
          component="img"
          image={SKIP_IMAGE}
          alt={skip.size + '-Yard Skip'}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            background: '#232323',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}
        />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontSize: '1.5rem' }}>{skip.size}-Yard Skip</Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 2, fontSize: '1rem' }}>
            Hire Period: {skip.hire_period_days} days
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontSize: '1.25rem' }}>
            £{skip.price_before_vat} + VAT
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Typography
              sx={{
                backgroundColor: skip.allowed_on_road ? '#4caf50' : '#f44336',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '1rem',
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
                fontSize: '1rem',
                fontWeight: 500
              }}
            >
              {skip.allows_heavy_waste ? 'Heavy Waste' : 'Light Waste'}
            </Typography>
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
};

export default MobileSkipCard; 