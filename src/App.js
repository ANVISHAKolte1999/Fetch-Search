import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
function App() {
  const dataList = [
    {
      Name: "kamaljit",
      Age: 29,
      address: {
        city: "pune",
        State: "Maharashtra",
      },
    },
    {
      Name: "Sachin",
      Age: 29,
      address: {
        city: "Kolhapur",
        State: "Maharashtra",
      },
    },
    {
      Name: "Pratik",
      Age: 30,
      address: {
        city: "Surat",
        State: "Gujarat",
      },
    },

  ];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input

  const handleChange = (value) => {
    const receive = value;
    setSearchText(receive);
  };

  // filter records by search text
  const filterData = () => {
    const lowercasedValue = searchText.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <br />
      <br />
      <h1 style={{ marginLeft: "40%" }}> Search here.....</h1>
      <input
        style={{ marginLeft: "40%" }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
      />

      <Button onClick={filterData}>Search</Button>
      <div className="box-container">
        <Table striped bordered hover style={{ marginLeft: "40%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          {data.map((d, i) => {
            return (
              <tbody>
                <tr>
                  <td> {d.Name}</td>
                  <td>{d.Age}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>

        {dataList
          .filter((person) => person.Age > 29)
          .map((filteredPerson) => (
            <li>{filteredPerson.address.city}</li>
          ))}
<br></br>
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
}

export default App;

