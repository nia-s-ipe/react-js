import React from 'react';

interface StatusDropdownProps {
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ statusFilter, setStatusFilter }) => {
  return (
    <div className="form-group">
      <select
        className="form-control"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default StatusDropdown;
