function get(obj, path, def) {

    var temp_obj = obj;
    var path_temp = [];
    if (typeof path !== 'string') path_temp = path;
    else {
        let path_item = path.split('.');
        for (let i in path_item) {
            let item = path_item[i].split(/\[([^}]+)\]/g);
            for (let m in item) {
                if (item[m]) {
                    path_temp.push(item[m]);
                }
            }
        }

    }

    for (let i in path_temp) {
        if (!temp_obj[path_temp[i]]) return def;

        temp_obj = temp_obj[path_temp[i]];
    }

    return temp_obj;

}


var  object  =   {  'a':  [{  'b':  {  'c':  3  }  }, {  'b':  {  'c':  4  }  }]  };
console.log(get(object,   ['a',  '1',  'b',  'c'], "def"));
console.log(get(object,  'a[0].b.c'));