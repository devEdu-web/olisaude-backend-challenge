import app from '../../src/app';
import request from 'supertest';
import Client from '../../src/database/Client';

let createdUserId:number;
let createdHealthProblems: any = []

describe('Client repository', () => {
  afterAll(async () => {
    await Client.$disconnect();
    await Client.health_Problem.deleteMany();
    await Client.user.deleteMany();
  });

  it('Should create a client', async () => {
    const mockClient = {
      name: 'Eduardo',
      birth_date: 'March 25, 2022',
      sex: 'M',
      health_problems: [{ name: 'diabetes', degree: 2 }],
    };

    const response = await request(app)
      .post('/clients/new')
      .send(mockClient)
      .expect(201);

    createdUserId = Number(response.body.id)
    createdHealthProblems = response.body.health_problems

    expect(response.body).toBeDefined();
  });

  it('Should return all clients', async () => {
    const response = await request(app).get('/clients/all').expect(200);
    expect(response.body).toBeDefined();
  });

  it('Should return a client by id', async () => {
    const response = await request(app)
    .get(`/clients/client/${createdUserId}`)
    .expect(200)

    // console.log(response.body)

    expect(response.body).toBeDefined()

  })

  it('Should update a client by id', async () => {
    const updatedClient = {
      name: 'Client updated',
      birth_date: 'March 25, 2022',
      sex: 'F',
    }
    const response = await request(app)
    .put(`/clients/update/${createdUserId}`)
    .send(updatedClient)
    .expect(201)

    expect(response.body).toBeDefined()

  })

  it('Should return clients with high risk', async () => {
    const response = await request(app)
    .get('/clients/high_risk')
    .expect(200)

    expect(response.body).toBeDefined()

  })

  it('Should update health problem from client', async () => {

    const healthProblemId = createdHealthProblems[0].id
    const mockHealthProblem = {
      name: 'updated',
      degree: 1000
    }

    const response = await request(app)
    .put(`/health_problems/update/${healthProblemId}`)
    .send(mockHealthProblem)
    .expect(201)

    console.log(response.body)

    expect(response.body).toBeDefined()

  })

});
