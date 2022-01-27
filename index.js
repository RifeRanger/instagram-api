const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`express server running on port ${PORT}`);
});
