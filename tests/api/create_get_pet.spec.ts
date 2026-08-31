import { test, expect } from '@playwright/test';

test('Create pet and get pet by ID', async ({ request }) => {

    const pet = {
        id: 600,
        category: {
            id: 0,
            name: 'German Shephard'
        },
        name: 'Tony',
        photoUrls: ['string'],
        tags: [
            {
                id: 0,
                name: 'Doggy'
            }
        ],
        status: 'available'
    };

    // POST
    const postResponse = await request.post(
        'https://petstore.swagger.io/v2/pet',
        {
            data: pet
        }
    );

    console.log('POST status:', postResponse.status());
    console.log('POST body:', await postResponse.text());

    expect(postResponse.ok()).toBeTruthy();

    // GET
    const getResponse = await request.get(
        'https://petstore.swagger.io/v2/pet/600'
    );

    console.log('GET status:', getResponse.status());
    console.log('GET body:', await getResponse.text());

    expect(getResponse.ok()).toBeTruthy();

    const body = await getResponse.json();

    console.log('GET JSON:', body);

    expect(body).toMatchObject(pet);
});