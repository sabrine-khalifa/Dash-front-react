import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
/*import AddFood from './AddFood';
import AddPeople from './AddPeople';
import DistributionForm from './DistributionForm';
import PeopleList from './PeopleList';
import DashboardHome from './DashboardHome';
import FoodList from './FoodList';
import AccountInfo from './AccountInfo';*/

const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>

  );
}

export default Dashboard;

