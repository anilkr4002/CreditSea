import React, { useEffect, useState } from 'react';

const LoanStats: React.FC = () => {
  const [loanStats, setLoanStats] = useState([]);

  const fetchLoanStats = async () => {
    const response = await fetch('http://localhost:5000/api/loans/stats');
    const data = await response.json();
    setLoanStats(data);
  };

  useEffect(() => {
    fetchLoanStats();
  }, []);

  return (
    <div>
      <h2>Total Loan Stats by User</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Total Loan Amount</th>
          </tr>
        </thead>
        <tbody>
          {loanStats.map((userStat: any) => (
            <tr key={userStat.userId}>
              <td>{userStat.name}</td>
              <td>${userStat.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanStats;
