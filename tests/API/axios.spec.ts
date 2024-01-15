import axios, { Axios } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import test, { expect } from 'playwright/test';
import { CookieJar } from 'tough-cookie';

test.describe.only('Mocking response', async () => {
     let client: Axios;
     let userID: string;
     let token: string;
    
     
  test.beforeAll(async ({}) => {
    const jar = new CookieJar();
   
    client = wrapper(axios.create({
      baseURL: process.env.API_URL,
      validateStatus: function (status) {
        return status >= 200 && status < 300; 
      },
      jar
    }));

    const loginData = await client.post('Account/v1/Login', {
      "userName": "MaryI",
      "password": "Test123!"
    });
    userID = loginData.data.userId
    token = loginData.data.token
    console.log(loginData.data.userId);
    console.log(loginData.data.token);
  
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  });
  
  test('Post new book', async ({}) => {
    const response = await client.post('BookStore/v1/Books', {
      "userId": userID,
      "collectionOfIsbns": [
        {
          "isbn": "9781449331818"
        }
      ]
    });
  
    console.log(response);
    expect(response.status).toBeGreaterThanOrEqual(200);


      });

      test('Delete book', async()=>{
        const responseDelete = await client.delete('BookStore/v1/Book', {
        data:{
          "isbn": "9781449331818",
          "userId": userID
        }
        });

        console.log(responseDelete);
        expect(responseDelete.status).toBeGreaterThanOrEqual(200);
    })
    
      });





















