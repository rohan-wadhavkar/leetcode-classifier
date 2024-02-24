/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    
    let map = new Map();
    employees.forEach((employee) => {
        map.set(employee.id, employee);
    });

    let dfs = (id) => {
        let boss = (map.get(id));
        let totalImportanceVal = boss.importance;
        
        for (let subordinate of boss.subordinates) {
            totalImportanceVal += dfs(subordinate); 
        }
        
        return totalImportanceVal;
    }
    return dfs(id);
};