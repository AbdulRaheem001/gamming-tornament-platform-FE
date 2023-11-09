import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
  Dialog,
} from '@mui/material';
import coinimg from '../Commen/img/coins.png';
import Navbar from '../Commen/Navbar';
import Footer from '../Commen/Footer';

// Import the CustomizedTables component for transaction details

import TransactionTable from './transactionTable'; // Import the TransactionTable component

const CoinShop = () => {
  const [walletBalance, setWalletBalance] = useState(500); // Initialize wallet balance
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);

  // Define your coin packages here
  const coinPackages = [
    { id: 1, amount: 100, price: 5, image: coinimg },
    { id: 2, amount: 500, price: 25, image: coinimg },
    { id: 3, amount: 1000, price: 50, image: coinimg },
    { id: 4, amount: 2000, price: 100, image: coinimg },
    { id: 5, amount: 5000, price: 250, image: coinimg },
    { id: 6, amount: 10000, price: 500, image: coinimg },
  ];

  const handleBuy = (coinPackage) => {
    // Handle the buy action here
    console.log('Buy action for', coinPackage.amount, 'Coins');
  };

  const handleWithdraw = () => {
    // Handle the withdraw action here
    if (parseFloat(withdrawAmount) >= 50) {
      setWalletBalance(walletBalance - parseFloat(withdrawAmount));
      setWithdrawDialogOpen(false);
    }
  };

  return (
    <>
      <Navbar />
      <Box
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          marginTop: '0px',
        }}
      >
        <Card
          style={{
            width: '50%',
            backgroundColor: '#000',
            border: '1px solid #333',
            marginTop: '50px',
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              style={{ textAlign: 'center', color: '#45f884' }}
            >
              Wallet Balance: ${walletBalance}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20, backgroundColor: '#45f884' }}
              onClick={() => setWithdrawDialogOpen(true)}
            >
              Withdraw
            </Button>
          </CardContent>
        </Card>
        <Grid
          container
          spacing={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
          }}
        >
          {coinPackages.map((coinPackage) => (
            <Grid
              key={coinPackage.id}
              item
              xs={12}
              sm={4}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card
                style={{
                  width: '70%',
                  backgroundColor: '#000',
                  border: '1px solid #333',
                  margin: '10px auto',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ textAlign: 'center', color: '#45f884' }}
                  >
                    {coinPackage.amount} Coins
                  </Typography>
                  <img
                    src={coinPackage.image}
                    alt={`Coins ${coinPackage.amount}`}
                    style={{ maxWidth: '100%', marginTop: 16 }}
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ textAlign: 'center', color: '#45f884' }}
                  >
                    Price: ${coinPackage.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: 16, backgroundColor: '#45f884' }}
                    onClick={() => handleBuy(coinPackage)}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Transaction Details Table */}
 <TransactionTable /> {/* Add the TransactionTable component here */}
        <Grid
          container
          spacing={3}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 0,
            padding:"4px",
          }}
        >
          {coinPackages.map((coinPackage) => (
            console.log(" ")
          ))}
        </Grid>
      </Box>
      <Footer />
      <Dialog
        open={withdrawDialogOpen}
        onClose={() => setWithdrawDialogOpen(false)}
      >
        {/* ... (rest of your code) */}
      </Dialog>
    </>
  );
};
export default CoinShop;








// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Button,
//   Typography,
//   Grid,
//   Box,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from '@mui/material';
// import coinimg from '../Commen/img/coins.png';
// import Navbar from '../Commen/Navbar';
// import Footer from '../Commen/Footer';
// import TransactionTable from './transactionTable'; // Import the TransactionTable component

// // ... (rest of your code)

// const CoinShop = () => {
//   // ... (rest of your code)

//   return (
//     <>
//       <Navbar />
//       <Box
//         style={{
//           flexGrow: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: '#000',
//           marginTop: '0px',
//         }}
//       >
//         <Card
//           style={{
//             width: '50%',
//             backgroundColor: '#000',
//             border: '1px solid #333',
//             marginTop: '50px',
//           }}
//         >
//           <CardContent>
//             <Typography
//               variant="h6"
//               component="div"
//               style={{ textAlign: 'center', color: '#45f884' }}
//             >
//               Wallet Balance: ${walletBalance}
//             </Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               style={{ marginTop: 20, backgroundColor: '#45f884' }}
//               onClick={() => setWithdrawDialogOpen(true)}
//             >
//               Withdraw
//             </Button>
//           </CardContent>
//         </Card>
//         <TransactionTable /> {/* Add the TransactionTable component here */}
//         <Grid
//           container
//           spacing={3}
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: 0,
//           }}
//         >
//           {coinPackages.map((coinPackage) => (
//             console.log(" ")
//           ))}
//         </Grid>
//       </Box>
//       <Footer />
//       <Dialog
//         open={withdrawDialogOpen}
//         onClose={() => setWithdrawDialogOpen(false)}
//       >
//         {/* ... (rest of your code) */}
//       </Dialog>
//     </>
//   );
// };

// export default CoinShop;
