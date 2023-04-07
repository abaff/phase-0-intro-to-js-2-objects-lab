// Write your solution in this file!
const employee = {
    name: "Allyson",
    streetAddress:"40 West Mosholu Parkway south ",
}

function updateEmployeeWithKeyAndValue(employee){
 const newEmployee = {...employee};
 newEmployee ["streetAddress"] = "11 Broadway";
 return newEmployee;
 // function updateEmployeeWithKeyAndValue(obj, key, value) {
 //     const newObj = { ... obj};
 //     newObj[key]= value;
 //     return newObj; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee){
employee ["streetAddress"] = "12 Broadway"
return employee
// function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
//     obj[key]=value;
//     return obj;
// }
}
function deleteFromEmployeeByKey(employee){
    const newEmployee = {employee};
    return newEmployee
    // function deleteFromEmployeeByKey(obj,key){
    //     const updatedObj ={... key};
    //     return updatedObj;
}
function destructivelyDeleteFromEmployeeByKey(employee) {
delete employee.name ;
return employee;
}
// function destructivelyDeleteFromEmployeeByKey(employee){
//    // obj[key] = value;
//     delete employee.name 
//     return employee 
