import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "./Contexts";
import { toast } from "react-toastify";

const Table = () => {
  const { tableRender } = useContext(MyContext);
  const [tableData, setTableData] = useState([]);
  const fetchData = async () => {
    try {
      await axios.get("http://localhost:4001/enter").then((response) => {
        console.log(response.data.data);
        setTableData(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [tableRender]);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete(`http://localhost:4001/enter?id=${id}`)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Data Deleted Successfully !", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            fetchData();
          } else {
            console.error("Failed to delete data");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="table-container">
      <table width="100%" cellSpacing={0}>
        <thead>
          <tr>
            <th className="table-heading">S.No.</th>
            <th className="table-heading">Category</th>
            <th className="table-heading">Test</th>
            <th className="table-heading">Price</th>
            <th className="table-heading">Unit</th>
            <th className="table-heading">Reference Value</th>
            <th className="table-heading">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={item._id}>
                <td className="table-heading">{index + 1}</td>
                <td className="table-heading">{item.Category}</td>
                <td className="table-heading">{item.Testname}</td>
                <td className="table-heading">{item.Price}</td>
                <td className="table-heading">{item.Unit}</td>
                <td className="table-heading">{item.RefValue}</td>
                <td className="table-heading">
                  <button
                    onClick={() => {
                      handleRemove(item._id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
