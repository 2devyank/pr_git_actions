let chai=require("chai")
let chaihttp=require("chai-http")
let app=require("../index.js")

chai.should();
chai.use(chaihttp);


describe('Task APIs',()=>{

    describe("Test GET route /card",()=>{
        it("It should return a object having mes key",(done)=>{
            chai.request(app)
            .get("/card")
            .end((err,response)=>{
                response.should.have.status(200);
                // response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.length.should.not.be.eq(0);
                
                done();
            });
        });

       


    })

})