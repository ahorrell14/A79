import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import '../App.css'; // Import the CSS for styling

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="dashboard">
            <Navbar />
            <h1>UNC Charlotte: Rising as a Top-Tier Research University</h1>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNC Charlotte has solidified its place as one of the fastest-growing research universities in the 
                United States, climbing 46 spots in the National Science Foundation’s (NSF) Higher Education Research and 
                Development (HERD) Survey rankings. Released on November 25, 2024, the rankings reflect a record-breaking 
                $92 million in research expenditures for 2022-23, earning UNC Charlotte its highest-ever ranking at 
                No. 180 overall and establishing it as the third-largest public research university in North Carolina.
                Since unveiling a new vision in 2021 to achieve global recognition as a top-tier research institution, UNC 
                Charlotte has increased its research spending by an impressive 77%. Investments in research centers, strategic 
                partnerships, and faculty support have accelerated the university’s growth, positioning it as a hub for innovation, 
                economic development, and community engagement. Vice Chancellor John Daniels emphasized that every dollar invested in 
                research generates $5 in economic activity, underscoring UNC Charlotte’s role as a regional economic driver.
                Charlotte’s achievements extend across disciplines, with its highest HERD ranking in computer and information sciences 
                at No. 75, placing the university in the top 20% nationally. With annual research expenditures exceeding $50 million and 
                over 70 research doctorates awarded, UNC Charlotte is on track to achieve the prestigious R1 designation, recognizing 
                the nation’s top-tier research institutions.</p>
                <br /><br />
            <a href="https://inside.charlotte.edu/2024/12/03/charlotte-rises-in-national-research-rankings/" target="_blank">
                Read the full article here
            </a>
        </div>
    );
}

export default Dashboard;