import app from '../../src/app';
import request from 'supertest';
import { PrismaClient } from '@prisma/client';

const testClient = new PrismaClient({
  datasources: {
    db: {
      url: 'mysql://root:Wyl4!d5cYmbSw@@localhost:3306/test_olisaude?schema=public',
    },
  },
});


describe('Client repository', () => {
  afterAll(async () => {
    await testClient.$disconnect();
  });

  afterEach(async () => {
    await testClient.user.deleteMany({});
  });

  it('Should create a user', async () => {
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
});
