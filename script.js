function LocalDB (name, key, data){
    this.name = name;
    this.key = key;
    this.data = data;
};

LocalDB.prototype.save = function(){
    window.localStorage.setItem(this.key, JSON.stringify(this.data));
};

LocalDB.prototype.get = function(){
    console.log(JSON.parse(window.localStorage.getItem(this.key)));
};


var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
};
var DB1 = new LocalDB("DB1", "janek", janek)


 