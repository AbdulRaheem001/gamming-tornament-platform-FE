
import Sidebar from './Components/sidebar'



import React from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar } from '@mui/material';
import { deepPurple, teal, orange, pink } from '@mui/material/colors';

const ChatScreen = () => {
  const comments = [
    { text: 'Great post!', author: 'User1' },
    { text: 'I agree with you.', author: 'User2' },
    { text: 'Interesting topic!', author: 'User3' },
    { text: 'Great post!', author: 'User1' },
    { text: 'I agree with you.', author: 'User2' },
    { text: 'Interesting topic!', author: 'User3' },
  ];

  const avatarColors = [deepPurple[500], teal[500], orange[500], pink[500]];

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flexGrow: 1, overflowY: 'auto', padding: '16px' }}>
        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h5" style={{ marginBottom: '16px' }}>
            Discussion
          </Typography>
          {comments.map((comment, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px',
                borderLeft: `4px solid ${avatarColors[index % avatarColors.length]}`,
                paddingLeft: '12px',
              }}
            >
              <Avatar
                style={{
                  width: 40,
                  height: 40,
                  fontSize: '1.25rem',
                  marginRight: '12px',
                  backgroundColor: avatarColors[index % avatarColors.length],
                }}
              >
                {comment.author[0]}
              </Avatar>
              <Box>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  {comment.author}
                </Typography>
                <Typography variant="body2" style={{ marginTop: '4px' }}>
                  {comment.text}
                </Typography>
              </Box>
            </div>
          ))}
        </Paper>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
        <TextField
          label="Leave a comment"
          variant="outlined"
          fullWidth
          style={{ marginRight: '16px', borderRadius: '20px', flex: 1 }}
        />
        <Button variant="contained" color="primary" style={{ borderRadius: '10px' }}>
          Send
        </Button>
      </div>
    </div>
  </Box>
      </Box>  
    </>
  );
};

export default ChatScreen;
