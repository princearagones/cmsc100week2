var should = require ('should-http'),
	request = require ('supertest');
	
describe("student", function(){
	var url = "localhost:5000";
	describe("find()", function(){
		it("should retrive all student records", function(done){ //test cases for that unit
			request(url).get('/students')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Array);//.and.have.lengthOf(6);
					done();
				});
		});	
	});
	describe("insert()", function(){
		it("should return the newly created record", function(done){ //test cases for that unit
			request(url).post('/students')
				.send({'studno':'2014-12345','name':'Betel'})
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.body.should.have.properties(['id','studno','name']);
					res.body.should.have.properties({
  					   studno: '2014-12345',
 					   name: 'Betel'
					});
					res.body.should.have.ownProperty('name').equal('Betel');
					res.body.should.have.ownProperty('studno').equal('2014-12345');
					done();
				});
		});	
	});
});
