/* jshint globalstrict: true, devel: true, node: true */
'use strict';

let obj = {
        className: 'first bordered'
    };

function switchClassName(obj, str) {
   
    let table = obj.className.split(" ");
    let flag = true;
    
    table.forEach(function(item, index) {
                    if (item === str) {
                        table.splice(index, 1);
                        flag = false;
                    }
                  });
    
    if (flag) {
        table.push(str);
    }
        
    obj.className = table.join(" ");
}


