import React from 'react';
import './ReportsLayout.css';

const ReportsLayout = ({ reports }) => {
  return (
    <div className="reports-layout">
      {reports.map((report, index) => (
        <div key={index} className="report-card">
          <h3 className="report-title">{report.title}</h3>
          <p className="report-content">{report.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportsLayout;