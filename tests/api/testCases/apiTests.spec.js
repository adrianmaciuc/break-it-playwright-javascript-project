import apiClient from './tests/api/requests/apiClient.js';
import {test, expect} from '@playwright/test';

async function fetchdata() {
    try{
        const data = await apiClient.get('endpoint');
        console.log(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

test("API GetAll", async () => {

    await fetchdata();
    
})