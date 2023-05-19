import React, { useEffect, useState } from 'react';

const MyTable = () => {
  const [documents, setDocuments] = useState();

  useEffect(() => {
 fetch('http://localhost:5001/data')
 .then(res=>res.json())
 .then(data=> 
 setDocuments(data))
 .catch(err=>console.log(err))
     
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


