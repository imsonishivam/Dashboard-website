import React from "react";
import { useTable } from "react-table";

const columns = [
  {
    Header: "Product Name",
    accessor: "id",
    Cell: ({ row }) => (
      <div className="product-actual-item">
        <img src={row.original.src} alt="" />
        <div className="product-description">
          <h3>{row.original.title}</h3>
          <p>{row.original.para}</p>
        </div>
      </div>
    ),
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Sales",
    accessor: "sales",
  },
];

const data = [
  {
    src: "https://media.licdn.com/dms/image/C4E0BAQHLSW6Ad0O6vA/company-logo_200_200/0/1622066511013?e=2147483647&v=beta&t=0Gy0LGEr9kOBJhpeDj0vbS96S0gUxcU4Mzl1bI7si2U",
    title: "Fitpeo",
    para: "Fitpeo Tech is an unlisted private company incorporated on 20 March, 2023.",
    stock: "32 in stock",
    price: "$3012.50",
    sales: "20",
  },
  {
    src: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Information Tech",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    stock: "52 in stock",
    price: "$301.50",
    sales: "10",
  },
  {
    src: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fogg Info",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..",
    stock: "20 in stock",
    price: "$30122.50",
    sales: "5",
  },
];

const TableProduct = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((header) => (
                <th {...header.getHeaderProps()}>{header.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
