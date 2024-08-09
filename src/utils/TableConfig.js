export const config = [
  {
    label: "First Name",
    render: employee => employee.firstName,
    sortValue: employee => employee.firstName,
    showRow: true,
  },
  {
    label: "Last Name",
    render: employee => employee.lastName,
    sortValue: employee => employee.lastName,
    showRow: true,
  },
  {
    label: "Department",
    render: employee => employee.department,
    sortValue: employee => employee.department,
    showRow: true,
  },
  {
    label: "Date of Birth",
    render: employee => employee.dateOfBirth,
    sortValue: employee => employee.dateOfBirth,
    showRow: true,
  },
  {
    label: "Start Date",
    render: employee => employee.startDate,
    sortValue: employee => employee.startDate,
    showRow: true,
  },
  {
    label: "City",
    render: employee => employee.city,
    sortValue: employee => employee.city,
  },
  {
    label: "Street",
    render: employee => employee.street,
    sortValue: employee => employee.street,
  },
  {
    label: "State",
    render: employee => employee.state,
    sortValue: employee => employee.state,
  },
  {
    label: "Zip",
    render: employee => employee.zip,
    sortValue: employee => employee.zip,
  },
];

export const searchByOptions = [
  { label: "All", value: "all" },
  { label: "First Name", value: "firstName" },
  { label: "Last Name", value: "lastName" },
  { label: "Date of Birth", value: "dateOfBirth" },
  { label: "Start Date", value: "startDate" },
  { label: "Department", value: "department" },
  { label: "Street", value: "street" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
  { label: "Zip", value: "zip" },
];

export const sortByOptions = [
  { label: "First Name", value: "First Name" },
  { label: "Last Name", value: "Last Name" },
  { label: "Date of Birth", value: "Date of Birth" },
  { label: "Start Date", value: "Start Date" },
  { label: "Department", value: "Department" },
  { label: "Street", value: "Street" },
  { label: "City", value: "City" },
  { label: "State", value: "State" },
  { label: "Zip", value: "Zip" },
];

export const orderOptions = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

export const itemsPerPage = [
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "100", value: 100 },
];
