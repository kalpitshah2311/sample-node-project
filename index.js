const express = require('express');
const app = express();

// Configure MySQL connection



app.use(express.urlencoded({ extended: false }));
let student = 
          {'20-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
    '19-08-2023':[{"std":1,"present":8,"absent":6,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
    '18-08-2023':[{"std":1,"present":9,"absent":5,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
    '17-08-2023':[{"std":1,"present":10,"absent":4,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
    '16-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
    '15-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
    '14-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
    '13-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
          '12-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
          '11-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
          '10-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
          '09-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}],
          '08-08-2023':[{"std":1,"present":7,"absent":7,"total":14},{"std":2,"present":7,"absent":7,"total":14},{"std":3,"present":11,"absent":5,"total":16}]};
;


;
app.get('/', (req, res) => {
    res.json(student);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
