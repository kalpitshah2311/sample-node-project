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

let volunteer = {'23-08-2023':[
    {
      "name": "Aayushi Rajput",
      "institute": "rpcp",
      "department": "bpharm"
    },
    {
      "name": "Abhishek Darji",
      "institute": "depstar",
      "department": "cs"
    },
    {
      "name": "Aryan Upadhyay",
      "institute": "depstar",
      "department": "it"
    },
    {
      "name": "Honey Bekawala",
      "institute": "arip",
      "department": "bpt"
    },
    {
      "name": "Jainsi Patel",
      "institute": "pdpias",
      "department": "bsc"
    },
    {
      "name": "Jay Patel",
      "institute": "rpcp",
      "department": "bpharm"
    },
    {
      "name": "Jiya Shah",
      "institute": "arip",
      "department": "bpt"
    },
    {
      "name": "Kalpit Shah",
      "institute": "cspit",
      "department": "ce"
    },
    {
      "name": "Khushi Bhanushali",
      "institute": "arip",
      "department": "bpt"
    },
    {
      "name": "Khushi Patel",
      "institute": "arip",
      "department": "bpt"
    },
    {
      "name": "Prapti Kanbar",
      "institute": "rpcp",
      "department": "bpharm"
    },
    {
      "name": "Saloni Patel",
      "institute": "arip",
      "department": "bpt"
    },
    {
      "name": "Tisha Kuralwala",
      "institute": "rpcp",
      "department": "bpharm"
    },
    {
      "name": "Vanshi Bhatt",
      "institute": "arip",
      "department": "bpt"
    },
    {
      "name": "Yagnik Poshiya",
      "institute": "cspit",
      "department": "ce"
    }
  ]};

app.get('/', (req, res) => {
    res.json(student);
});

app.get('/volunteer', (req, res) => {
    res.json(volunteer);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
