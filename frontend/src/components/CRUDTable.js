// CRUDTable.js
import React from 'react';
import * as XLSX from 'xlsx';
import './CRUDTable.css'; // Import the CSS file

const CRUDTable = ({
                       data,
                       columns,
                       onAdd,
                       onEdit,
                       onDelete,
                       onInputChange,
                       newItem,
                       editingItem,
                       editValue
                   }) => {

    const handleExportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(data.map(item => {
            const row = {};
            columns.forEach(col => {
                row[col.field] = item[col.field];
            });
            return row;
        }));
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'data.xlsx');
    };

    return (
        <div className="crud-table-container">
            <button className="export-button" onClick={handleExportToExcel}>
                Export to Excel
            </button>
            <div className="crud-table-container">
                <table className="crud-table">
                    <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="crud-table-header">
                                {col.header}
                            </th>
                        ))}
                        <th className="crud-table-header">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {columns.map(col => (
                                <td key={col.field} className="crud-table-cell">
                                    {item[col.field]}
                                </td>
                            ))}
                            <td className="crud-table-actions">
                                <button onClick={() => onEdit(item)} className="crud-edit-button">Edit</button>
                                <button onClick={() => onDelete(item)} className="crud-delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {/* Add form inputs and buttons for adding and editing items */}
        </div>
    );
};

export default CRUDTable;
