function formatRecords( studentsRecordDetails ) {
      return studentsRecordDetails
   .map(function(student) {
       return JSON.parse(student)
  })
	.filter(function(student) {
        if (student.graduating && student.studentId)
   		return student.graduating;
  })
	.reduce(function (accumulator, currentValue, index) {
        let result = (accumulator.name ? accumulator.name : accumulator) 
        if (index !== 0)
         result += ', ' 
        
        result += currentValue.name;
        return result;
   }, []); 

}

console.log(formatRecords(['{"name": "Christopher Nolan", "graduating": true}','{"studentId": 5783, "name": "Martina G.", "graduating": true}','{"studentId": 21, "name": "Whitney brad", "graduating": true}','{"studentId": 2130, "name": "bteshome", "graduating": true}']))