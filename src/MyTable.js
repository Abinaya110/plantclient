import React, { useEffect, useState } from 'react';

const MyTable = () => {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/fan_off');
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
   {
    documents ? 
  
    <table>
      <thead>
        <tr>
          <th>pH</th>
          <th>Temperature</th>
          <th>TDS</th>
          <th>Conductivity</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((document, index) => (
          <tr key={index}>
            <td>{document.pH}</td>
            <td>{document.Temperature}</td>
            <td>{document.TDS}</td>
            <td>{document.Conductivity}</td>
          </tr>
        ))}
      </tbody>
    </table> : null }
    </div>

  );
};

export default MyTable;


