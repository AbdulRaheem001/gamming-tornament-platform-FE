import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Component/Commen/HomePage";
import MainLogIn from "./Component/Commen/MainLogIn";
import PlayerLogin from "./Component/Player/PlayerLogin";
import OrginizerLogin from "./Component/Orginizer/OrginizerLogin";
import Gamelist from "./Component/Commen/gamelist";
import CoinShop from "./Component/Commen/coinshop";
import Signup from "./Component/Player/Playersignup";
import TournamentList from "./Component/Player/tournamentlisting";
import Wallet from "./Component/Wallet/wallet";
import Room from "./Component/Player/Room/room";
import OrginizerSignup from "./Component/Orginizer/OrginizerSignup";
import AdminLogin from "./Component/Admin/AdminLogin";
import Organizer_Panel from "./Component/Orginizer/dashboard";
import MyTournaments from "./Component/Orginizer/tournaments";
import Overview from "./Component/Orginizer/overview";
import Room_Settings from "./Component/Orginizer/tournamentsetting";
import FinalStandings from "./Component/Orginizer/org_results";
import Registered_Players from "./Component/Orginizer/org_participant";
import Organizer_Comments from "./Component/Orginizer/org_comment";
import Creat_Tournament from "./Component/Orginizer/CreatTournament";
import Organizer_wallet from "./Component/Orginizer/org_wallet";

import Room_description from "./Component/Player/Room/description";
import Room_participants from "./Component/Player/Room/participants";
import Room_rules from "./Component/Player/Room/rules";
import Room_comments from "./Component/Player/Room/comments";
import Room_results from "./Component/Player/Room/results";

import Admin from "./Component/Admin/admin";
import Admin_games from "./Component/Admin/admingames";
import Player_details from "./Component/Admin/player_details";
import Organizer_details from "./Component/Admin/organizer_details";
import Tournament_details from "./Component/Admin/tournament_details";
import Coin_package from "./Component/Admin/coin_packages";
import Payments from "./Component/Admin/payments";



const App = () => {
  const [adminToken, setAdminToken] = useState(null); // State to store the admin token
  const [orginizerToken, setOrginizerToken] = useState(""); // State to store the organizer token
  const [playerToken, setPlayerToken] = useState(""); // State to store the player token

  // Check for the tokens in local storage on app load
  useEffect(() => {
    const storedAdminToken = localStorage.getItem("adminToken");
    if (storedAdminToken) {
      setAdminToken(storedAdminToken);
    }
    const storedOrginizerToken = localStorage.getItem("orginizerToken");
    if (storedOrginizerToken) {
      setOrginizerToken(storedOrginizerToken);
    }
    const storedPlayerToken = localStorage.getItem("playerToken");
    if (storedPlayerToken) {
      setPlayerToken(storedPlayerToken);
    }
  }, []);

  const navigate = useNavigate();

  // Function to handle admin login and set the token
  const handleAdminLogin = (token) => {
    setAdminToken(token);
    localStorage.setItem("adminToken", token);
    navigate("/admin");
  };

  // Function to handle admin logout and clear the token
  const handleAdminLogout = () => {
    setAdminToken("");
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  // Create similar functions for organizers and players

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/mainLogin" element={<MainLogIn />} />
      <Route exact path="/playerLogin" element={<PlayerLogin />} />
      <Route exact path="/orginizerLogin" element={<OrginizerLogin />} />
      <Route exact path="/gamelist" element={<Gamelist />} />
      <Route exact path="/coinshop" element={<CoinShop />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/orginizerSignup" element={<OrginizerSignup />} />
      <Route exact path="/tournamentlist" element={<TournamentList />} />
      <Route exact path="/wallet" element={<Wallet />} />
      <Route exact path="/room" element={<Room />} />


      {/* Admin Routes */}
      <Route exact path="/admin_games" element={<Admin_games />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/player_details" element={<Player_details />} />
      <Route exact path="/organizer_details" element={<Organizer_details />} />
      <Route exact path="/tournament_details" element={<Tournament_details />} />
      <Route exact path="/coin_package" element={<Coin_package />} />
      <Route exact path="/payments" element={<Payments />} />



      <Route
        exact
        path="/adminLogin"
        element={<AdminLogin onAdminLogin={handleAdminLogin} />}
      />
      {adminToken ? (
        <Route
          exact
          path="/admin" element={
            <Admin />
          }
        />
      ) : null}
      {/* Oraganizer Routes */}
      <Route exact path="/organizer_panel" element={<Organizer_Panel />} />
      <Route exact path="/mytournaments" element={<MyTournaments />} />
      <Route path="/overview" element={<Overview />} />
      <Route exact path="/room_settings" element={<Room_Settings />} />
      <Route exact path="/final_standings" element={<FinalStandings />} />
      <Route exact path="/registered_players" element={<Registered_Players />} />
      <Route exact path="/organizer_comments" element={<Organizer_Comments />} />
      <Route exact path="/creat_tournament" element={<Creat_Tournament />} />
      <Route exact path="/organizer_wallet" element={<Organizer_wallet />} />
      
      {/* Player Routes */}
      <Route exact path="/room_description" element={<Room_description />} />
      <Route exact path="/room_participants" element={<Room_participants />} />
      <Route exact path="/room_rules" element={<Room_rules />} />
      <Route exact path="/room_comments" element={<Room_comments />} />
      <Route exact path="/room_results" element={<Room_results />} />




    </Routes>
  );
};

export default App;