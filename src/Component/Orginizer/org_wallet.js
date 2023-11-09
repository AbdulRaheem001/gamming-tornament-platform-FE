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
import Sidebar from './Components/sidebar';
// Import the CustomizedTables component for transaction details
import Title from './Components/title';

import TransactionTable from './Components/transactionTable'; // Import the TransactionTable component

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
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
            <Box
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    marginTop: '0px',
                }}
            >
                <Card
                    style={{
                        width: '50%',
                        backgroundColor: '#fff',
                        border: '1px solid blue',
                        marginTop: '50px',
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            component="div"
                            style={{ textAlign: 'center', color: 'primary' }}
                        >
                                    <Title>Wallet Balance</Title> ${walletBalance}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: 20, backgroundColor: 'primary' }}
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
                            xs={8}
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
                                    backgroundColor: '#fff',
                                    border: '1px solid blue',
                                    margin: '10px auto',
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        style={{ textAlign: 'center', color: 'primary' }}
                                    >
                                        {coinPackage.amount} Coins
                                    </Typography>
                                    <img
                                        src={coinPackage.image}
                                        alt={`Coins ${coinPackage.amount}`}
                                        style={{ width:'200px',height:'200px',objectFit:'cover', marginTop: 16 }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        style={{ textAlign: 'center', color: 'primary' }}
                                    >
                                        Price: ${coinPackage.price}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        style={{ marginTop: 16, backgroundColor: 'primary' }}
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
                        padding: "4px",
                    }}
                >
                    {coinPackages.map((coinPackage) => (
                        console.log(" ")
                    ))}
                </Grid>
            </Box>
            <Dialog
                open={withdrawDialogOpen}
                onClose={() => setWithdrawDialogOpen(false)}
            >
                {/* ... (rest of your code) */}
            </Dialog>
            </Box>
            </Box>
        </>
    );
};
export default CoinShop;