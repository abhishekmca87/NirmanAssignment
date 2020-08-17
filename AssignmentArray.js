let cities=['Indore','Nagpur','Mumbai','Delhi','Chennai','Hydrabad','Pune','Patna','Bengaluru'];
// print all city where name is 4 or 5 letter
let SelectedCity=cities.filter(element => (element.length==4) ||(element.length==5));
console.log("4 or 5 Letter City=",SelectedCity);
//sort city assending order
let cityasending=cities.sort();
console.log("sort city asending",cityasending);
//sort city desending
let citydesending=cities.reverse();
console.log("sort city desending",citydesending);
//capital letter
let cityuparcase=cities.map(function(x){ return x.toUpperCase() })
console.log("capital letter",cityuparcase);
//check any city with 6 letter
let city6letter=cities.some(element =>element.length==6);
console.log("6 letter city",city6letter);

//---------------Assignment 2------------------------//

class Transation{
    constructor(tno,details,amount,drcr){
        this.tno=tno;
        this.details=details;
        this.amount=amount;
        this.drcr=drcr;
    }
}
let transarray=[new Transation(1,"details",1000,"dr"),new Transation(2,"details1",2000,"dr"),new Transation(3,"details2",3000,"cr"),new Transation(4,"details3",2000,"dr")];
console.log("Count of trans array=",transarray.length);
let transdebit=transarray.filter(x=>  x.drcr=="dr");
console.log("trans debit=",transdebit);
//Total of cr trans
let totalofcrtrans=transarray.filter(x =>  x.drcr=="cr")
                            .reduce((total,element)=>total+element.amount,0);
console.log("total of cr trans=",totalofcrtrans);
let tnno1000=transarray.filter(x => x.amount>1000);
console.log("tnno more than 1000",tnno1000);
//calculate diffrence between cr-dr

