var expect = chai.expect;

 
describe ('MyFunctions', function() {
    describe('#doSomething', function() {
            it('should concatenate the two parameters', function () {
                var x = doSomething('Hello', 5); 
                expect(x).to.equal('Hello5');
            });

            it('should throw an error if first parameter is not a string', function() {
                expect (function() {
                    doSomething(5, 5);
                }).to.throw(Error);
            });
    

            it ('should equal array.', function(){
                var array1 =  averageArray ([]);
                expect(array1).to.equal([]);
            });


            });
        });



function doSomething(x, y) {
    if (typeof x != 'string'){
        throw new error('x must be a string');
  }
    return x + y;
}


function averageArray(array1) {
      if (typeof array1 != [] ){
        throw new Error('array must be an array');
  };
} 


