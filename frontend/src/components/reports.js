import React from 'react';
import ChartComponent from './chartComponent'; // Reusing the same ChartComponent
import './styles/chartPages.css'; // Import the CSS for styling
import Navbar from './navbar'; // Import the Navbar component

const Reports = () => {
    return (
        <div className="container">
            <Navbar />
            <h1>Annual Research Expenditures</h1>
            {/* Pass the correct API endpoint to ChartComponent */}
            <ChartComponent 
                apiEndpoint="/api/annual-growth" 
                title="Annual Growth in Research Expenditures (in millions)" 
            />
            <p>
                This chart illustrates the annual growth in research expenditures at UNC Charlotte, reflecting data from 2021 to 2023. 
                Source:{' '}
                <a 
                    href="https://inside.charlotte.edu/2024/12/03/charlotte-rises-in-national-research-rankings/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Charlotte Rises in National Research Rankings
                </a>.
            </p>
        </div>
    );
};

export default Reports;