import app from '../../src/app';
import request from 'supertest';
import Client from '../../src/database/Client';

let createdUserId:number;

describe('Client repository', () => {
  afterAll(async () => {
    await Client.$disconnect();
    await Client.health_Problem.deleteMany();
    await Client.user.deleteMany();
  });

  // afterEach(async () => {
  // });

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

    console.log(response.body)

    expect(response.body).toBeDefined()

  })

});
