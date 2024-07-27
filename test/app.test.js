const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../app'); // Import the Express app
const {expect} = require('chai');
const request = require('supertest')



chai.use(chaiHttp);

describe('API Tests', () => {
  it('should return user list on / GET', async () => {
    const res = await request(app).get('/user')
    // console.log(res);
    expect(res).to.have.status(200);
    // expect(res.body).to.have.property('message').to.equal('Hello, World!');
  });
});