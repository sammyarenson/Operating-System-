function App(n,m,s){

    //Declare your instance variables here.
    this.name=n
    this.memory=m
    this.state=s

    //Declare the instance function open here.
    this.open = function(){
      this.state="actve";
    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if this.state="active"
      this.state="sleep"
    }
    //Declare the instance function active here.
    this.active = function(){

    }
    //Declare the instance function close here.
    this.close = function(){

    }

}

//Use the constructor to create 4 App objects below.



//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
