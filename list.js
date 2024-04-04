export const getList = (addresses) => {
  return `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css" />
<title>Address book</title>
<meta charset="utf-8">
</head>
<body>
<h1>Address book</h1>
<table>
<thead>
<tr>
<th>Id</th>
<th>First Name</th>
<th>Last Name</th>
<th>Delete</th>
</tr>
</thead>
<tbody>
${addresses.map(createRow).join("")}
</tbody>
</table>
</body>
</html>`;
};

function createRow(address) {
  return `<tr>
<td>${address.id}</td>
<td>${address.firstname}</td>
<td>${address.lastname}</td>
<td><a href="/delete/${address.id}">delete</a></td>
</tr>`;
}
