
import {test, expect} from '@playwright/test';
import {validateSchema} from 'playwright-schema-validator';
import petStoreSwagger from '../schemas/petstore-swagger.json';

test('Create pet and get pet by ID', async ({ request, page }) => {

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

    expect(postResponse.status()).toBe(200);

    const postBody = await postResponse.json();

    // Validate POST response against Swagger schema
    await validateSchema(
        { page },
        postBody,
        petStoreSwagger,
        {
            endpoint: '/pet',
            method: 'post',
            status: 200
        }
    );

    // GET
    const getResponse = await request.get(
        'https://petstore.swagger.io/v2/pet/600'
    );

    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    // Validate GET response against Swagger schema
    await validateSchema(
        { page },
        getBody,
        petStoreSwagger,
        {
            endpoint: '/pet/{petId}',
            method: 'get',
            status: 200
        }
    );

    // Functional assertions
    expect(getBody).toMatchObject(pet);
});