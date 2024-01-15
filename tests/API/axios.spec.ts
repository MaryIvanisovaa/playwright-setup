import axios, { Axios } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import test from 'playwright/test';
import { CookieJar } from 'tough-cookie';

test.describe.only('Mocking response', async () => {
     let client: Axios;
     let userID: string;
     let token: string;
     let bookID: string;
     let addedISBN: string | undefined;
     
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
    bookID = loginData.data.collectionOfIsbns
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

      });

      // test('Delete book', async()=>{
      //   const response = await client.delete('BookStore/v1/Book', {
      //     "userId": userID,
      //     "collectionOfIsbns": [
      //       {
      //         "isbn": "9781449331818"
      //       }
      //     ]
      //   });
      test('Delete a book', async ({}) => {
     
        let bookIdToDelete = '9781449325862';
        let userIDForDelete = 'bef0c084-b01b-47a7-a71d-704cb0a0b342'
    
        const responseDelete = await client.delete(`BookStore/v1/Book?isbn=${bookIdToDelete}&userId=${userIDForDelete}`
        );
      
        console.log(responseDelete);
    });
    
      })
    // });





















