import app from '../../src/app';
import request from 'supertest';
import Client from '../../src/database/Client';

describe('Client repository', () => {
  afterAll(async () => {
    await Client.$disconnect();
  });

  afterEach(async () => {
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

    expect(response.body).toBeDefined();
  });

  it('Should return all clients', async () => {
    const response = await request(app).get('/clients/all').expect(200);

    console.log(response.body);

    expect(response.body).toBeDefined();
  });
});
