import React from 'react';
import Navbar from './navbar'; // Import the Navbar component
import ChartComponent from './chartComponent'; // Ensure this is correctly imported
import './styles/chartPages.css'; // Import the CSS for styling

const Summary = () => {
    return (
        <div className="container">
            <Navbar />
            <h1>Research Expenditures by Discipline</h1>
            {/* Pass the correct API endpoint to ChartComponent */}
            <ChartComponent 
                apiEndpoint="/api/discipline-data" 
                title="Expenditures by Discipline (in millions)" 
            />
            <p>
                This chart showcases research expenditures by discipline, including Computer Science, Engineering, and more. 
                Data reflects UNC Charlotte's performance as highlighted in the{' '}
                <a 
                    href="https://inside.charlotte.edu/2024/12/03/charlotte-rises-in-national-research-rankings/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Charlotte Rises in National Research Rankings
                </a>
            </p>
        </div>
    );
};

export default Summary;