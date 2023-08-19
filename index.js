const express = require('express');
const app = express();

// Configure MySQL connection



app.use(express.urlencoded({ extended: false }));
let student = 
    [{"std":7,"present":7,"absent":7,"total":14},{"std":8,"present":11,"absent":5,"total":16}]
;
app.get('/', (req, res) => {
    res.json(student);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
